# Immediately Invoked Function Expression - IIFE

## What Are IIFEs?

IIFE stands for **Immediately Invoked Function Expression**. It's a function that runs as soon as it's defined. IIFEs are wrapped in parentheses and immediately called with `()`.

## Syntax

### Basic Pattern
```javascript
(function() {
  console.log('I run immediately!');
})();
```

### With Parameters
```javascript
(function(name) {
  console.log('Hello, ' + name);
})('World');
```

### Arrow Function IIFE
```javascript
(() => {
  console.log('Arrow IIFE!');
})();
```

## Why Use IIFEs?

### Create Private Scope
Variables inside an IIFE don't pollute the global scope.

```javascript
(function() {
  var secret = 'Hidden';
  console.log(secret);  // Works
})();

console.log(secret);  // Error: secret is not defined
```

### Avoid Variable Collisions
```javascript
var counter = 0;  // Global variable

(function() {
  var counter = 100;  // Different variable, doesn't affect global
  console.log(counter);  // 100
})();

console.log(counter);  // 0
```

### Module Pattern
```javascript
const module = (function() {
  let privateVar = 'secret';
  
  return {
    publicMethod: function() {
      return privateVar;
    }
  };
})();

module.publicMethod();  // 'secret'
module.privateVar;      // undefined
```

## Common Use Cases

**Before ES6 modules:**
- Creating private variables and functions
- Avoiding global namespace pollution
- Module pattern for encapsulation

**Modern usage:**
- Quick execution of code blocks
- Isolating code in legacy codebases
- Creating closures with specific data

## Note on Modern JavaScript

With ES6 modules (`import`/`export`) and block-scoped variables (`let`/`const`), IIFEs are less common than before. However, they're still useful for:
- Legacy code maintenance
- Quick isolated execution contexts
- Browser console testing
- Certain library patterns
