// В прототипе рекламной сети продажа рекламных мест устроена следующий образом: покупатели заранее называют свою цену,
// а на каждое рекласное место отвечают, готовы они его купить или нет. Необходимо реализовать функцию, которая перед продажей
// рекласного места будет ожидать согласия согласия или отказа от покупателей с высокой ценой ставки, а затем продаст рекламное
// место покупателю с самой высокой ценой среди тех кто согласился на покупку

// Покупатели предлагают цену 1,5,10

// Покупатель с предложением 10 ответил отказом
// Покупатель с предложением 1 ответил согласием всё ещё ждем
// Покупатель с предложением 5 ответил согласием - выбираем покупателя с предложением 5

// Покупатели предлагают цену 1,5,10

//Покупатель с предложением 10 ответил отказом
//Покупатель с предложением 5 ответил согласием - выбираем покупателя с предложением 5

// Покупатели предлагают цену 1,2

// Покупатель с предложением 1 ответил отказом
// Покупатель с предложением 2 ответил отказом - не выбираем никого


// Нужна работа с промисами true false для промиса. После любого resolve проверяем, есть ли ещё не ответившие покупатели
// с большей ценой. Если нет, то возвращаем индекс лучшего или ошибку


// ===================================================================

// function bestBuyer(buyers) {
//     if (!buyers.length) {
//         return Promise.reject("No buyers");
//     }
//     let bestPrice = null;
//     let bestIndex = null;
//     let failedCount = 0;
//     const bestFound = () => bestPrice !== null && buyers.every(b => b.rejected || b.price <= bestPrice);
//     return new Promise((resolve, reject) => {
//         for (let i = 0; i < buyers.length; i += 1) {
//             buyers[i].accepts().then(res => {
//                 if (res) {
//                     if (bestPrice === null || bestPrice < buyers[i].price) {
//                         bestPrice = buyers[i].price;
//                         bestIndex = i;
//                     }
//                 } else {
//                     buyers[i].rejected = true;
//                     failedCount += 1;
//                     if (failedCount === buyers.length) {
//                         return reject(new Error("No one accepted offer"));
//                     }
//                 }
//                 if (bestFound()) {
//                     return resolve(buyers[bestIndex]);
//                 }
//             });
//         }
//     });
// }


// Логика такая: мы пытаемся найти хотя бы одного покупателя, который согласился,
// начиная с самой высокой цены. Если в самой дорогой группе никого согласного нет — переходим
// к следующей по цене и так далее, пока не найдём согласного или не исчерпаем все группы.
// Если мы прошли все группы и никто не согласился — выбрасываем ошибку.
async function bestBuyer(buyers) {
    if (!buyers.length) {
        throw new Error("No buyers");
    }
    for (let i = 0; i < buyers.length; i++) {
        buyers[i].index = i; // Добавляем индекс к каждому покупателю
        buyers[i].responsePromise = buyers[i].accepts(); // Сохраняем промис с результатом
    }
    const groupedBuyers = bestPrice(buyers);

    function bestPrice(buyers) {
        const groups = {};
        // Группируем покупателей по цене
        for (const buyer of buyers) {
            if (!groups[buyer.price]) {
                groups[buyer.price] = [];
            }
            groups[buyer.price].push(buyer);
        }
        // Возвращаем массив групп в порядке убывания цены
        return Object.values(groups).sort((a, b) => b[0].price - a[0].price);
    }

    // Перебираем группы цен в порядке убывания
    for (const group of groupedBuyers) {
        try {
            // Если в группе есть принятые предложения, возвращаем индекс
            return await firstBuyer(group);
        } catch {
            // Игнорируем, если никто из группы не согласился
        }
    }
    throw new Error("No one accepted offer");

    function firstBuyer(buyers) {
        return Promise.any(
            buyers.map((buyer) =>
                buyer.responsePromise.then((res) => {
                    if (res) {
                        return buyer.index; // Возвращаем индекс покупателя, если он согласен
                    } else {
                        throw new Error(); // Если отказался — исключение
                    }
                })
            )
        );
    }
}

