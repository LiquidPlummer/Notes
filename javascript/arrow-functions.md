# JavaScript Arrow Functions - Quick Reference

## What Are Arrow Functions?

Arrow functions are a concise syntax for writing function expressions, introduced in ES6 (2015). They use the `=>` syntax (which looks like an arrow) instead of the `function` keyword. Arrow functions are particularly useful for short, inline functions and are commonly used in modern JavaScript for callbacks, array methods, and functional programming patterns.

## Basic Syntax

```javascript
// Regular function
const add = function(a, b) {
  return a + b;
};

// Arrow function
const add = (a, b) => {
  return a + b;
};
```

## Shortcut Syntax

### Implicit Return (single expression)
```javascript
const add = (a, b) => a + b;  // No braces, no return keyword needed
```

### Single Parameter (no parentheses needed)
```javascript
const square = x => x * x;
```

### No Parameters (parentheses required)
```javascript
const greet = () => 'Hello!';
```

### Returning Objects (wrap in parentheses)
```javascript
const makeUser = (name, age) => ({ name, age });
```

## Key Differences from Regular Functions

### No `this` Binding
Arrow functions don't have their own `this` - they inherit it from the surrounding scope (lexical `this`).

```javascript
// Regular function - 'this' changes
button.addEventListener('click', function() {
  console.log(this);  // 'this' is the button
});

// Arrow function - 'this' is inherited
button.addEventListener('click', () => {
  console.log(this);  // 'this' is from outer scope
});
```

### Cannot Be Used As Constructors
```javascript
const Person = (name) => { this.name = name; };
new Person('John');  // Error: Person is not a constructor
```

### No `arguments` Object
```javascript
const regular = function() { console.log(arguments); };  // Works
const arrow = () => { console.log(arguments); };  // Error
```

## Use Cases

**Good for:**
- Callbacks and array methods: `arr.map(x => x * 2)`
- Short, simple functions
- When you want to preserve outer `this` context
- Functional programming patterns

**Avoid for:**
- Object methods (when you need `this` to refer to the object)
- Event handlers (when you need `this` to refer to the element)
- Functions that need `arguments` object
- Constructor functions

## Examples

```javascript
// Array methods
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);

// setTimeout/setInterval
setTimeout(() => console.log('Done!'), 1000);

// Promise chains
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
```
