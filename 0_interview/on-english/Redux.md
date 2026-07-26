<details>
<summary> Why doesn't setState update the data instantly (asynchrony)?</summary>

setState is asynchronous because React batches multiple state updates together and applies them in a single re-render for better performance. This also ensures consistency — all components see the same state within one render cycle.

</details>

### Redux (toolkit)

1. How does redux toolkit works under the hooks in general? / How redux works or what are action, store, reducers?
2. What's middlewares?

---

<details>
<summary>What's different between redux and context api? / Discuss the state management library you've used (Redux, Context API, etc.) and your reasons for choosing it.</summary>

1. Redux is a library, while Context API is built into React.
2. Context API is used for small/medium apps, while Redux is used for big projects.
3. With Redux, we have Redux DevTools that help with debugging.
4. Redux has a single store, while we can create multiple contexts.
5. Redux optimizes re-renders better than Context.

</details>

<details>
<summary>How would you manage global state across multiple components without Redux?</summary>

I will be createContext() and use asynchro hook useState (theme, auth) or useReducer or we can use another state manager - zustand, mobx, effector

</details>

<details>
<summary>What is redux and why dy we need redux?</summary>

Redux is a state manager that helps to manage the global state. We need to use it when we have a big project and it's already difficult to maintain with useContext(). It solves the problem of prop drilling and great debugging tools like Redux DevTools.

</details>

<details>
<summary>Tell me about principles of redux?</summary>

Redux has three main principles: a single store, read-only state (we can change only using dispatching), and pure function - reducer takes the previous state and an action, and returns the next state immutably.

</details>

<details>
<summary>Can we have multiple reducer and stores?</summary>

If speak about multiple reducer - we can use combineReducers, that take reducers and collect in on place. If speak about multiple store - no we can't because then we break one of principle redux is a single store

</details>

<details>
<summary>Can we mutate state in reducers?</summary>

No, we can't. We need to return new state using spread operator or we need to use Object.assign()

</details>

<details>
<summary>What's slice?</summary>

It's a special Redux feature that helps to combine reducers, actions, and selectors in one place. It has a name, initialState, and reducers. We can write different actions in different places, or use slices.

</details>

<details>
<summary>How do you access and update redux state inside React-component?</summary>

If we need to update we need to use useDispatch, it returns the dispatch function, which we call with an action; If we need to access state then we need to use useSelector.

</details>

<details>
<summary>What's middlewares?</summary>
</details>
