## React

<h3 align="center">Basic</h3>

<details>
<summary>What's react? Tell me about advantages/disadvantages</summary>

It is an open-source JavaScript library developed by Facebook, for building user interfaces especially for single-page applications

Its features include:

- Components (we can write once and use anywhere);
- JSX;
- Hooks;
- Use virtual DOM instead of the real one (only rerender what changed);
- Not bad ecosystem - we have a lot of libraries that work with React"

</details>

<details>
<summary>Styling Techniques in React</summary>

We can use style inside jsx, pure css, css modules, SASS/SCSS, CSS-in-JS, tailwind or MUI, and design and another libraries

</details>

<details>
<summary>What's JSX? Explain how does browser understands JSX/JS</summary>

JSX is a syntax extension for JavaScript that looks like HTML. Browsers don't understand it directly we must transpiled by Babel. I would also add that under the hood, JSX uses `createElement`, which is what actually transpiles into JS.

</details>

<details>
<summary>* What's component?</summary>

We can write once, and use everywhere. Easy to update and debugging.

</details>

<details>
<summary>What's life cycle components? Что такое жизненный цикл компонента?</summary>

We have 3 phases: mounting (when the component appears in the DOM), updating (when we update props or state), and unmounting (when the component is removed from the DOM).

for example

```ts
useEffect(() => {}, []) → mounting
useEffect(() => {}, [deps]) → updating (when deps change)
useEffect(() => { return () => {} }, []) → unmounting (cleanup)
```

</details>

<details>
<summary>What is difference between controlled and uncontrolled component?</summary>

For example, we have an input field — we can choose to control it or not. If we want to control our state, we can use the useState hook and write an onChange function. But when we don't want to control it, then the DOM manages it itself and has its own value.

If we control component we can get value using state.value but if don't we need to create ref and call ref.current.value

</details>

<details>
<summary>What are React keys and why are they important? It's good use Id or not, and if we don't have id, how our program start work</summary>

Keys are a special attribute that help identify which items in a list have changed, been added, or removed. We need to use a unique key from the data. If we try to use index, we can get reordering problems.

</details>

<details>
<summary>What's difference between state/props?</summary>

Props are data passed from a parent component to a child, while state lives inside a component — we can change it using setState

</details>

<details>
<summary>What happens if you change props directly (Что произойдет, если изменить props напрямую?)? or Is it possible to change props inside a component? (Можно ли изменять props внутри компонента)?</summary>

It will ignore it, and can show a warning or throw an error. If we want to change the value, we need to use a callback and pass the new value to the parent.

</details>

<details>
<summary>What is prop drilling and how to avoid it?</summary>

Prop drilling is when we pass props from a parent component down through several child components — even if some of them don't use that prop.

To avoid it:

- Use Context API (built-in React)
- Use state managers like Redux, MobX, Zustand, or Effector

</details>

<details>
<summary>* What are children props?</summary>

Children is a special prop that lets you pass content between the opening and closing t2ags of a component.

</details>

<details>
<summary> How do you increase performance in React?</summary>

We can use hooks like `useCallback` and `useMemo`, we can use virtualization for long lists, we can remove unused libraries or replace them with lighter alternatives. We can also configure Webpack to split code into chunks and serve static assets (like images) from a CDN.

</details>

<details>
<summary>What is difference between functional and class component?</summary>

1. Different syntax.
2. In class components, lifecycle methods are componentDidMount, componentDidUpdate, componentWillUnmount. In functional components, we use useEffect.
3. Functional components support hooks and we can also create custom hooks.
4. Functional components are smaller and shorter.
5. In functional components, there's no this, so it's easier to use. In class components, we need to bind methods.

</details>

<details>
<summary>* What's different Client Side Rendering vs. Server Side Rendering</summary>

...

</details>

<details>
<summary> What's error boundary?</summary>

It catches error in components and show some page instead of crashing into the whole page.

</details>

<h3 align="center">Hooks</h3>

<details>
<summary>What are hooks for? Which hooks do you know?</summary>

...

</details>

<details>
<summary>Is it possible to call a hook inside a condition or loop?</summary>

...

</details>

<details>
<summary>Why doesn't setState update the data instantly (asynchrony)?</summary>

Почему setState не обновляет данные мгновенно (асинхронность)?

</details>

<details>
<summary>Where is the component's state stored? - Где хранится состояние компонента?</summary>

...

</details>

<details>
<summary>How `useEffect` hook works?</summary>

...

</details>

<details>
<summary>What are the three ways to use useEffect?</summary>

No dependency array: runs after every render • Empty array []: runs once on mount, cleanup on unmount • With dependencies [count]: runs when dependencies change • Always include cleanup function for subscriptions/listeners • Runs AFTER render (asynchronous), not during

</details>

<details>
<summary>How we handle with life cycle methods in functional components?</summary>

- How we handle with life cycle methods in functional components? => componentDidMount
- If you have some props in dependency how we will work in this case? => componentDidUpdate

</details>

<details>
<summary>If you have some props in dependency how we will work in this case?</summary>

...

</details>

<details>
<summary>How we can handle componentWillUnmount?</summary>

We can write a return callback inside useEffect to cancel requests, remove event listeners, or clear timers

</details>

<details>
<summary>How can I cancel the request when unmounting a component? - Как отменить запрос при размонтировании компонента?</summary>

We can use AbortController to cancel the request itself, or we can use a flag like isMounted with true value and change it to false in the cleanup function.

</details>

<details>
<summary>When is cleanup performed in useEffect? - Когда выполняется очистка (cleanup) в useEffect?</summary>

Cleanup runs before unmount component. For example - when we change our page; clean up timers; cancel requests.

</details>

<details>
<summary>What happens when mounting, updating, and unmounting?</summary>

We have 3 phases: mounting (when the component appears in the DOM), updating (when we update props or state), and unmounting (when the component is removed from the DOM).

for example

```ts
useEffect(() => {}, []) → mounting
useEffect(() => {}, [deps]) → updating (when deps change)
useEffect(() => { return () => {} }, []) → unmounting (cleanup)
```

</details>

<details>
<summary> What's different between useEffect vs useLayoutEffect?</summary>
 
1. useEffect works asynchronously, while useLayoutEffect works synchronously.
2. useEffect does not block our website, while useLayoutEffect does block it.
3. useEffect works after our website is loaded, but useLayoutEffect works before it is loaded.

I use useLayoutEffect when I want to work with animations that solve the problem of flickering.

</details>

<details>
<summary>What is the difference between useMemo and useCallback?</summary>

useMemo returns memoized `value`, useCallback returns memoized `function`

</details>

<details>
<summary>What is high order component (HOC) and how do they differ from hooks?</summary>

...

</details>

<details>
<summary>Explain the concept of Higher-Order Components (HOCs) in React and their purpose.</summary>

...

</details>

<details>
<summary>Can you provide some building high order component?</summary>
</details>

<details>
<summary>When can memoization (memo, useMemo) be harmful?</summary>

</details>

1. How do you create a custom hook?
2. What is useReducer?
3. What are Refs in React? And what is useRef for (Для чего нужен useRef?)?

=> Explain the concept of refs in React and how they are used to directly access DOM elements.

4. Explain the concept of forward refs (forwardRef) in React and their use cases.

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
