//
//
// Условие задачи:
//
//     У нас есть набор билетов следующего вида:
//
// [
//     { from: 'London', to: 'Moscow' },
//     { from: 'NY', to: 'London' },
//     { from: 'Moscow', to: 'SPb' },
//     ...
// ]
//
// Из этих билетов можно построить единственный, непрерывный маршрут. Петли и повторения в маршруте отсутствуют.
//
// Задача:
//
//     Написать программу, которая принимает массив таких объектов (билетов) и возвращает эти же объекты в порядке следования по маршруту.
//
// Пример:
//
//     Вход:
//
// [
//     { from: 'London', to: 'Moscow' },
//     { from: 'NY', to: 'London' },
//     { from: 'Moscow', to: 'SPb' }
// ]
//
// Выход:
// [
//     { from: 'NY', to: 'London' },
//     { from: 'London', to: 'Moscow' },
//     { from: 'Moscow', to: 'SPb' }
// ]
//
// Ограничения:
//     1.	Гарантируется, что из всех билетов можно составить единственный маршрут.
// 2.	Все билеты используются в маршруте один раз.
// 3.	Петли и повторения в маршруте отсутствуют.

// ===================================================================

function getRoute(tickets = []) {
    const result = []; // Массив для хранения упорядоченных билетов
    const ticketMap = new Map(); // Карта маршрутов: "откуда -> куда"
    const destinations = new Set(); // Набор всех городов назначения

    // Заполняем карту маршрутов и набор пунктов назначения
    for (const ticket of tickets) {
        ticketMap.set(ticket.from, ticket.to); // Устанавливаем соответствие "откуда -> куда"
        destinations.add(ticket.to); // Добавляем город назначения
    }

    // Найдём начальный город маршрута (город, который есть в 'from', но отсутствует в 'destinations')
    let startCity = null;
    for (const ticket of tickets) {
        if (!destinations.has(ticket.from)) {
            startCity = ticket.from;
            break; // Как только нашли начальный город, выходим из цикла
        }
    }

    // // Если начальный город не найден, возвращаем пустой результат
    // if (!startCity) return result;

    // Строим маршрут
    // let currentCity = startCity;
    while (startCity) {
        const nextCity = ticketMap.get(startCity); // Следующий город
        if (!nextCity) break; // Если следующего города нет, значит, достигнут конец маршрута

        result.push({ from: startCity, to: nextCity }); // Добавляем билет в результат
        startCity = nextCity; // Переходим к следующему городу
    }

    return result; // Возвращаем упорядоченные билеты
}

// Тестирование функции
const tickets = [
    { from: "London", to: "Moscow" },
    { from: "NY", to: "London" },
    { from: "Moscow", to: "SPb" },
];

console.log(getRoute(tickets));
// Результат: [{ from: "NY", to: "London" }, { from: "London", to: "Moscow" }, { from: "Moscow", to: "SPb" }]
