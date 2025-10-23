/*
У нас есть набор билетов вида:

[
{from: 'London', to: 'Moscow'},
{from: 'NY', to: 'London'},
{from: 'Moscow', to: 'SPb'},
...
]

На этих билетах мы хотим построить маршрут.
Петель и повторов в маршруте нет.

Напишите программу которая возвращает маршрут в порядке следования билетов.
 */

// ===================================================================


function getRoute(tickets = [], start) {
    // Инициализируем массив для хранения итогового маршрута.
    const ResultRoute = [];
    // Создаем Map, где ключ — это город отправления, а значение — объект билета.
    const map = new Map();
    // Проходим по массиву билетов и заполняем Map.
    for (let i = 0; i < tickets.length; i++) {
        // Для каждого билета устанавливаем город отправления как ключ и сам билет как значение.
        map.set(tickets[i].from, tickets[i]);
    }
    // Начинаем построение маршрута с указанного начального города.
    let current = map.get(start);
    // Пока есть текущий билет (город отправления имеет соответствующий билет).
    while (current) {
        // Добавляем текущий билет в итоговый маршрут.
        ResultRoute.push(current);
        // Переходим к следующему билету, используя город назначения текущего билета.
        current = map.get(current.to);
    }
    // Возвращаем итоговый маршрут.
    return ResultRoute;
}


// function getRoute(tickets = [], start) {
//     const route = [];
//     const result = new Map();
//
//     for (const ticket of tickets) {
//         result.set(ticket.from, ticket);
//     }
//
//     let current = result.get(start);
//     while (current) {
//         route.push(current);
//         current = result.get(current.to);
//     }
//
//     return route;
// }

console.log(
    getRoute(
        [
            {from: 'London', to: 'Moscow'},
            {from: 'NY', to: 'London'},
            {from: 'Moscow', to: 'SPb'},
        ],
        'NY'
    )
);
