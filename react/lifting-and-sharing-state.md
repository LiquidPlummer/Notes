# Lifting and Sharing State

## The Problem: Sibling Components Can't Share State

In React, data flows in one direction: from parent to child through props. This creates a challenge when two sibling components need to share data.

```jsx
function App() {
  return (
    <>
      <ComponentA />
      <ComponentB />
    </>
  );
}
```

ComponentA and ComponentB are siblings. They can't pass props directly to each other. If ComponentA has state that ComponentB needs, we have a problem.

## The Solution: Lift State Up

**Lifting state** means moving state from a child component up to a parent component. The parent can then pass the state down to multiple children as props.

```jsx
function App() {
  const [sharedData, setSharedData] = useState('');
  
  return (
    <>
      <ComponentA data={sharedData} onUpdate={setSharedData} />
      <ComponentB data={sharedData} />
    </>
  );
}
```

Now both components can access the same data through their parent.

## How It Works: Two One-Way Flows

Even though we're "lifting state up," we're still respecting one-way data flow. Here's how:

**Flow 1 - Data Down:**
Parent passes current state value as a prop to children.

**Flow 2 - Communication Up:**
Parent passes a function as a prop. When the child calls this function, it requests the parent to update its state.

The child never directly modifies the parent's state - it only calls a function the parent provided.

## Basic Example

```jsx
import { useState } from 'react';

function ParentComponent() {
  const [temperature, setTemperature] = useState(0);
  
  return (
    <div>
      <TemperatureInput 
        value={temperature} 
        onChange={setTemperature} 
      />
      <TemperatureDisplay temp={temperature} />
    </div>
  );
}

function TemperatureInput({ value, onChange }) {
  return (
    <input 
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
}

function TemperatureDisplay({ temp }) {
  return <p>Temperature: {temp}°C</p>;
}
```

**What's happening:**
1. Parent holds the state (`temperature`)
2. Parent passes state to input as `value` prop
3. Parent passes setter function to input as `onChange` prop
4. When user types, input calls `onChange` with new value
5. Parent updates its state
6. Parent re-renders, passing new value to both children
7. Both children update with the new temperature

## When to Lift State

Lift state when:
- Multiple components need to display the same data
- Multiple components need to modify the same data
- One component's actions should affect another component
- Components need to stay synchronized

## Where to Lift State To

Lift state to the **lowest common ancestor** of all components that need it.

```jsx
// If only these two need the data
function Section() {
  const [data, setData] = useState('');
  return (
    <>
      <ComponentA data={data} />
      <ComponentB data={data} />
    </>
  );
}

// Don't lift it higher than necessary
function App() {
  // Don't put it here if only Section's children need it
  return <Section />;
}
```

Only lift state as high as needed. Over-lifting can cause unnecessary re-renders.

## Naming Conventions for Callback Props

When passing functions to update state, use clear naming:

**For simple updates:**
```jsx
<Input value={text} onChange={setText} />
```

**For specific actions:**
```jsx
<TodoItem todo={todo} onDelete={handleDelete} onToggle={handleToggle} />
```

**Common patterns:**
- `onChange` - general state updates
- `onSubmit` - form submissions
- `onClick` - click handlers
- `onAdd`, `onRemove`, `onUpdate` - specific CRUD operations

Start callback prop names with `on` to indicate they're event handlers.

## Best Practices

**1. Keep state as local as possible**
Don't lift state prematurely. Start with local state and lift only when needed.

**2. Name handler functions clearly**
```jsx
// Good
const handleAddItem = (item) => { ... };
const handleRemoveItem = (id) => { ... };

// Less clear
const handle1 = (item) => { ... };
const doThing = (id) => { ... };
```

**3. Pass only what's needed**
Don't pass entire state objects if children only need part of it:
```jsx
// Good
<UserName name={user.name} />

// Unnecessary
<UserName user={user} />
```

**4. Consider component composition**
Sometimes restructuring components eliminates the need to lift state.
