Правила использование useSelector

1. Необходимо выбирать как можно меньше данных, чтобы наш компонент меньше перерисовывался
2. Необходимо уменьшить сложность алгоритма O(1)
3. Нет нужды создавать новые ссылки внутри селекторов если конечно они не мемоизированны


## Таблица

| Правила  | Плохой код | Хороший код |
| -------- | -------- | ------- |
| 1. Например у нас c бека приходят данные и нам необходимо отрисовать определенные. | const user = useAppSelector(state => state.users.find(user => user.id === userId)), здесь уровень сложности O(n) | type UsersState = { entities: Record<UserId, User () undefined>; ids: UserId[]; } const counter = useAppSelector( state => state.users.entities[userId]; )|
| 2. Не создавать ссылки внутри селекторов | const sortedUsers = useAppSelector(state => state.users.toSorted(sortFn)) | 1. const users = useAppSelector(state => state.users) const sortedUsers = useMemo(() => users.toSorted(sortFn), [users]) 2. const selectUserById = createAppSelector(state => state.users,(_, userId: UserId) => userId,(users, userId) => users.find(user => user.ud === userId)) const user = useAppSelector(state => selectUserById(state ,userId)) |
|

## Простыми словами 

- Когда мы используем селектор, то необходимо иметь сложность О(1)

Например у нас c бека приходят данные и нам необходимо отрисовать
определенные данные. Если мы решим использовать это:
`const user = useAppSelector(state => state.users.find(user => user.id === userId))`
то уровень сложности будет O(n)

Лучше избегать данного метода и использовать следующею конструкцию, что приведет к уровню сложности О(1)

```
type UsersState = {
  entities: Record<UserId, User | undefined>;
  ids: UserId[];
}

const counter = useAppSelector(
  state => state.users.entities[userId];
)
```

- Не создавать ссылки внутри селекторов

```
const sortedUsers = useAppSelector(
  state => state.users.toSorted(sortFn)
)
```

Вместо этого можно использовать

```
const users = useAppSelector(
  state => state.users
)

const sortedUsers = useMemo(
  () => users.toSorted(sortFn),
  [users]
)
```

```
const selectUserById = createAppSelector(
  state => state.users,
  (_, userId: UserId) => userId,
  (users, userId) => users.find(user => user.ud === userId)
)

const user = useAppSelector(state => selectUserById(state ,userId))
```