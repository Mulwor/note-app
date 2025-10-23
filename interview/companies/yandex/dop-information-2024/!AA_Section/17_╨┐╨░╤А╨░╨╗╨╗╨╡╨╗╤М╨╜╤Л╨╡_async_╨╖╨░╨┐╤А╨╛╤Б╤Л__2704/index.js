// Описание задачи:
//     •	Дан список ссылок.
// 	•	Необходимо написать функцию, которая опросит их все в порядке, в котором они перечислены.
// 	•	Одновременно можно выполнять не более limit запросов.
// 	•	После получения всех ответов необходимо вызвать обработчик callback и передать в него список ответов в том же порядке, что и список ссылок.
// 	•	Если в списке есть одинаковые элементы, то повторного запроса быть не должно (мемоизация).
//
//     Подсказка: limit — это количество одновременно выполняющихся запросов.


// TEST

const db = {
    link1: '1',
    link2: '2',
    link3: '3',
    link7: '7'
};
const links = ['link1', 'link2', 'link1', 'link3', 'link1', 'link2', 'link7'];
const expected = [1, 2, 1, 3, 1, 2, 7];

function fetch(url) {
    console.log(`fetching: ${url}`);
    const response = db[url];

    if (response === undefined) {
        throw new Error('No such url');
    }

    return new Promise(resolve => {
        const timeout = Math.random() * 100 + 20;
        setTimeout(() => resolve(response), timeout);
    });
}

function callOnce(fn) {
    this.called = false;

    return (...args) => {
        if (this.called) {
            throw new Error('Callback called second time');
        }
        this.called = true;

        return fn(...args);
    };
}

function test(results) {
    if (!Array.isArray(results) || results.toString() !== expected.toString()) {
        console.error(`Expected: ${expected.toString()}`);
        console.error(`Received: ${results.toString()}`);
        return;
    }
    console.log('Test passed');
}


console.clear();
parallelLimit(links, 3, callOnce(test));



// ===================================================================

//GPT
// function parallelLimit(urls, limit, callback) {
//     // СНАЧАЛ ПИШЕМ БЕЗ МЕМОИЗАЦИИ
//     const results = [] // Храним результаты запросов в порядке исходного массива
//     const memoized = new Map(); // Для кеширования запросов
//     let inProgress = 0; // Сколько запросов сейчас выполняется
//     let currentIndex = 0; // Указатель на текущий индекс
//     let completed = 0; // Счетчик завершенных запросов
//
//     // Функция для обработки следующего запроса ВЫХОД
//     function processNext() {
//         // Если все запросы завершены, вызываем callback
//         if (completed === urls.length) {
//             callback(results);
//             return;
//         }
//
//         // Если запросы еще есть и мы не достигли лимита
//         while (inProgress < limit && currentIndex < urls.length) {
//             const url = urls[currentIndex];
//             const index = currentIndex;
//
//             // Проверяем кеш, если запрос уже был выполнен, используем его результат
//             if (memoized.has(url)) {
//                 results[index] = memoized.get(url);
//                 completed++;
//                 currentIndex++;
//                 continue; // Берем следующий запрос
//             }
//
//             inProgress++; // Увеличиваем количество выполняющихся запросов
//             currentIndex++; // Сдвигаем указатель на следующий запрос
//
//             // Выполняем запрос
//             fetch(url)
//                 .then(response => {
//                     results[index] = response; // Сохраняем результат
//                     memoized.set(url, response); // Кешируем результат
//                 })
//                 .catch(() => {
//                     results[index] = null; // Если ошибка, сохраняем null
//                 })
//                 .finally(() => {
//                     inProgress--; // Уменьшаем количество выполняющихся запросов
//                     completed++; // Увеличиваем количество завершенных запросов
//                     processNext(); // Запускаем следующий запрос
//                 });
//         }
//     }
//
//     processNext(); // Старт обработки
// }

// IDEAL

function parallelLimit(urls, limit, callback) {
    const result = [];
    // if (urls.length===0) {
    //     return callback(result);
    // }
    // ПОТОМ ПИШЕМ С МЕМОИЗАЦИЕИ
    const cache = new Map();
    let counterResult = 0; // Счётчик завершённых запросов
    let counterInitiate = 0; // Счётчик запущенных запросов
    // ПОТОМ ПИШЕМ С ЛИМИТОМ
    // limit = Math.min(limit, urls.length);
    function step() {
        const index = counterInitiate // Текущий индекс обрабатываемого URL
        if (index >= urls.length) {
            return // Если все ссылки инициированы, выходим
        }
        counterInitiate++; // Увеличиваем счётчик запущенных запросов
        const url = urls[index]; // Берём текущий URL
        // БЕЗ МЕМОИЗАЦИИ ===========================
        // fetch(url)
        //     .then((data)=>{
        //         result[index] = data; // Сохраняем результат
        //         counterResult++; // Увеличиваем счётчик завершённых запросов
        //         if (counterResult === urls.length) {
        //             return callback(result);
        //         }
        //         step();
        //     })
        // ===========================
        // ПОТОМ ПИШЕМ С МЕМОИЗАЦИЕИ
        if (!cache[url]) { // Проверяем, был ли запрос к данному URL уже выполнен
            cache[url] = fetch(url); // Запускаем запрос и сохраняем Promise в cache
            cache[url].then(() => {
                step() // После завершения текущего запроса запускаем следующий
            })
        }
        else {
            step()} // Если URL уже обработан, пропускаем выполнение fetch

        cache[url].then(data=> { // Когда результат доступен (из запроса или кеша), сохраняем его
            result[index] = data; // Сохраняем результат в массив на нужную позицию
            counterResult++; // Увеличиваем счётчик завершённых запросов
            if (counterResult === urls.length) {
                return callback(result); // Если все запросы завершены, вызываем callback
            }
        })
        // ===========================
    }
    // Инициализируем первые limit запросов
    for (let i = 0; i < limit ; i++) {
        step();
    }

}
