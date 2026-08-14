// Арифмитические операции
export const add = (a: number, b: number) => a + b
export const subtract = (a: number, b: number) => a - b
export const multiply = (a: number, b: number) => a * b

// Строковые операции
export const splitIntoWords = (sentence: string) => {
    const words = sentence.toLowerCase().split(" ");
    return words.filter((word) => word !== "" && word !== "-")
                .map((word) => word.replace("!", "")
                                   .replace(".","")
                                   .replace(",",""))
}

export const mapArrToString = (sentence: Array <number | string | null | undefined>) => {
    // Number.isInteger() - переданное число - целое ли.
    return sentence.filter((item) => Number.isInteger(item))
                   .map(String)
}


// Комбинация лог.оператор и операторов сравнения
export const checkValue = (value: number) => {
    if(value < 0 || value > 100) {
        return false;
    }
    return true;
}
