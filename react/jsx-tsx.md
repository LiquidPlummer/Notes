# JSX and TSX

## What is JSX?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that lets you write HTML-like code directly in your JavaScript files. It was created for React to make building UIs more intuitive and readable.

**Without JSX (pure JavaScript):**
```javascript
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);
```

**With JSX:**
```javascript
const element = <h1 className="greeting">Hello, world!</h1>;
```

JSX looks like HTML, but it's actually JavaScript. Your bundler (like Vite) transforms JSX into regular JavaScript that browsers can understand.

## Why Use JSX?

**1. More Readable**
JSX resembles the HTML output, making it easier to visualize your UI structure.

**2. JavaScript Integration**
Use JavaScript expressions inside JSX with curly braces:
```jsx
const name = "Alice";
const element = <h1>Hello, {name}!</h1>;
```

**3. Type Safety** (with TypeScript)
Get autocomplete and catch errors before runtime.

## What is TSX?

**TSX (TypeScript XML)** is JSX with TypeScript. It provides the same syntax but with type checking.

**Benefits of TSX:**
- **Type Safety**: Catch errors before running code
- **Autocomplete**: Better IDE support and suggestions
- **Documentation**: Types serve as inline documentation
- **Refactoring**: Safer code changes with confidence

**JSX Example:**
```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

**TSX Example:**
```tsx
interface GreetingProps {
  name: string;
}

function Greeting(props: GreetingProps) {
  return <h1>Hello, {props.name}!</h1>;
}
```

In TSX, you define the shape of your props, and TypeScript will warn you if you pass the wrong types or forget required props.

## JSX vs TSX: Which to Use?

**Use JSX when:**
- Learning React for the first time
- Building small projects or prototypes
- You want to move quickly without type setup

**Use TSX when:**
- Building larger applications
- Working in a team
- You want to catch errors early
- You value autocomplete and IDE support

**Our Recommendation:**
Start with JSX to learn React fundamentals. Once comfortable, switch to TSX for better tooling and fewer bugs.

## File Extensions

- `.jsx` - JavaScript files with JSX
- `.tsx` - TypeScript files with JSX
- `.js` - Can contain JSX, but `.jsx` is more explicit
- `.ts` - TypeScript without JSX

Vite automatically handles both `.jsx` and `.tsx` files.
