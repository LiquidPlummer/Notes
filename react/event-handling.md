# Event Handling in React

## What Are Events?

Events are actions or occurrences that happen in the browser - things like clicks, key presses, mouse movements, form submissions, and more. Events allow your application to respond to user interactions.

**Event listeners** are functions that "listen" for specific events to occur on elements and execute code when those events happen. For example, a click event listener waits for a user to click a button, then runs your code.

In React, you attach event listeners directly to JSX elements using event handler props like `onClick`, `onChange`, and `onSubmit`.

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

### 3. Synthetic Events

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

# Passing Data to Event Handlers

## Overview

Event handlers often need access to specific data about the element that triggered them. For example, when a button is clicked, you might need to know which item ID it represents, or what action to perform.

There are multiple ways to pass data to event handlers in React. Each approach has different trade-offs in terms of readability and performance.

## Approach 1: Inline Arrow Functions

The most common approach - create a new function that passes the data:

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

**How it works:**
- The arrow function `() => handleDelete(todo.id)` creates a closure
- The closure "remembers" the specific `todo.id` value
- When clicked, it calls `handleDelete` with that ID

**Pros:**
- Simple and clear
- Easy to read and understand
- Works for any data type

**Cons:**
- Creates a new function on every render
- Can cause performance issues with very large lists (hundreds of items)

## Approach 2: Data Attributes

Store the data in the HTML element itself using data attributes:

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

**How it works:**
- The `data-id` attribute stores the ID on the button element
- The same `handleDelete` function is used for all buttons
- The handler reads the ID from `e.currentTarget.dataset.id`

**Pros:**
- Only one function reference, not recreated each render
- Better performance for large lists
- Uses standard HTML feature

**Cons:**
- Less intuitive than inline functions
- Only works with string data (numbers/objects need conversion)
- Requires reading from the event object

## What Are Data Attributes?

Data attributes are custom attributes you can add to HTML elements. They always start with `data-` followed by your custom name.

**HTML:**
```html
<button data-id="123" data-color="blue" data-user-name="Alice">Click</button>
```

**Accessing in JavaScript:**
```javascript
const button = document.querySelector('button');
console.log(button.dataset.id);        // "123"
console.log(button.dataset.color);     // "blue"
console.log(button.dataset.userName);  // "Alice"
```

**Key points:**
- Any attribute starting with `data-` is a data attribute
- Browsers ignore them (don't affect rendering)
- Access them via the `.dataset` property
- Hyphens in HTML become camelCase in JavaScript: `data-user-name` → `dataset.userName`
- Values are always strings

## Using Data Attributes in React

```jsx
function ProductList({ products }) {
  const handleAddToCart = (e) => {
    const productId = e.currentTarget.dataset.productId;
    const price = e.currentTarget.dataset.price;
    console.log(`Adding product ${productId} at $${price}`);
  };

  return (
    <div>
      {products.map(product => (
        <button
          key={product.id}
          data-product-id={product.id}
          data-price={product.price}
          onClick={handleAddToCart}
        >
          Add {product.name}
        </button>
      ))}
    </div>
  );
}
```

## Multiple Data Attributes

You can store multiple pieces of data:

```jsx
<button
  data-id={user.id}
  data-name={user.name}
  data-role={user.role}
  onClick={handleClick}
>
  Select User
</button>

function handleClick(e) {
  const { id, name, role } = e.currentTarget.dataset;
  console.log(id, name, role);
}
```

## How Event Handlers Receive the Event Object

When you attach an event handler like `onClick={handleDelete}`, you might notice the handler function receives an event parameter `(e)` even though you didn't explicitly pass it:

```jsx
const handleDelete = (e) => {  // Where does 'e' come from?
  console.log(e.target);
};

<button onClick={handleDelete}>Delete</button>
```

This is standard JavaScript behavior. When an event occurs, the browser automatically passes the event object as the first argument to your handler function.

**With inline arrow functions:**
When you use an inline arrow function, you're calling your function yourself, so you control what gets passed:

```jsx
// You're calling handleDelete, so you pass what you want
<button onClick={() => handleDelete(todo.id)}>

// If you need both the ID and event:
<button onClick={(e) => handleDelete(todo.id, e)}>
```


## e.target vs e.currentTarget

When using data attributes, use `e.currentTarget`, not `e.target`:

**e.target:** The element that triggered the event (could be a child)
**e.currentTarget:** The element the handler is attached to (your button)

```jsx
<button data-id="123" onClick={handleClick}>
  <span>Delete</span> {/* If you click the span, it's e.target */}
</button>

function handleClick(e) {
  console.log(e.target.dataset.id);        // undefined (span has no data-id)
  console.log(e.currentTarget.dataset.id); // "123" (button has data-id)
}
```

Always use `e.currentTarget.dataset` to reliably access your data attributes.

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

## Preventing Default Behavior

Browsers have built-in default behaviors for certain elements and events. These are actions the browser automatically performs when specific events occur:

- **Forms:** When submitted, the browser reloads the page and sends data to the server
- **Links (`<a>` tags):** When clicked, the browser navigates to the URL in the `href` attribute
- **Right-click:** Opens the browser's context menu
- **Text selection:** Clicking and dragging selects text
- **Checkboxes:** Clicking toggles the checked state

Sometimes you want to override these default behaviors to implement custom functionality, like handling form submissions with JavaScript instead of a page reload, or creating custom navigation logic.

## Vanilla JavaScript Approach

In vanilla JavaScript, you can prevent default browser behavior by returning `false` from an event handler:

```javascript
element.onclick = function() {
  // Do something
  return false; // Prevents default action
};
```

This works for inline event handlers and stops default behaviors like form submissions, link navigation, and other browser actions.

## React Approach

**Returning `false` doesn't work in React.** You must explicitly call `preventDefault()` on the event object.

The `preventDefault()` method stops the browser's default behavior for an event. For example, forms normally reload the page on submit, and links normally navigate to a new URL. Calling `preventDefault()` stops these default actions so you can handle them yourself.

```jsx
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Must call this explicitly
    console.log('Form submitted');
    // Handle form data here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
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
