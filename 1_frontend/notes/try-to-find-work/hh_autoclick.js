const coverLetterText = 'Добрый день! Прошу рассмотреть мою кандидатуру на данную вакансию!';

const errors = [];
const withCoverLetter = [];
const alreadyResponded = [];
const addedToBlacklist = [];
const alreadyAddedToBlacklist = [];

// Добавляем счетчик откликов
let dailyResponses = 0;
const MAX_DAILY_RESPONSES = 200;
const RESPONSE_COUNT_KEY = 'hh_daily_responses';
const LAST_RESPONSE_DATE_KEY = 'hh_last_response_date';

// Добавляем ключи для localStorage
const LOGS_STORAGE_KEY = 'hh_process_logs';
const IS_VACANCY_PAGE_KEY = 'hh_is_vacancy_page';
const RETURN_URL_KEY = 'hh_return_url';

// Инициализация логов из localStorage
const processLogs = JSON.parse(localStorage.getItem(LOGS_STORAGE_KEY) || '[]');

const logProcess = (stage, details) => {
  const logEntry = {
    timestamp: new Date().toISOString(),
    stage,
    details,
    url: window.location.href
  };
  processLogs.push(logEntry);
  localStorage.setItem(LOGS_STORAGE_KEY, JSON.stringify(processLogs));
  console.info('🔍 Process Log:', logEntry);
};

// Загружаем сохраненные данные
const loadSavedData = () => {
  const savedDate = localStorage.getItem(LAST_RESPONSE_DATE_KEY);
  const today = new Date().toDateString();
  
  if (savedDate !== today) {
    localStorage.setItem(LAST_RESPONSE_DATE_KEY, today);
    localStorage.setItem(RESPONSE_COUNT_KEY, '0');
    dailyResponses = 0;
  } else {
    dailyResponses = parseInt(localStorage.getItem(RESPONSE_COUNT_KEY) || '0');
  }
};

// Обновляем счетчик откликов
const updateResponseCount = () => {
  dailyResponses++;
  localStorage.setItem(RESPONSE_COUNT_KEY, dailyResponses.toString());
};

const log = (...args) =>
  console.info(
    {
      errors,
      withCoverLetter,
      alreadyResponded,
      addedToBlacklist,
      alreadyAddedToBlacklist,
    },
    ...args,
  );

const triggerInputChange = (node, value = '') => {
  const inputTypes = [window.HTMLInputElement, window.HTMLSelectElement, window.HTMLTextAreaElement];

  // only process the change on elements we know have a value setter in their constructor
  if (inputTypes.indexOf(node.__proto__.constructor) > -1) {
    const setValue = Object.getOwnPropertyDescriptor(node.__proto__, 'value').set;
    const event = new Event('input', { bubbles: true });

    setValue.call(node, value);
    node.dispatchEvent(event);
  }
};

const wait = (ms = 100) => new Promise((res) => setTimeout(res, ms));

let prevLoc = window.location.href;

// Функция для определения типа страницы
const isVacancyPage = () => {
  return window.location.pathname.includes('/vacancy/') || 
         window.location.href.includes('/vacancy/');
};

// Функция для автоматического возврата, если мы на странице вакансии
const handleVacancyPage = async () => {
  if (isVacancyPage()) {
    logProcess('vacancyPage:detected', { url: window.location.href });
    const returnUrl = localStorage.getItem(RETURN_URL_KEY);
    
    if (returnUrl) {
      logProcess('vacancyPage:returning', { returnUrl });
      await wait(1500);
      window.location.href = returnUrl;
    } else {
      // Если returnUrl нет, просто идем назад
      logProcess('vacancyPage:goingBack', {});
      window.history.back();
      await wait(2000);
    }
  }
};

const checkLocAndRedirectBack = async () => {
  logProcess('checkLocAndRedirectBack:start', { prevLoc });
  
  // Сохраняем URL для возврата
  localStorage.setItem(RETURN_URL_KEY, prevLoc);
  
  await wait(2000);
  const newLoc = window.location.href;

  logProcess('checkLocAndRedirectBack:check', { newLoc, prevLoc, areSame: newLoc === prevLoc });

  if (newLoc !== prevLoc && isVacancyPage()) {
    logProcess('checkLocAndRedirectBack:redirect', { from: newLoc, to: prevLoc });
    
    window.history.back();
    await wait(2000);
    
    // Проверяем, вернулись ли мы действительно назад
    const afterRedirectLoc = window.location.href;
    logProcess('checkLocAndRedirectBack:afterRedirect', { 
      expectedLoc: prevLoc, 
      actualLoc: afterRedirectLoc,
      success: afterRedirectLoc === prevLoc 
    });
    
    return true;
  }
  
  logProcess('checkLocAndRedirectBack:end', { result: false });
  return false;
};

// Функция очистки временных данных
const clearTempData = () => {
  localStorage.removeItem(IS_VACANCY_PAGE_KEY);
  localStorage.removeItem(RETURN_URL_KEY);
};

