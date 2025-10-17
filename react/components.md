# React Components

## What Are Components?

Components are the building blocks of React applications. A component is a JavaScript function that returns JSX (UI markup). Components let you split your UI into independent, reusable pieces.

Think of components like custom HTML elements that you create. Instead of just using `<div>`, `<button>`, and `<input>`, you can create `<Header>`, `<UserProfile>`, `<ProductCard>`, and use them throughout your app.

## Basic Component Structure

The simplest component is a function that returns JSX:

```jsx
function Welcome() {
  return <h1>Hello, World!</h1>;
}
```

Components must:
- Start with a capital letter (Welcome, not welcome)
- Return JSX
- Return a single top-level element (or use a Fragment)
- Be defined before they're used

## Using Components

Once you've defined a component, you can use it like an HTML tag:

```jsx
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
      <Welcome />
    </div>
  );
}
```

This renders three Welcome components. Each component is an independent instance.

## Composing Components

Components can use other components, creating a tree structure:

```jsx
function Header() {
  return <h1>My Website</h1>;
}

function Sidebar() {
  return <aside>Navigation here</aside>;
}

function MainContent() {
  return <main>Main content here</main>;
}

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <MainContent />
    </div>
  );
}
```

This composition pattern is fundamental to React. Complex UIs are built by composing simple components.

## Component Files

Components are typically stored in separate files for organization:

**Greeting.jsx:**
```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;
```

**App.jsx:**
```jsx
import Greeting from './Greeting';

function App() {
  return <Greeting name="Alice" />;
}

export default App;
```

Use `export default` for the main component in a file, and `import` to use it elsewhere.

## Component Best Practices
1. **Keep components small and focused**: Each component should do one thing well.
2. **Use descriptive names**: Component names should clearly describe what they render or do.
3. **Extract reusable logic**: If you use the same pattern multiple times, make it a component.
4. **Organize by feature or type**: Group related components together in folders.
5. **Start simple**: Don't over-engineer. Build what you need, refactor when needed.
