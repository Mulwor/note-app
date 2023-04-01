// Типизация массивов
let ages: Array <number> = [18, 12, 19, 22, 45]
let numbers: number[] = [18, 12, 19, 22, 45]

let ages2: Array <number | string | boolean> = [18, '12', 19, 22, true]
let ages3: (number | string | boolean)[] = [18, '12', 19, 22, true]