## React

<h3 align="center">Basic</h3>

<details>
<summary>What's react? Tell me about advantages/disadvantages</summary>
</details>

<details>
<summary>What's JSX? Explain how does browser understands JSX/JS</summary>
</details>

<details>
<summary>What's component?</summary>
</details>

<details>
<summary>What is difference between controlled and uncontrolled component?</summary>
</details>

<details>
<summary>What are React keys and why are they important? It's good use Id or not, and if we don't have id, how our program start work</summary>
</details>

<details>
<summary>What's difference between state/props?</summary>
</details>

<details>
<summary>What happens if you change props directly? -  Что произойдет, если изменить props напрямую?</summary>
</details>

<details>
<summary>Is it possible to change props inside a component? - Можно ли изменять props внутри компонента?</summary>
</details>

<details>
<summary>What is prop drilling and how to avoid it?</summary>
</details>

<details>
<summary>What are children props?</summary>
</details>

<details>
<summary>Styling Techniques in React</summary>
</details>

1. What is difference between functional and class component?
2. What's life cycle components? Что такое жизненный цикл компонента?
3. How do you increase performance in React?
4. What's different Client Side Rendering vs. Server Side Rendering
5. What's error boundary?

<h3 align="center">Hooks</h3>

1. What are hooks for? Which hooks do you know?
2. Is it possible to call a hook inside a condition or loop?
3. Why doesn't setState update the data instantly (asynchrony)? - Почему setState не обновляет данные мгновенно (асинхронность)?
4. Where is the component's state stored? - Где хранится состояние компонента?
5. How `useEffect` hook works?
6. What are the three ways to use useEffect?
   No dependency array: runs after every render • Empty array []: runs once on mount, cleanup on unmount • With dependencies [count]: runs when dependencies change • Always include cleanup function for subscriptions/listeners • Runs AFTER render (asynchronous), not during
7. How we handle with life cycle methods in functional components?
8. If you do not have any props in dependency how does we hook work? - componentDidMount
9. If you have some props in dependency how we will work in this case? - componentDidUpdate
10. How can handle componentWillUnmount?
11. How can I cancel the request when unmounting a component? - Как отменить запрос при размонтировании компонента?
12. When is cleanup performed in useEffect? - Когда выполняется очистка (cleanup) в useEffect?
13. What happens when mounting, updating, and unmounting? - Что происходит при монтировании, обновлении и размонтировании?
14. What is high order component (HOC)?
    What are Higher-Order Components (HOCs) and how do they differ from hooks?
    Explain the concept of Higher-Order Components (HOCs) in React and their purpose.
15. Can you provide some building high order component?
16. How do you create a custom hook?
17. What's different between useEffect vs useLayoutEffect?
18. What is the difference between useMemo and useCallback?
    • useMemo returns memoized VALUE, useCallback returns memoized FUNCTION
19. When can memoization (memo, useMemo) be harmful?
20. What is useReducer?
21. What are Refs in React? And what is useRef for (Для чего нужен useRef?)?

=> Explain the concept of refs in React and how they are used to directly access DOM elements.

22. Explain the concept of forward refs (forwardRef) in React and their use cases.

How would you manage global state across multiple components without Redux?

<h3 align="center">Another</h3>

1. Tell me about virtual dom, reconciliation algorithm of virtual dom

JS representation of real DOM \• React compares old and new virtual DOM, only updates changed nodes

Explain the concept of reconciliation in React and how it optimizes re-rendering.

2. What's pure function
3. Как создать Context?
4. Как избежать лишних ререндеров при использовании Context?
5. What is react Batching?
6. Что такое observable?
7. Почему в Dev-режиме эффекты срабатывают дважды
8. how to implement Debouncing in react?
9. what is portals?
10. what is react fiber?

How does React Fiber enhance rendering performance?

11. what is useTransitions?

---

<h3 align="center">Different scenarios</h3>

<details>
<summary>A React form is re-rendering on every keystroke — how do you optimize it?</summary>

We can use `React.Memo` for functional components or use `useCallback() / useMemo()` or split large components into smaller components, add debounce that delay state updates

</details>

<details>
<summary>How do you optimize React re-rendering — besides using React.memo()?</summary>

We can use `useCallback() / useMemo()`, we can use React.Fragment to exclude div into DOM notes, use unique key for lists, debounce or throttle, split large components into smaller, add React.lazy + Suspence

</details>

<details>
<summary>Your React app bundle has grown too large, causing slow load times. Describe how you’d analyze and reduce it.</summary>

I'd start by running Webpack Bundle Analyzer to identify large dependencies. Then I'd remove unused libraries, replace heavy libraries with lighter alternatives (e.g., day.js instead of moment.js)

I will be my configuration webpack divided on chunks, split large components into smaller, and move images to CDN

I'd also check network requests in DevTools and talk with backend-developers how we can optimize - cash or smth else

</details>

<details>
<summary>List and potentially elaborate on optimization techniques for web applications from a developer's perspective - Перечислите и, возможно, подробно опишите методы оптимизации веб-приложений с точки зрения разработчика</summary>

I'd start by running Webpack Bundle Analyzer to identify large dependencies. Then I'd remove unused libraries, replace heavy libraries with lighter alternatives (e.g., day.js instead of moment.js)

I will be my configuration webpack divided on chunks, split large components into smaller, and move images to CDN

I'd also check network requests in DevTools and talk with backend-developers how we can optimize - cash or smth else

</details>

<details>
<summary>Describe how you would handle unexpected JavaScript errors and display a user-friendly error message instead of the default browser error screen.</summary>

I use Error Boundaries to catch errors in React components, try/catch for async code, and react-toastify to show an error message to the user.

</details>

<details>
<summary>How would you handle rendering 10,000+ items in a table or list? </summary>

I'd add pagination. If we have an input, I'd add debounce to defer requests. I'd also install a library like react-virtualized to add new items in a table when we scroll down.

</details>

<details>
<summary>A request times out or fails. How would you handle it and what retry strategies exist? - Время выполнения запроса истекло или произошел сбой. Как бы вы справились с этим и какие существуют стратегии повторных попыток?</summary>

I'd use try/catch to understand the problem, or add AbortController with signal to cancel the request — for example, after 5 seconds.

I can also limit retries (e.g., 3 attempts) and show a user-friendly message with react-toastify, like "Please wait a couple of minutes".

</details>

---

Write a logic to count the max number of repeating characters in a string
Write a logic to move all 0's to the end in an array
