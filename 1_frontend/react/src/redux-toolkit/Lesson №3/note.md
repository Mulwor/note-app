Когда мы устанавливаем react-redux - нам необходимо main.tsx обернуть в Provider. 

Для того, чтобы получить данные селектора используется хук useSelector(). Внутри он использует
ту же логику, которая находится в Lesson 2. Другими словами useSelector() перерисовывает наш 
компонент только, если значение селектора, который мы туда передали меняется при изменении
в нашем store. 

Есть два способа объявление useSelector

1. `const counterState = useAppSelector((state) => state.counters[counterId])`

2. `const counterState = useAppSelector((state) => (
    selectCounter(state, counterId)
  ))`

В случае если мы используем второй вариант, то в store пишется специальная константа
export const selectCounter = (state: AppState, counterId: CounterId) => state.counters[counterId]
