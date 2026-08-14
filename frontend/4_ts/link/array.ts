let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];

let ages2: Array <number | string | boolean> = [18, '12', 19, 22, true]
let ages3: (number | string | boolean)[] = [18, '12', 19, 22, true]

let stringArr = ['one', 'hey', 'Dave']
let guitars = ['Strat', 'Les Paul', 5150]
let mixedData = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')

let test = []
let bands: string[] = []

bands.push('Van Halen')