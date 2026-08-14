// Первый способ сузить тип - примитивов
function narrowing_01(arg: number | string | null) {
  if (typeof arg === 'number') {
    // (parameter) arg: number
    arg
    return;
  } else if (typeof arg === 'string') {
    // (parameter) arg: string
    arg
    return;
  }

  return arg
}

// ! ===================================================================

// Второй способ сузить тип - примитивов
function narrowing_02(arg: number | string | null, arg2: number) {
  // Если аргумент у нас null, то мы делаем проверку
  // когда у нас аргумент именно равен null
  if (arg === null) {
    arg
  }

  // Мы также можешь исключить проверку на null и undefined
  if (arg === 5) {
    // (parameter) arg: 5
    return arg
  }

  if (arg === arg2) {
    // (parameter) arg: number
    return arg
  }

  return arg
}