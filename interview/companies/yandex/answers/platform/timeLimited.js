// ? Написать функцию timeLimited которая реджектит по истечению времени

// ? Дана асинхронная функция fn и время t в миллисекундах, нужно вернуть новую версию 
// ? этой функции, выполнение которой ограничено заданным временем.

// ? Функция fn принимает аргументы, переданные в эту новую функцию.
  
// ? Возвращаемая функция работает по следующим правилам: 
// ? - если fn выполнится за заданное время t, то функция резолвит полученные данные;
// ? - если fn не выполнился за заданное время t, то функция реджектит строку 
// ? "Time limit exceeded"


// ! ==================== Решение №1 =======================
const timeLimited = (fn, t) => {
  const str = "Time Limit Exceeded";
  const executor = (_, reject) => setTimeout(() => reject(str), t);

  return async (...args) => {
    const timeout = new Promise(executor);
    const result = fn(...args);
    return Promise.race([timeout, result])
  }
}

// ----- Объяснение -----
// 1. Создаем переменную в котором помещаем текст ошибки
// 2. Создаем функцию executor которая будет использовано для создания промиса. 
// Она будет использовать setTimeout, чтобы через время t отклонить промис с сообщением,
// которая мы передаем. Резолв нам не нужен мы можем его пропустить
// 3. Затем возвращаем функцию передавая в нее аргументы.
// 4. Внутрь возвращаемой функции поместить timeout который будет ожидать выполнения нашего промиса
// 5. После этого создаем еще одну переменную, где передаем функцию со всеми аргументами
// 6. И в конце необходимо просто вернуть метод Promise.race, где в качестве аргумента передаем массив
// Промисов и он возвращает результат первого которого завершится


// ! ==================== Решение №2 =======================
const timeLimited02 = (fn, t) => new Promise((resolve, reject) => {
    setTimeout(() => reject("Time Limit Exceeded"), t);
    fn(...args).then(resolve).catch(reject)
})

// ----- Объяснение -----
// 1. Возвращаем новый промис который принимает у нас сразу два параметра
// 2. В теле этого промиса запускаем setTimeout, которая время через t вызовет reject
// с нашим сообщением
// 3. А после timeout вызываем функцию fn передавая туда все аргументы и если fn
// завершается без ошибок мы используем чейнинк и метод then в которую опять же передаем
// resolve которая вернет наш результат и используем метод catch если она вернется с ошибкой

// ! ====================================================================================


// Тесты для проверки правильного решения задачи
async function test1() {
    const limitedFn = timeLimited(
        async (n) => { 
            await new Promise(res => setTimeout(res, 100)); 
            return n * n;
        }, 
        50
    );
    
    try {
        const result = await limitedFn(5);
        console.log('Test 1 FAILED: Expected rejection but got:', result);
    } catch (error) {
        if (error === "Time Limit Exceeded") {
            console.log('Test 1 PASSED: Correctly rejected with time limit');
        } else {
            console.log('Test 1 FAILED: Wrong rejection reason:', error);
        }
    }
}

// Тест 2: Функция выполняется быстрее лимита - должен быть resolve
async function test2() {
    const limitedFn = timeLimited(
        async (n) => { 
            await new Promise(res => setTimeout(res, 100)); 
            return n * n;
        }, 
        150
    );
    
    try {
        const result = await limitedFn(5);
        if (result === 25) {
            console.log('Test 2 PASSED: Correctly resolved with result:', result);
        } else {
            console.log('Test 2 FAILED: Wrong result:', result);
        }
    } catch (error) {
        console.log('Test 2 FAILED: Unexpected rejection:', error);
    }
}

// Тест 3: Функция с несколькими аргументами
async function test3() {
    const limitedFn = timeLimited(
        async (a, b) => { 
            await new Promise(res => setTimeout(res, 120)); 
            return a + b;
        }, 
        150
    );
    
    try {
        const result = await limitedFn(5, 10);
        if (result === 15) {
            console.log('Test 3 PASSED: Correctly resolved with result:', result);
        } else {
            console.log('Test 3 FAILED: Wrong result:', result);
        }
    } catch (error) {
        console.log('Test 3 FAILED: Unexpected rejection:', error);
    }
}

// Тест 4: Функция, которая выбрасывает ошибку
async function test4() {
    const limitedFn = timeLimited(
        async () => { 
            throw "Error"; 
        }, 
        1000
    );
    
    try {
        const result = await limitedFn();
        console.log('Test 4 FAILED: Expected rejection but got:', result);
    } catch (error) {
        if (error === "Error") {
            console.log('Test 4 PASSED: Correctly propagated original error');
        } else {
            console.log('Test 4 FAILED: Wrong rejection reason:', error);
        }
    }
}

// Запуск всех тестов
async function runTests() {
    await test1();
    await test2();
    await test3();
    await test4();
}

runTests();