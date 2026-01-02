import {add, subtract, multiply, checkValue, splitIntoWords, mapArrToString} from './01.Operator'

let firstValue: number;
let secondValue: number;
let thirdValue: number;

beforeEach(() => {
    firstValue = 1;
    secondValue = 3;
    thirdValue = 5;
})

// Арифмитические операции
test ("Sum should be correct", () => {
    const firstResult = add (firstValue, secondValue);
    expect(firstResult).toBe(4)

    // Попытка внутри теста присвоить другое значение
    firstValue = 100;
    const secondResult = add (firstValue, secondValue)
    expect(secondResult).toBe(103)
})

test ("Subtracting should be correct", () => {
    const firstResult = subtract (firstValue, secondValue);

    firstValue = 103;
    const secondResult = subtract (firstValue, secondValue)

    expect(firstResult).toBe(-2)
    expect(secondResult).toBe(100)
})

test ('Multiply should be correct', () => {
    const firstResult = multiply(firstValue, secondValue);
    const secondResult = multiply(secondValue, thirdValue);

    expect(firstResult).toBe(3)
    expect(secondResult).toBe(15)
})


// Строковые операции
test("Splitting into words should be correct", () => {
    const sent1 = "Hello my friend!"
    const sent2 = "JS - the best programming language."

    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend')

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('the')
    expect(result2[2]).toBe('best')
    expect(result2[3]).toBe('programming')
    expect(result2[4]).toBe('language')
})

describe('mapArrToStrings', () => {
    test('From number to string', () => {
        expect(mapArrToString([1, 2 ,3])).toEqual(['1', '2', '3']);
    })
    test('From primitive to string', () => {
        expect(mapArrToString([1, 2 ,3, null, undefined, 'asfasf'])).toEqual(['1', '2', '3']);
    })
    test('Empty array', () => {
        expect(mapArrToString([])).toEqual([]);
    })
    test('Incorrect array', () => {
        expect(mapArrToString([1,2,3])).not.toEqual([1,2,3,4]);
    })
})

// Логические и сравнения операции
describe('CheckValue should be correct', () => {
    test('Correct value', () => {
        expect(checkValue(60)).toBe(true);
    })
    test('Less then correct value', () => {
        expect(checkValue(-1)).toBe(false);
    })
    test('More then correct value', () => {
        expect(checkValue(101)).toBe(false);
    })
    test('Begginer', () => {
        expect(checkValue(0)).toBe(true);
    })
    test('Ending', () => {
        expect(checkValue(100)).toBe(true);
    })
})


