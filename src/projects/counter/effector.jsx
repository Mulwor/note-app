import {createEvent, createStore, combine} from 'effector'


export const plus = createEvent()
export const minus = createEvent()

// ! createStore(1) => 1 - это начальное (дефолтное) значение 
export const $counter = createStore(1).on(plus, n => n + 1)

export const $counterText = $counter.map(n => `current value = ${n}`)

export const $counterCombined = combine({
    counter: $counter, 
    text: $counterText
})



// ! Попытка объединить все в один без использования комбайна
export const $subtraction = createStore(10).on(minus, index => index - 1)
                                           .map(element => `настоящее значение = ${element}`)
