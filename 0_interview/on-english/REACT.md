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
<summary>What's component?</summary>

A component is a function or class that returns JSX. We can use it anywhere in our project. A component combines JavaScript and HTML. It takes props as input and can have its own state

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

For example, we have an input field, and we can choose whether to make it controlled or uncontrolled.

If we want to control the state, we use the useState hook and write onChange function to update it. Event target value

If we don't want to control it, the DOM manages the value itself (DOM сам управляет значение)

To get the value from a controlled component, we just write => event.target.value. For an uncontrolled one, we need to create a ref and access ref.current.value

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

previous value

</details>

<details>
<summary>What is prop drilling and how to avoid it?</summary>

Prop drilling is when we pass props from a parent component down through several child components — even if some of them don't use that prop.

To avoid it:

- Use Context API (built-in React)
- Use state managers like Redux, MobX, Zustand, or Effector

</details>

<details>
<summary>What are children props?</summary>

Children is a special prop that lets you pass content between the opening and closing tags of a component.

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
<summary> What's error boundary?</summary>

It's it the only class component that use in our project and catches error in components and show some page instead of crashing into the whole page.

</details>

<h3 align="center">Hooks</h3>

<details>
<summary>What are hooks for? Which hooks do you know?</summary>

Hooks appeared in React 16.8 as an alternative to manage state and lifecycle methods in functional components.

1. useState to manage state
2. useEffect for side effects(fetch request, timers, manipulation with dom)
3. useMemo memoized value
4. useCallback memoized functions
5. useContext to solve the problem of props drilling
6. useRef - reference Dom elements.
7. useLayoutEffect - it is analog of useEffect but it synchrony hook and work before paint our components

</details>

<details>
<summary>Is it possible to call a hook inside a condition or loop?</summary>

We can only use hooks at the top level of the component, not inside loops, conditions, or nested functions. If we use hooks inside a loop, our component can work incorrectly — for example, two useState calls could conflict and cause bugs on the page.

</details>

<details>
<summary>** Why doesn't setState update the data instantly (asynchrony)?</summary>

setState is asynchronous because React batches multiple state updates together and applies them in a single re-render for better performance. This also ensures consistency — all components see the same state within one render cycle.

</details>

<details>
<summary>How `useEffect` hook works? / What are the three ways to use useEffect?</summary>

useEffect runs after the page is painted. There are 3 cases:

- No dependency array — runs on every render.
- Empty array [] — runs only once after mount.
- With dependencies — runs on mount and when dependencies change.

We can also return a cleanup function to clear timers, cancel requests, or remove event listeners

</details>

<details>
<summary>How we handle with life cycle methods in functional components?</summary>

We can use the useEffect hook to imitate lifecycle methods. For example:

- If we need `componentDidMount`, we write useEffect with an `empty dependency array`.
- If we need `componentDidUpdate`, we write useEffect with `props/state` in the dependency array.
- If we need `componentWillUnmount`, we write useEffect and inside it we return a cleanup function.

</details>

<details>
<summary>If you have some props in dependency how we will work in this case?</summary>

It works like componentDidUpdate - when props or state change, the effect runs.

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
<summary>Explain the concept of Higher-Order Components (HOCs) in React and their purpose.</summary>

A Higher-Order Component (HOC) is a pattern where a function takes a component and returns a new enhanced component. Its purpose is to reuse [riːˈjuːs] logic across multiple components — like authentication, logging, or data fetching.

Перевод

Its purpose is to reuse [riːˈjuːs] logic across multiple components - Его цель повторно исп логику в нескольких компонентах

</details>

<details>
<summary>What is high order component (HOC) and how do they differ from hooks?</summary>

A Higher-Order Component (HOC) is a pattern where a function takes an existing component and returns a new, enhanced [энхенсд] component. For example, memo prevents re-rendering if props haven't changed, or withAuth adds authentication logic.

HOCs wrap components, hooks inject logic inside them.

</details>

<details>
<summary>Can you provide some building high order component?</summary>

- withAuth for authentication,
- withPagination
- withMemoization
- withLogger for logging,
- withLoader for loading
- React.memo - prevents re-rendering if props haven't changed (shallow comparison).

</details>

<details>
<summary>When can memoization (memo, useMemo) be harmful?</summary>

For of all we need to wrap useMemo, memo, useCallback for cache heavy operation. If we wrap everything, it add memory and comprasion overhead, which can actually harm performance

</details>

---

<details>
<summary>What are Refs in React? And what is useRef for (Для чего нужен useRef?) / Explain the concept of refs in React and how they are used to directly access DOM elements? </summary>

Refs are a way to access DOM nodes (elements) - for example, when we want to focus on an input, or by clicking on an input date we can show a calendar. We can also store previous values and compare them later.

</details>

<details>
<summary>Explain the concept of forward refs (forwardRef) in React and their use cases</summary>

forwardRef is a utility that lets pass a ref from a parent component to a child component. It's used when we need to access a DOM element inside a child component - for example, to focus an input, measure a node, or trigger animations.

</details>

<details>
<summary>What is useTransitions?</summary>

`useTransition` is a hook that mark state updates as lower priority. This helps to create a more responsive UI - for example, when searching, the interface is not blocked, and using the isPending flag, we can show a loading indicator while the heavy update is in progress.

</details>

<details>
<summary>How to create context?</summary>

First of all, we need to create a context with `createContext()`. Then we need to go to the App component and wrap it with a Provider. If we want to access the value, we need to use useContext in the child component.

</details>

<details>
<summary>How can I avoid unnecessary re-renders when using Context?</summary>

1. We can split context into smaller contexts
2. We can use React.memo for child components
3. We can use useMemo to memoize the provider value and prevent unnecessary updates
4. We can use state management libraries like Zustand or Redux that optimize re-renders

</details>

<h3 align="center">Another</h3>

<details>
<summary>Tell me about virtual dom, reconciliation algorithm of virtual dom</summary>

Virtual DOM is a lightweight copy of the real DOM. When state changes, React updates the virtual DOM, compares it with the previous version, finds the differences, and applies only those changes to the real DOM. This process is called reconciliation.

</details>

<details>
<summary>What's pure function</summary>

Pure function is a function without side effects (manipulate with dom, request api, console.log, timers) and return same outputs every time when we called it

</details>

<details>
<summary>What is react Batching?</summary>

Batching collects multiple setState calls and triggers a single re-render instead of many. This improves performance and results in fewer DOM updates.

</details>

<details>
<summary>Why do the effects work twice in Dev mode?</summary>

Because Strict Mode is turned on. It helps catch side‑effect bugs and warns about legacy lifecycle methods like componentWillMount or componentWillReceiveProps.

</details>

<details>
<summary>What is portals?</summary>

Portals help render a component's content outside the normal DOM hierarchy. For example, when we need to create modals, dropdowns, popups, or tooltips, we can use portals. The main benefit is that we don't have to rely on CSS tricks — like z-index or overflow: hidden.

</details>

<details>
<summary>* What is react fiber and how does React Fiber enhance rendering performance?</summary>

...

</details>

<details>
<summary>* Where is the component's state stored? - Где хранится состояние компонента?</summary>

...

</details>

<details>
<summary>* What's different Client Side Rendering vs. Server Side Rendering</summary>

...

</details>

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
how to implement Debouncing in react?
