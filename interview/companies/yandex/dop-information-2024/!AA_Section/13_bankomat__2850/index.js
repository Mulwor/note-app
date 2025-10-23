// Требуется реализовать функцию работы банкомата, которая выдаёт запрошенную сумму в рублях купюрами, начиная от более крупных к более мелким.
// Купюры существуют номиналами: 50, 100, 500, 1000, 5000 рублей. При этом:
//     1.	У каждого номинала ограниченное количество купюр, информация об этом передаётся в объекте limits.
// 2.	Необходимо уменьшать количество доступных купюр после каждой успешной операции.
// 3.	Если невозможно выдать запрошенную сумму (например, превышен лимит, сумма не кратна минимальному номиналу),
// функция должна возвращать сообщение об ошибке.
//
//     Решение не должно использовать полный перебор комбинаций (например, если сумма миллион, а банкомат содержит только купюры 50 рублей).


function test() {
    // Пример: в банкомате 9200 с такими номиналами:
    const limits = {5000: 0, 1000: 6, 500: 5, 100: 5, 50: 4};
    const nominals = [5000, 1000, 500, 100, 50];
    console.log(limits, '<-limits');
    console.log(atm(1250, limits, nominals)); // { 1000: 1, 100: 2, 50: 1 }
    console.log(limits, '<-limits');
    console.log(atm(1000000, limits, nominals)); // 'Not enough money'
    console.log(limits, '<-limits');
    console.log(atm(2400, limits, nominals)); // { 1000: 2, 100: 3, 50: 2 }
    console.log(limits, '<-limits');
    console.log(atm(6512, limits, nominals)); // 'Incorrect value'
    console.log(limits, '<-limits');
    console.log(atm(50, limits, nominals)); // { 50: 1 }
    console.log(limits, '<-limits');
    console.log(atm(50, limits, nominals)); // 'Not enough money'
    console.log(limits, '<-limits');
    console.log(atm(5500, limits, nominals)); // { 1000: 3, 500: 5 }
    console.log(limits, '<-limits');
}

test();


// ===================================================================


function atm(sum, limits, noms) {
    const banknotes = {}; // Объект для хранения выданных купюр
    // Проверка: если сумма не кратна минимальному номиналу, возвращаем ошибку
    if (sum % noms[noms.length - 1]) {
        return 'Incorrect value';
    }
    // Итерируемся по номиналам (от большего к меньшему)
    noms.forEach((nom) => {
        let neededGive = Math.floor(sum / nom); // Сколько купюр нужного номинала нужно для покрытия оставшейся суммы
        // Если для данного номинала не нужно купюр или нет их в банкомате, переходим к следующему
        if (neededGive === 0 || limits[nom] === 0) {
            return;
        }
        // *Если в банкомате меньше купюр этого номинала, чем нужно, берём столько, сколько есть
        if (limits[nom] < neededGive) {
            neededGive = limits[nom];
        }
        banknotes[nom] = neededGive; // Добавляем купюры как ключ и их количество как значение
        sum -= neededGive * nom; // Уменьшаем оставшуюся сумму
    });
    // *Если сумма осталась, значит выдать её невозможно
    if (sum > 0) {
        return 'Not enough money';
    }
    // Уменьшаем количество купюр в limits
    noms.forEach((nom) => {
        if (!banknotes[nom]) return; // Если текущий номинал не использован, пропускаем
        limits[nom] -= banknotes[nom]; // Уменьшаем количество доступных купюр
    });

    return banknotes; // Возвращаем объект с выданными купюрами
}


