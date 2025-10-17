# React Hooks Overview

Hooks are functions that let you use React features in functional components. They all start with "use" and follow specific rules about where and how they can be called.

## Essential Hooks

These are the hooks you'll use in almost every React application. Master these first.

### useState

Adds state to your functional components. State is data that can change over time and triggers re-renders when updated.

Use it for: form inputs, toggles, counters, any data that changes in your component.

### useEffect

Performs side effects in your components. Side effects are operations that interact with the outside world or need to happen after rendering.

Use it for: fetching data from APIs, setting up subscriptions, manipulating the DOM directly, timers, event listeners.

## Very Common Hooks

Once you're comfortable with the essentials, these hooks become important for building real applications.

### useRef

Creates a mutable reference that persists across re-renders. Unlike state, updating a ref doesn't cause a re-render.

Use it for: accessing DOM elements directly, storing mutable values that don't need to trigger renders, keeping track of previous values.

### useContext

Accesses data from React Context without prop drilling. Context provides a way to share values throughout your component tree without passing props manually at every level.

Use it for: accessing global state like authentication status, theme preferences, language settings, or user data.

### useMemo

Memoizes (caches) the result of an expensive calculation so it only re-runs when dependencies change. This is a performance optimization.

Use it for: expensive computations, filtering or transforming large arrays, complex calculations that don't need to run on every render.

### useCallback

Memoizes (caches) a function so it maintains the same reference across re-renders unless dependencies change. This prevents unnecessary re-renders of child components.

Use it for: passing callback functions to optimized child components, functions used as dependencies in other hooks, event handlers passed to memoized components.

## Less Common But Important Hooks

These hooks solve specific problems. You won't need them in every project, but they're valuable when you do.

### useReducer

An alternative to useState for managing complex state logic. Similar to Redux reducers, it uses actions to describe state changes.

Use it for: complex state with multiple sub-values, state logic that involves multiple related values, when the next state depends on the previous state in complex ways, when you want more predictable state updates.

### useLayoutEffect

Similar to useEffect, but fires synchronously after all DOM mutations but before the browser paints. This means it runs before the user sees any visual updates.

Use it for: measuring DOM elements, synchronous DOM updates that need to happen before paint, preventing visual flicker, animations that need precise timing.

## Hook Rules

All hooks must follow these rules:

1. **Only call hooks at the top level** - Don't call hooks inside loops, conditions, or nested functions
2. **Only call hooks in React functions** - Call them in functional components or custom hooks, not regular JavaScript functions
3. **Hooks must be called in the same order every render** - This is why rule 1 exists

These rules ensure React can correctly preserve hook state between renders.

## Other Hooks

React provides additional specialized hooks like useTransition, useDeferredValue, useId, useImperativeHandle, and useDebugValue. These are for advanced use cases and you likely won't need them when starting out.

For complete documentation on all hooks, visit: https://react.dev/reference/react/hooks

## Custom Hooks

You can create your own custom hooks by combining built-in hooks. Custom hooks let you extract component logic into reusable functions.

Custom hooks must start with "use" and can call other hooks. They're useful for sharing stateful logic between components without changing component hierarchy.

When you find yourself repeating the same hook logic across multiple components, that's a good sign you should create a custom hook. See the React documentation for examples and best practices.
