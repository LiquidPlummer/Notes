# React Change Detection and DOM Updates

## How React Detects Changes

React detects changes through **state and props updates**. Whenever you update state (using `setState` or a state setter function from `useState`) or when a component receives new props, React knows something changed and needs to re-render.

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);  // This triggers React to detect a change
  };

  return <button onClick={increment}>{count}</button>;
}
```

React doesn't automatically watch for changes to variables or object properties. Only state and prop changes trigger re-renders.

```jsx
// This won't cause a re-render
let count = 0;
count = count + 1;  // React doesn't know this changed

// This will cause a re-render
const [count, setCount] = useState(0);
setCount(count + 1);  // React detects this change
```

## The Virtual DOM

React uses a **Virtual DOM** - a lightweight JavaScript representation of the actual DOM. When state or props change, React:

1. **Re-renders the component** to create a new Virtual DOM tree
2. **Compares** the new Virtual DOM with the previous Virtual DOM (this is called "diffing")
3. **Calculates** the minimal set of changes needed
4. **Updates** only the changed parts in the real DOM

This process is called **reconciliation**.

## Why the Virtual DOM?

Directly manipulating the real DOM is slow because:
- DOM operations are expensive
- Updating the DOM causes the browser to recalculate layouts and repaint

React's Virtual DOM makes updates faster by:
- Batching multiple changes together
- Minimizing actual DOM manipulations
- Only updating what actually changed

## Example: How React Updates

```jsx
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy milk' },
    { id: 2, text: 'Walk dog' }
  ]);

  const addTodo = () => {
    setTodos([...todos, { id: 3, text: 'New todo' }]);
  };

  return (
    <ul>
      {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
    </ul>
  );
}
```

**What happens when `addTodo()` is called:**

1. State changes (new todo added)
2. React re-renders the component, creating a new Virtual DOM
3. React compares the new Virtual DOM with the old one
4. React sees two `<li>` elements stayed the same, one is new
5. React only adds the new `<li>` to the real DOM
6. The first two list items are not touched

This is why **keys are important** - they help React identify which items changed.

## Reconciliation Process

React's reconciliation algorithm follows these rules:

**1. Different element types cause full re-creation:**
```jsx
// Before: <div>Content</div>
// After:  <span>Content</span>
// React destroys the old div and creates a new span
```

**2. Same element type updates attributes:**
```jsx
// Before: <div className="old">Content</div>
// After:  <div className="new">Content</div>
// React only updates the className attribute
```

**3. Component instances are preserved:**
When a component re-renders but stays the same type in the same position, React keeps the component instance and just updates its props.

**4. Keys help identify list items:**
```jsx
// Without keys, React assumes items are in the same position
// With keys, React knows which specific items moved or changed
{todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
```

## When Does React Re-render?

A component re-renders when:

1. **Its state changes** (via setState or state setter)
2. **Its props change** (parent passed new props)
3. **Its parent re-renders** (by default, children re-render when parents do)
4. **Context it uses changes** (if using Context API)

```jsx
function Parent() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child count={count} />  {/* Re-renders when count changes */}
    </div>
  );
}
```

## React Doesn't Watch Variables

This is a common beginner mistake:

```jsx
function Counter() {
  let count = 0;  // Regular variable
  
  const increment = () => {
    count = count + 1;
    console.log(count);  // This logs the new value
    // But the UI won't update because React doesn't track regular variables
  };
  
  return <button onClick={increment}>{count}</button>;
}
```

Only state changes trigger re-renders. Use `useState` for values that should cause UI updates.

## Batching Updates

React automatically **batches multiple state updates** that happen in the same event handler:

```jsx
function handleClick() {
  setCount(count + 1);
  setName('Alice');
  setActive(true);
  // React batches these three updates into one re-render
}
```

This improves performance by preventing unnecessary re-renders.

## Key Takeaways

- React detects changes through state and props, not by watching variables
- The Virtual DOM is a JavaScript copy of the real DOM
- React compares Virtual DOM snapshots to find minimal changes
- Only changed parts of the real DOM are updated
- Keys help React identify which list items changed
- Components re-render when state, props, parent, or context changes
- React batches multiple state updates for better performance

## Component Lifecycle

React components go through a lifecycle with distinct phases. Understanding where change detection and rendering fit into this lifecycle is important.

### The Three Phases

1. **Mounting** - Component is created and inserted into the DOM
2. **Updating** - Component re-renders due to state or prop changes
3. **Unmounting** - Component is removed from the DOM

### Mounting Phase

When a component first loads:

```jsx
function UserProfile() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // Runs AFTER first render (after DOM is updated)
    fetchUser().then(data => setUser(data));
  }, []);
  
  // Render happens here - component returns JSX
  return <div>{user?.name}</div>;
}
```

**Order of events:**
1. Component function runs (render phase)
2. React updates Virtual DOM
3. React updates real DOM
4. `useEffect` runs (after DOM updates)

### Updating Phase (Change Detection and Re-rendering)

When state or props change, the component re-renders:

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);  // Triggers update phase
  };
  
  useEffect(() => {
    // Runs AFTER every re-render (if no dependency array)
    console.log('Component updated');
  });
  
  // Component re-renders - function runs again
  return <button onClick={increment}>{count}</button>;
}
```

**Order of events during update:**
1. State change detected (e.g., `setCount` called)
2. Component function runs again (re-render)
3. React creates new Virtual DOM
4. React compares new Virtual DOM with old (reconciliation)
5. React updates only changed parts of real DOM
6. `useEffect` runs (if dependencies changed)

**This is where change detection happens:** Between steps 3-5, React's reconciliation process detects what changed.

### Unmounting Phase

When a component is removed:

```jsx
function Timer() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Tick');
    }, 1000);
    
    // Cleanup function runs when component unmounts
    return () => {
      clearInterval(interval);
      console.log('Component unmounting');
    };
  }, []);
  
  return <div>Timer running</div>;
}
```

**Order of events:**
1. Component is being removed from UI
2. Cleanup function from `useEffect` runs
3. Component is removed from DOM

### Visualizing the Lifecycle with useEffect

```jsx
function LifecycleDemo({ userId }) {
  const [data, setData] = useState(null);
  
  // Runs ONCE on mount (empty dependency array)
  useEffect(() => {
    console.log('Component mounted');
    
    return () => {
      console.log('Component unmounting');
    };
  }, []);
  
  // Runs on mount AND whenever userId changes
  useEffect(() => {
    console.log('Fetching user:', userId);
    fetchUser(userId).then(setData);
  }, [userId]);
  
  // Runs after EVERY render (no dependency array)
  useEffect(() => {
    console.log('Component rendered');
  });
  
  // This runs during the render phase
  console.log('Rendering component');
  
  return <div>{data?.name}</div>;
}
```

### Where Change Detection Fits

**Change detection happens in the Update phase:**

1. Something triggers a change (state update, new props)
2. React schedules a re-render
3. Component function runs → new Virtual DOM created
4. **Reconciliation:** React compares old vs new Virtual DOM
5. React calculates minimal changes needed
6. React updates real DOM
7. Effects run

The **reconciliation step (step 4)** is where React detects what actually changed in the UI.

### Class Components vs Functional Components

In older class-based components, lifecycle was explicit:

- `componentDidMount()` - after first render
- `componentDidUpdate()` - after re-renders
- `componentWillUnmount()` - before removal

In modern functional components, `useEffect` handles all of these:

```jsx
useEffect(() => {
  // Mount/Update logic here
  
  return () => {
    // Unmount cleanup here
  };
}, [dependencies]);
```

The lifecycle concept is the same, but functional components express it differently.****
