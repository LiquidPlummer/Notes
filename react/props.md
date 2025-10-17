# React Props

## What Are Props?

Props (short for "properties") are how you pass data from parent components to child components in React. They make components reusable by allowing them to display different data. Think of props like function arguments - you pass them into a component to customize its behavior and appearance.

Props are **immutable** (read-only) and flow in **one direction**: from parent to child. A child component receives props but cannot modify them - only the parent that passed them can change them.

## Basic Props

**Passing props:**
```jsx
function App() {
  return <Greeting name="Alice" />;
}
```

**Receiving props:**
```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

The parent component (`App`) passes a `name` prop to the child component (`Greeting`).

## Props with Destructuring

Instead of accessing `props.name`, you can destructure props directly in the function parameter:

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

This is cleaner and more common in modern React code.

## Multiple Props

You can pass as many props as needed:

```jsx
function UserCard({ name, age, email, isActive }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
}

// Usage
function App() {
  return (
    <UserCard 
      name="Alice" 
      age={25} 
      email="alice@example.com" 
      isActive={true} 
    />
  );
}
```

## Prop Data Types

**Strings:** Use quotes
```jsx
<Greeting name="Alice" />
```

**Numbers, Booleans, Objects, Arrays:** Use curly braces
```jsx
<UserCard 
  age={25} 
  isActive={true}
  hobbies={['reading', 'coding']}
  address={{ city: 'NYC', zip: 10001 }}
/>
```

**Variables and Expressions:** Use curly braces
```jsx
function App() {
  const userName = "Alice";
  const currentYear = 2025;
  
  return <Greeting name={userName} year={currentYear} />;
}
```

## Props Are Read-Only

Components must never modify their own props. Props are immutable and flow in one direction: from parent to child.

```jsx
function Greeting({ name }) {
  // Wrong - cannot modify props
  name = "Someone else";
  
  // Correct - use props as they are
  return <h1>Hello, {name}!</h1>;
}
```

This is called "one-way data flow" or "unidirectional data flow." If you need to modify a value, use state instead.

## Default Props

You can provide default values for props using default parameters:

```jsx
function Greeting({ name = "Guest" }) {
  return <h1>Hello, {name}!</h1>;
}

// If no name prop provided, shows "Hello, Guest!"
<Greeting />

// With name prop, shows "Hello, Alice!"
<Greeting name="Alice" />
```

## The Children Prop

The special `children` prop contains any content placed between component opening and closing tags:

```jsx
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

// Usage
function App() {
  return (
    <Card>
      <h2>Card Title</h2>
      <p>This is the card content</p>
    </Card>
  );
}
```

Everything between `<Card>` and `</Card>` becomes the `children` prop. This is useful for wrapper components.

## Passing Functions as Props

You can pass functions as props to enable child-to-parent communication:

```jsx
function ParentComponent() {
  const handleClick = (message) => {
    console.log(message);
  };

  return <ChildComponent onButtonClick={handleClick} />;
}

function ChildComponent({ onButtonClick }) {
  return (
    <button onClick={() => onButtonClick('Hello from child!')}>
      Click me
    </button>
  );
}
```

This pattern allows children to "talk back" to their parents by calling functions passed down as props.

## Common Naming Conventions

**Event handler props:** Start with `on`
```jsx
<Button onClick={handleClick} />
<Form onSubmit={handleSubmit} />
<Input onChange={handleChange} />
```

**Boolean props:** Start with `is`, `has`, or `should`
```jsx
<Button isDisabled={true} />
<User hasAvatar={false} />
<Modal shouldShow={true} />
```

**Data props:** Use descriptive nouns
```jsx
<UserProfile user={userData} />
<ProductList products={items} />
```

## Spreading Props

You can spread an object's properties as props:

```jsx
function App() {
  const userInfo = {
    name: "Alice",
    age: 25,
    email: "alice@example.com"
  };

  // Instead of passing each prop individually
  return <UserCard name={userInfo.name} age={userInfo.age} email={userInfo.email} />;
  
  // You can spread the object
  return <UserCard {...userInfo} />;
}
```

This is useful when passing many props, but use it carefully as it can make code less explicit.

## Props vs State

**Props:**
- Passed from parent to child
- Read-only (immutable)
- Used to configure components
- Cannot be changed by the component receiving them

**State:**
- Managed within a component
- Can be changed (mutable)
- Used for data that changes over time
- Triggers re-renders when updated

Use props to pass data down. Use state for data that changes within a component.

## Prop Drilling

Prop drilling is when you pass props through multiple levels of components to reach a deeply nested component:

```jsx
function App() {
  const user = { name: "Alice" };
  return <PageLayout user={user} />;
}

function PageLayout({ user }) {
  return <Sidebar user={user} />;
}

function Sidebar({ user }) {
  return <UserProfile user={user} />;
}

function UserProfile({ user }) {
  return <p>{user.name}</p>;
}
```

This can become tedious. Solutions include:
- Component composition (restructuring your components)
- Context API (for global data)
- State management libraries (for complex apps)

## Best Practices

**1. Keep prop names clear and descriptive**
```jsx
// Good
<Button label="Submit" isDisabled={false} />

// Bad
<Button text="Submit" dis={false} />
```

**2. Destructure props for cleaner code**
```jsx
// Good
function User({ name, age }) {
  return <p>{name} is {age} years old</p>;
}

// Less clear
function User(props) {
  return <p>{props.name} is {props.age} years old</p>;
}
```

**3. Use default values for optional props**
```jsx
function Button({ label = "Click me", size = "medium" }) {
  return <button className={size}>{label}</button>;
}
```

**4. Keep props simple**
Don't pass complex objects or deeply nested data unless necessary. Simpler props make components easier to use and test.
