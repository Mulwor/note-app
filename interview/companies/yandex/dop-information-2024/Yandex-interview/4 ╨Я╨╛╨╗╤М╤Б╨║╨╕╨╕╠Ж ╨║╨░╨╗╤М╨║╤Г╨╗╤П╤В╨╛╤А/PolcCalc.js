function calculateRPN(expression) {
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };
  // Разбиваем строку на массив
  const tokens = expression.split(" ");
  // Создаем стек
  const stack = [];
  // Перебираем массив
  for (let token of tokens) {
    // Если токен в операторах
    if (token in operations) {
      // Писать после ! Если в стеке меньше двух значений
      if (stack.length < 2) {
        return "Ошибка: недостаточно чисел для выполнения операции.";
      }
      // Достаем из стека два последних значения
      const b = stack.pop();
      const a = stack.pop();
      // Выполняем операцию и добавляем в стек
      stack.push(operations[token](a, b));
      // Если токен число (преобразуем в число с помощью унарного +)
    } else if (!isNaN(token)) {
      stack.push(+token);
    }
    // Писать после !  обработка ошибок (неизвестный оператор или символ)
    else {
      return `Ошибка: неизвестный оператор или символ`;
    }
  }
  // Возвращаем первое значение стека
  return stack[0];
}
