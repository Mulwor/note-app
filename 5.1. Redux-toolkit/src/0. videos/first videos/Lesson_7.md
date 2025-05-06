В counters используем createReducer, в user-slice создали createSlice

Что используем в данном уроке:

`createSlice` - функция, которая принимает имя slice, его начальное состояние, reducers, 
автоматически генерирующие action-creator, и тип action (action.type), который соответствует 
состоянию.

`createReducer` - по сути выполняет ту же функцию, что и createSlice за исключением того, что
тот создает редьюсер. У него под также под капотом есть immer.

`createAction` - вспомогательная функция для определения action type и creator
`bindActionCreators` - 

`Immer` - чтобы не писать много спред операторов, то у createSlice и у createReducer под капотом используется иммер, который выполняет глубокое копирование