const hideVacancyWithRedirect = async () => {
  await wait(1500);
  console.info('HIDE VACANCY');
  const hideButton = document.querySelector('[data-qa="vacancy-serp__vacancy_response"] [data-qa*="blacklist"]');
  hideButton?.click();

  await wait(500);

  const hideThisVacancy = document.querySelector('[data-qa*="blacklist-menu-add-vacancy"]');
  hideThisVacancy?.click();

  const vacancyElement = document.querySelector('.vacancy-serp-item');
  vacancyElement?.remove();

  prevLoc = window.location.href;
};

// Функция для закрытия чат-модалки
const closeChatModal = async () => {
  const chatCloseButton = document.querySelector('[data-qa="chatik-close-chatik"]');
  if (chatCloseButton) {
    logProcess('chat:closing', {});
    chatCloseButton.click();
    await wait(1500);
    
    if (window.location.href !== prevLoc) {
      logProcess('chat:locationChanged', { 
        expected: prevLoc,
        actual: window.location.href 
      });
      window.location.href = prevLoc;
      return true;
    }
    
    return true;
  }
  return false;
};

// Улучшенная функция поиска вакансий
const findVacancyItems = () => {
  // Несколько селекторов для поиска вакансий
  const selectors = [
    '[data-qa="vacancy-serp__vacancy"]',
    '[class*="vacancy-serp-item"]',
    '.serp-item'
  ];
  
  for (const selector of selectors) {
    const items = document.querySelectorAll(selector);
    if (items.length > 0) {
      logProcess('vacancy:itemsFound', { selector, count: items.length });
      return Array.from(items).filter(item => {
        // Фильтруем только те элементы, которые выглядят как вакансии
        const hasTitle = item.querySelector('[data-qa="serp-item__title"]') || 
                        item.querySelector('.serp-item__title') ||
                        item.querySelector('[class*="vacancy-name"]');
        return hasTitle;
      });
    }
  }
  
  return [];
};

// Улучшенная функция поиска кнопки отклика
const findRespondButton = (item) => {
  const buttonSelectors = [
    '[data-qa="vacancy-serp__vacancy_response"]',
    '[data-qa*="response"]',
    'a[class*="bloko-button_primary"]',
    'button[class*="bloko-button_primary"]'
  ];
  
  for (const selector of buttonSelectors) {
    const button = item.querySelector(selector);
    if (button && (button.textContent.includes('Откликнуться') || 
                   button.textContent.includes('Respond') ||
                   button.getAttribute('data-qa')?.includes('response'))) {
      return button;
    }
  }
  
  return null;
};

