Несколько правил

1. Нужно выбирать как можно меньше данные, чтобы наш компонент
перерисовался как можно меньше.

2. Нужно чтобы сложность алгоритмов внутри была маленькая

3. Не нужно создавать новые ссылки внутри селекторов если конечно они не мемозированны

--- 

- Когда мы используем селектор, то необходимо иметь сложность О(1)

Например у нас c бека приходят данные и нам необходимо отрисовать
определенные данные. Если мы решим использовать это:
```
const user = useAppSelector(state => state.users.find(user => user.id === userId))
```
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