// Цепочка вызовов
// 	1.	Вызываем bestBuyer(buyers).
// 	2.	Внутри bestBuyer для каждого покупателя вызывается buyer.accepts() и сохраняется resPromise.
// 	3.	bestPrice(buyers) группирует покупателей по ценам и сортирует группы.
// 	4.	Поочерёдно пытаемся await firstBuyer(group), начиная с самой дорогой группы.
// 	5.	Внутри firstBuyer применяем Promise.any ко всем промисам resPromise этой группы.
// 	6.	Promise.any будет дожидаться ответа:
// 	•	Если хотя бы один покупатель согласился — возвращаем его индекс сразу.
// 	•	Если все отказались, выбрасываем ошибку, которая сообщает bestBuyer, что надо переходить к следующей группе.
// 	7.	Если мы находим согласного покупателя, bestBuyer возвращает его индекс.
// 	8.	Если мы не находим ни в одной группе согласного — выбрасывается ошибка “No one accepted offer”.


console.clear();

// Симуляция асинхронного ответа
const asyncResponse = (ms, response) => () =>
    new Promise(resolve => setTimeout(() => resolve(response), ms));

// Утилита для тестирования
const testcase = async (label, expectedIndex, timeLimit, fn) => {
    const start = Date.now();
    try {
        const result = await fn();
        const duration = Date.now() - start;
        const testResult = `${label}: ${
            duration < timeLimit && result === expectedIndex ? 'OK' : 'FAIL'
        } (${duration}ms)`;
        console.log(testResult);
    } catch (error) {
        console.error(`${label}: ${error.message}`);
    }
};

// Основной тестовый запуск
(async () => {
    // Тест 1: Покупатели предлагают цены 1, 5, 10
    // Покупатель с предложением 10 - отказ
    // Покупатель с предложением 5 - согласие (выбираем 5)
    await testcase('1 5 10 // Price 5, index 2', 2, 350, async () => {
        const buyers = [
            {price: 10, accepts: asyncResponse(0, false)},
            {price: 1, accepts: asyncResponse(100, false)},
            {price: 5, accepts: asyncResponse(300, true)},
        ];
        return bestBuyer(buyers);
    });

    // Тест 2: Покупатели предлагают цены 1, 5, 10
    // Покупатель с предложением 10 - отказ
    // Покупатель с предложением 5 - согласие (выбираем 5)
    await testcase('1 5 10 // Price 5, index 2', 2, 250, async () => {
        const buyers = [
            {price: 10, accepts: asyncResponse(200, false)},
            {price: 1, accepts: asyncResponse(300, false)},
            {price: 5, accepts: asyncResponse(100, true)},
        ];
        return bestBuyer(buyers);
    });


    // Тест 2.5: Покупатели предлагают цены 1, 5, 10
    // Покупатель с предложением 10 - отказ
    // Покупатель с предложением 5 - согласие (выбираем 5)
    await testcase('1 5 10 // Price 5, index 1', 1, 150, async () => {
        const buyers = [
            {price: 10, accepts: asyncResponse(0, false)},
            {price: 5, accepts: asyncResponse(100, true)},
            {price: 1, accepts: asyncResponse(300, true)},
        ];
        return bestBuyer(buyers);
    });

    // Тест 3: Покупатели предлагают цены 1, 2
    // Все покупатели отказались (никого не выбираем)
    await testcase('1 2 // No one accepts', -1, 100, async () => {
        const buyers = [
            {price: 1, accepts: asyncResponse(0, false)},
            {price: 2, accepts: asyncResponse(50, false)},
        ];
        return bestBuyer(buyers);
    });

    // Тест 4: Только один покупатель
    // Покупатель с предложением 10 согласен
    await testcase('10 // Single buyer accepts', 0, 50, async () => {
        const buyers = [
            {price: 10, accepts: asyncResponse(0, true)},
        ];
        return bestBuyer(buyers);
    });

    // Тест 5: Все покупатели отказываются
    await testcase('1 2 3 // All reject', -1, 300, async () => {
        const buyers = [
            {price: 1, accepts: asyncResponse(50, false)},
            {price: 2, accepts: asyncResponse(150, false)},
            {price: 3, accepts: asyncResponse(250, false)},
        ];
        return bestBuyer(buyers);
    });
})();

