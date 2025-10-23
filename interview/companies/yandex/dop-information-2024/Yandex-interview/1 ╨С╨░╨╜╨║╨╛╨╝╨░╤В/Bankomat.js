const nominals = [5000, 1000, 500, 100, 50];

function atm(sum, bankLimits, nominals) {
  // Результат будет храниться здесь
  let result = {};

  // Проходим по каждому номиналу купюр
  for (let i = 0; i < nominals.length; i++) {
    // Считаем сколько нужно купюр определенного номинала для выдачи суммы (с учетом ограничений в банке)
    let needNominal = Math.floor(sum / nominals[i]);

    // Сравниваем с ограничениями в банке по каждому номиналу
    if (bankLimits[nominals[i]] < needNominal) {
      // Если запрошенная сумма больше, чем есть в банке, то обнуляем текущую купюру
      needNominal = bankLimits[nominals[i]];
    }

    // Если можем выдать хотя бы одну купюру, записываем это в результат купюрами этого номинала
    if (needNominal > 0) {
      result[nominals[i]] = needNominal;

      // Обновляем запрошенную сумму и банковский лимит
      sum -= needNominal * nominals[i];
      bankLimits[nominals[i]] -= needNominal;
    }
  }

  // Если не удалось выдать всю запрошенную сумму
  if (sum % 50 !== 0) {
    return "сумма должна быть кратна 50";
  }
  if (sum > 0) {
    return "Невозможно выдать указанную сумму";
  }

  return result;
}

// Пример использования

atm(5150, { 5000: 0, 1000: 0, 500: 30, 100: 20, 50: 10 }, nominals); //?
