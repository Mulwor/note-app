// Есть функция batchFetch для запроса данных из бекенда по id, работа :
// batchFetch([1,2]) -> Promise {1:{id:1,title:'one'},2:{id:2,title:'two'}}
// для уменьшения количества запросов к бекенду нужно написать обёртку, создающую функцию 'smartFetch(id)',
//     которая склеивает вызовы в один (с окном timeout мс)
// Важно отметить, это не debounce, а сулеивание запросов к бэкенду
// считаем, что:
// - окно ожидания вызовов начинается заново сразу после начала запроса
// в пределах таймаута все id уникальные
// batchFetch всегда успешен

function createSmartFetch(timeout) {
    let pull = null; // Переменная для хранения текущего набора ID и резолверов
    let timer = null; // Таймер для вызова batchFetch

    return function smartFetch(id) {
        // Если текущий pull существует, добавляем ID в него
        if (!pull) {
            pull = { ids: [], resolvers: new Map() };
        }

        // Если ID уже запрашивается, возвращаем связанный промис
        if (pull.resolvers.has(id)) {
            return pull.resolvers.get(id);
        }

        // Создаем промис для данного ID
        const resultPromise = new Promise((resolve) => {
            pull.resolvers.set(id, resolve);
        });

        pull.ids.push(id); // Добавляем ID в массив текущего батча

        // Если таймер еще не запущен, запускаем его
        if (!timer) {
            timer = setTimeout(() => {
                // Делаем запрос с текущим набором ID
                const currentBatch = pull;
                pull = null; // Сбрасываем текущий pull
                timer = null; // Сбрасываем таймер

                // Вызываем batchFetch для уникальных ID
                batchFetch(currentBatch.ids).then((response) => {
                    // Резолвим промисы для каждого ID
                    currentBatch.ids.forEach((id) => {
                        if (currentBatch.resolvers.has(id)) {
                            currentBatch.resolvers.get(id)(response[id]);
                        }
                    });
                });
            }, timeout);
        }

        return resultPromise;
    };
}



(async function () {
    console.clear()
    const smartFetch = createSmartFetch(100)
    const a = smartFetch(10)
    const b = smartFetch(20)

    console.log('ждем 100 мс, накапливаем запросы');
    await new Promise(resolve => setTimeout(resolve, 100));

    console.log('a', await a)
    console.log('b', await b)
})();

function batchFetch(ids) {
    return new Promise(resolve => {
        console.log('запрос к бэкенду', ids);
        setTimeout(() => {
            const res = {};
            ids.forEach(id => {
                res[id] = {id, title: `${id}`}
            });
            resolve(res)
        }, Math.random() * 1000
        )
    })
}



