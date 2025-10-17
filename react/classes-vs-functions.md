# Functional vs Class Components

## The Modern Way: Functional Components

**Functional components** are the current standard for writing React components. They've been recommended since React 16.8 (2019) when Hooks were introduced.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## The Old Way: Class Components

**Class components** were the original way to write React components with state and lifecycle methods. They still work but are considered legacy.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## Why Functional Components Won

- Simpler syntax, less boilerplate
- Hooks provide all the power of classes with cleaner code
- Easier to test and reason about
- Better performance optimizations
- All new React features target functional components
- The React team recommends them

**You should write all new components as functional components.**

## Why Learn About Class Components?

You'll encounter class components when:
- Reading older tutorials or Stack Overflow answers
- Working with legacy codebases
- Using older third-party libraries

Being able to translate class examples to functional components is an essential skill.

## Translation Guide

### Basic Component

**Class:**
```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

**Functional:**
```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Or with destructuring
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

**Key differences:**
- No `class` keyword or `extends React.Component`
- No `render()` method - the function body is the render
- Props are a function parameter, not `this.props`

### Component with State

**Class:**
```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

**Functional:**
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

**Key differences:**
- No constructor or `this.state` - use `useState` Hook
- No `this.setState()` - use the setter function from `useState`
- State variables are accessed directly, not through `this.state`

### Multiple State Variables

**Class:**
```jsx
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      age: 0
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.email}</p>
        <p>{this.state.age}</p>
      </div>
    );
  }
}
```

**Functional:**
```jsx
import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{age}</p>
    </div>
  );
}
```

**Key difference:**
- In classes, all state is one object
- In functional components, you can split state into multiple variables

### Lifecycle Methods → useEffect

**Class:**
```jsx
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  componentDidMount() {
    // Runs after first render
    fetch(`/api/users/${this.props.userId}`)
      .then(res => res.json())
      .then(user => this.setState({ user }));
  }

  componentDidUpdate(prevProps) {
    // Runs after updates
    if (prevProps.userId !== this.props.userId) {
      fetch(`/api/users/${this.props.userId}`)
        .then(res => res.json())
        .then(user => this.setState({ user }));
    }
  }

  componentWillUnmount() {
    // Cleanup before component is removed
    console.log('Cleaning up');
  }

  render() {
    return <div>{this.state.user?.name}</div>;
  }
}
```

**Functional:**
```jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Runs after render (like componentDidMount and componentDidUpdate)
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(user => setUser(user));

    // Cleanup function (like componentWillUnmount)
    return () => {
      console.log('Cleaning up');
    };
  }, [userId]); // Re-run when userId changes

  return <div>{user?.name}</div>;
}
```

**Key differences:**
- `useEffect` combines `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`
- Dependencies array `[userId]` controls when the effect re-runs
- Return a cleanup function instead of using `componentWillUnmount`

## Common Patterns

### Event Handlers

**Class:**
```jsx
class Button extends React.Component {
  handleClick = () => {
    console.log('Clicked');
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
```

**Functional:**
```jsx
function Button() {
  const handleClick = () => {
    console.log('Clicked');
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

### Accessing Props

**Class:**
- Use `this.props.propertyName`
- Props available everywhere in the class via `this.props`

**Functional:**
- Props are a function parameter
- Use destructuring for cleaner code: `function MyComponent({ name, age })`

## Quick Reference

| Class Component | Functional Component |
|----------------|---------------------|
| `this.props.x` | `props.x` or destructure `{x}` |
| `this.state.x` | `const [x, setX] = useState()` |
| `this.setState()` | `setX()` setter function |
| `componentDidMount()` | `useEffect(() => {}, [])` |
| `componentDidUpdate()` | `useEffect(() => {})` |
| `componentWillUnmount()` | `useEffect(() => { return () => {} })` |

## Translation Tips

When converting class components you find online:

1. Remove the class wrapper, make it a function
2. Remove the `render()` method, return JSX directly
3. Replace `this.state` with `useState` Hooks
4. Replace lifecycle methods with `useEffect`
5. Remove all `this.` references
6. Change `this.props` to function parameters

With practice, you'll be able to translate class examples to functional components quickly.
