# Event Handling in React

## Basic Event Handling

React handles events similarly to vanilla JavaScript, but with some important differences.

**React:**
```jsx
function Button() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

**Vanilla JavaScript:**
```html
<button onclick="handleClick()">Click me</button>
```
```javascript
document.querySelector('button').addEventListener('click', handleClick);
```

## Key Differences from Vanilla JavaScript

### 1. Event Names Are camelCase

**React:** `onClick`, `onChange`, `onSubmit`, `onMouseEnter`
**JavaScript:** `onclick`, `onchange`, `onsubmit`, `onmouseenter`

```jsx
// React
<button onClick={handleClick}>Click</button>
<input onChange={handleChange} />

// Vanilla JS
<button onclick="handleClick()">Click</button>
```

### 2. Pass Functions, Not Strings

**React:** Pass a function reference
```jsx
<button onClick={handleClick}>Click</button>
```

**JavaScript HTML:** Pass a string (inline)
```html
<button onclick="handleClick()">Click</button>
```

### 3. Cannot Return false to Prevent Default

**React:** Must call `preventDefault()` explicitly

The `preventDefault()` method stops the browser's default behavior for an event. For example, forms normally reload the page on submit, and links normally navigate to a new URL. Calling `preventDefault()` stops these default actions so you can handle them yourself.

```jsx
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Stops page reload
    console.log('Form submitted');
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

**JavaScript:** Can return false to prevent default

In vanilla JavaScript, returning `false` from an inline event handler prevents the default action. This doesn't work in React - you must use `preventDefault()` explicitly.

```javascript
element.onclick = function() {
  return false; // Prevents default in vanilla JS
};
```

### 4. Synthetic Events

React wraps native browser events in a `SyntheticEvent` object. This provides cross-browser compatibility and consistent behavior.

```jsx
function Input() {
  const handleChange = (event) => {
    console.log(event.target.value); // SyntheticEvent
    console.log(event.nativeEvent);  // Access native event if needed
  };

  return <input onChange={handleChange} />;
}
```

You use SyntheticEvents the same way as native events - they have the same properties and methods.

## Common Events

### Mouse Events
```jsx
<button onClick={handleClick}>Click</button>
<div onDoubleClick={handleDoubleClick}>Double Click</div>
<div onMouseEnter={handleMouseEnter}>Hover</div>
<div onMouseLeave={handleMouseLeave}>Leave</div>
```

### Form Events
```jsx
<input onChange={handleChange} />
<form onSubmit={handleSubmit} />
<input onFocus={handleFocus} />
<input onBlur={handleBlur} />
```

### Keyboard Events
```jsx
<input onKeyDown={handleKeyDown} />
<input onKeyUp={handleKeyUp} />
<input onKeyPress={handleKeyPress} />
```

## Event Handler Patterns

### Inline Arrow Functions

Useful for passing arguments:
```jsx
function TodoList({ todos }) {
  const handleDelete = (id) => {
    console.log(`Deleting todo ${id}`);
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
```

**Note:** Creates a new function on each render. Usually fine, but can impact performance in large lists.

### Pre-Bound Functions

Define the handler separately:
```jsx
function Button() {
  const handleClick = () => {
    console.log('Clicked');
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

### Passing Arguments Without Inline Functions

Use data attributes or currying:
```jsx
function TodoList({ todos }) {
  const handleDelete = (e) => {
    const id = e.currentTarget.dataset.id;
    console.log(`Deleting todo ${id}`);
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button data-id={todo.id} onClick={handleDelete}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
```

## Event Object Properties

The event object provides useful information:

```jsx
function Input() {
  const handleEvent = (e) => {
    console.log(e.target);        // Element that triggered event
    console.log(e.currentTarget); // Element handler is attached to
    console.log(e.type);          // Event type (click, change, etc.)
    console.log(e.target.value);  // For inputs
    console.log(e.key);           // For keyboard events
  };

  return <input onChange={handleEvent} />;
}
```

## Preventing Default Behavior

Use `preventDefault()` to stop default actions:

```jsx
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log('Form submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Stopping Event Propagation

Use `stopPropagation()` to prevent bubbling:

```jsx
function NestedButtons() {
  const handleParentClick = () => {
    console.log('Parent clicked');
  };

  const handleChildClick = (e) => {
    e.stopPropagation(); // Prevents parent handler from firing
    console.log('Child clicked');
  };

  return (
    <div onClick={handleParentClick}>
      <button onClick={handleChildClick}>Child Button</button>
    </div>
  );
}
```

## Form Input Handling

### Text Inputs

```jsx
function TextInput() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return <input value={text} onChange={handleChange} />;
}
```

### Checkboxes

```jsx
function Checkbox() {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked); // Note: checked, not value
  };

  return <input type="checkbox" checked={checked} onChange={handleChange} />;
}
```

### Select Dropdowns

```jsx
function Select() {
  const [selected, setSelected] = useState('');

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <select value={selected} onChange={handleChange}>
      <option value="">Choose...</option>
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
    </select>
  );
}
```

## Multiple Inputs in One Handler

Handle multiple form inputs with one function:

```jsx
function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
      <input name="age" value={formData.age} onChange={handleChange} />
    </form>
  );
}
```

The `name` attribute on each input determines which property to update.

## Event Handling Best Practices

**1. Use descriptive handler names**
```jsx
// Good
const handleSubmit = () => { };
const handleUserLogin = () => { };

// Less clear
const handle1 = () => { };
const doThing = () => { };
```

**2. Keep handlers simple**
Extract complex logic into separate functions.

**3. Prevent default when needed**
Always call `e.preventDefault()` for form submissions and link clicks you want to handle yourself.

**4. Use the event object**
Don't rely on closures when the event object provides what you need.