const runTasks = async () => {
  // Проверяем, не находимся ли мы на странице вакансии
  if (isVacancyPage()) {
    logProcess('runTasks:vacancyPageDetected', {});
    await handleVacancyPage();
    await wait(3000);
    return runTasks(); // Перезапускаем после возврата
  }

  // Очищаем временные данные при старте на основной странице
  clearTempData();

  logProcess('runTasks:start', { dailyResponses, MAX_DAILY_RESPONSES });
  
  loadSavedData();
  
  if (dailyResponses >= MAX_DAILY_RESPONSES) {
    logProcess('runTasks:limitReached', { dailyResponses });
    console.info('Достигнут лимит откликов на сегодня:', dailyResponses);
    return;
  }

  // Создаем Set для отслеживания обработанных вакансий
  const processedVacancies = new Set();

  while (true) {
    const items = findVacancyItems();
    logProcess('runTasks:items', { count: items.length });

    if (items.length === 0) {
      logProcess('runTasks:noItemsFound', {});
      break;
    }

    let processedAny = false;

    for (const item of items) {
      const jobTitleElement = item.querySelector('[data-qa="serp-item__title"]') || 
                             item.querySelector('.serp-item__title') ||
                             item.querySelector('[class*="vacancy-name"]');
      
      const jobTitle = jobTitleElement?.innerText?.trim();
      const jobHref = jobTitleElement?.href;

      // Проверяем, не обрабатывали ли мы уже эту вакансию
      if (processedVacancies.has(jobHref)) {
        logProcess('vacancy:skip:alreadyProcessed', { jobTitle, jobHref });
        continue;
      }

      processedVacancies.add(jobHref);
      logProcess('vacancy:processing', { jobTitle, jobHref });

      item.scrollIntoView({ behavior: 'smooth', block: 'center' });
      item.style.boxShadow = '0 0 5px red';

      const target = findRespondButton(item);

      if (target && ['Respond', 'Откликнуться'].some(text => target.textContent.includes(text))) {
        logProcess('vacancy:respond:start', { jobTitle });

        target.click();
        await wait(3000);
        
        // Проверяем и закрываем чат если он появился
        const chatWasClosed = await closeChatModal();
        if (chatWasClosed) {
          logProcess('vacancy:chat:closed', { jobTitle });
          await wait(1000);
          processedAny = true;
          continue;
        }
        
        const wasRedirect = await checkLocAndRedirectBack();
        logProcess('vacancy:respond:afterRedirect', { 
          wasRedirect, 
          currentUrl: window.location.href,
          jobTitle 
        });
        
        if (wasRedirect) {
          logProcess('vacancy:respond:skipAfterRedirect', { jobTitle });
          processedAny = true;
          continue;
        }

        updateResponseCount();
        logProcess('vacancy:respond:countUpdated', { dailyResponses });

        // Обработка предупреждения о вакансии в другой стране
        const relocateWarningButton = document.querySelector('[data-qa="relocation-warning-confirm"]');
        if (relocateWarningButton) {
          logProcess('vacancy:respond:relocateWarning', { jobTitle });
          relocateWarningButton.click();
          await wait(1000);
        }

        // Обработка сопроводительного письма
        const coverLetter = document.querySelector('[data-qa="vacancy-response-popup-form-letter-input"]');
        if (coverLetter) {
          logProcess('vacancy:respond:coverLetter:start', { jobTitle });
          
          triggerInputChange(coverLetter, coverLetterText);
          await wait(500);

          // Ждем пока кнопка станет активной
          const submitButton = document.querySelector('[data-qa="vacancy-response-submit-popup"]');
          let attempts = 0;
          while (submitButton?.disabled && attempts < 10) {
            logProcess('vacancy:respond:waitForButton', { attempts, jobTitle });
            await wait(500);
            attempts++;
          }

          if (attempts >= 10) {
            logProcess('vacancy:respond:buttonTimeout', { jobTitle });
          } else {
            logProcess('vacancy:respond:submitting', { jobTitle });
            submitButton?.click();
            withCoverLetter.push({ title: jobTitle, href: jobHref });
            await wait(2000);
          }
        }

        const errorText = document.querySelector('.vacancy-response-popup-error')?.innerText;

        if (errorText) {
          logProcess('vacancy:respond:error', { jobTitle, errorText });
          errors.push({ title: jobTitle, href: jobHref, error: errorText });
          const closeButton = document.querySelector('[data-qa="response-popup-close"]');
          closeButton?.click();
          processedAny = true;
          await wait(1000);
          continue;
        }

        logProcess('vacancy:respond:success', { jobTitle });
        processedAny = true;
      } else {
        logProcess('vacancy:alreadyResponded', { jobTitle });
        alreadyResponded.push({ title: jobTitle, href: jobHref });
      }

      await wait(1000);

      // Пытаемся добавить в черный список
      const blacklist = item.querySelector('[data-qa*="blacklist"]');
      if (blacklist) {
        blacklist.click();
        await wait(500);
        const blacklistConfirm = document.querySelector('[data-qa*="blacklist-menu-add-vacancy"]');
        blacklistConfirm?.click();

        addedToBlacklist.push({ title: jobTitle, href: jobHref });
        log(jobTitle, 'TO BLACK LIST');
      } else {
        alreadyAddedToBlacklist.push({ title: jobTitle, href: jobHref });
        log(jobTitle, 'already blacklisted or no button');
      }

      await wait(1000);
      item.style.boxShadow = '';
      
      // Удаляем обработанную вакансию из DOM
      item.remove();
      
      // Делаем паузу перед следующей вакансией
      await wait(1500);
      
      // Проверяем лимит после каждой вакансии
      if (dailyResponses >= MAX_DAILY_RESPONSES) {
        logProcess('runTasks:dailyLimitReached', { dailyResponses });
        console.info('Достигнут дневной лимит откликов');
        return;
      }
    }

    if (!processedAny) {
      logProcess('runTasks:noProcessableItems', {});
      break;
    }

    await wait(2000);
  }

  // Пагинация
  const nextSelectors = [
    '[data-qa="pager-next"]',
    '[data-qa="number-pages-next"]',
    'a[class*="bloko-button"][class*="pager-next"]'
  ];
  
  let nextButton = null;
  for (const selector of nextSelectors) {
    nextButton = document.querySelector(selector);
    if (nextButton) break;
  }

  if (nextButton && dailyResponses < MAX_DAILY_RESPONSES) {
    logProcess('pagination:next', { dailyResponses });
    nextButton.click();
    await wait(4000);
    await runTasks();
  } else {
    logProcess('pagination:end', { 
      hasNextButton: !!nextButton, 
      dailyResponses,
      reachedLimit: dailyResponses >= MAX_DAILY_RESPONSES 
    });
    console.info('Автокликкер завершил работу. Обработано откликов:', dailyResponses);
  }
};

// Функция для получения всех логов
const getLogs = () => {
  const logs = JSON.parse(localStorage.getItem(LOGS_STORAGE_KEY) || '[]');
  console.info('📋 All process logs:', logs);
  return logs;
};

// Функция для очистки логов
const clearLogs = () => {
  localStorage.setItem(LOGS_STORAGE_KEY, '[]');
  processLogs.length = 0;
};

// Запускаем скрипт с обработкой ошибок
const startAutoClicker = async () => {
  try {
    loadSavedData();
    await runTasks();
  } catch (error) {
    logProcess('error:critical', { error: error.message });
    console.error('Критическая ошибка:', error);
  }
};

// Запускаем
startAutoClicker();