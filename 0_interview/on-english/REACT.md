## React

<h3 align="center">Basic</h3>

1. What's react? Tell me about advantages/disadvantages
2. What's JSX?
3. What's component?
4. What is difference between functional and class component?
5. What is difference between controlled and uncontrolled component?
6. What are React keys and why are they important?
7. It's good use Id or not, and if we don't have id, how our program start work
8. What's difference between state/props?
9. What happens if you change props directly? - Что произойдет, если изменить props напрямую?
10. Is it possible to change props inside a component? - Можно ли изменять props внутри компонента?
11. What is prop drilling and how to avoid it?
12. What are children props?
13. What's life cycle components? Что такое жизненный цикл компонента?
14. How do you increase performance in React?
15. What's different Client Side Rendering vs. Server Side Rendering
16. What's error boundary?
17. Styling Techniques in React

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

How do you optimize React re-rendering — besides using React.memo()?

---

A React form is re-rendering on every keystroke — how do you optimize it?

Your React app bundle has grown too large, causing slow load times. Describe how you’d analyze and reduce it.

You need to integrate a third-party API with strict rate limits — how would you design your system?

How would you implement real-time notifications efficiently for thousands of connected clients?

// Discuss the state management library you've used
// (Redux, Context API, etc.) and your reasons for choosing it.

// Describe how you would handle unexpected JavaScript errors and display a user-friendly error message
// instead of the default browser error screen.

//List and potentially elaborate on optimization techniques for
// web applications from a developer's perspective

// What is SOLID principle

Mention popular design patterns that you're aware off

//Mention if you've used performance testing libraries like WebPageTest,
//Lighthouse, or similar tools.

// Discuss the concept of creating custom data types in TypeScript

Explain how does browser understands JSX/JS

Write a logic to count the max number of repeating characters in a string

Write a logic to move all 0's to the end in an array
