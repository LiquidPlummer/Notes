# JavaScript DOM Manipulation - Quick Reference

## What Is the DOM?

The **Document Object Model (DOM)** is a tree-like representation of your HTML document that browsers create. 

**How it works:**
1. Browser receives HTML from the server (or locally)
2. Browser **parses** the HTML - reads it line by line and validates the syntax
3. Browser builds the DOM tree in memory - converting HTML tags into JavaScript objects (nodes)
4. Each HTML element becomes a node with properties and methods you can manipulate
5. JavaScript can then access and modify this tree structure to dynamically change the page

For example, `<div id="container"><p>Hello</p></div>` becomes a tree where the `div` node has a child `p` node, which has a text node containing "Hello". JavaScript can access any of these nodes and change them, which immediately updates what the user sees.

## Selecting Elements

```javascript
// Single element
const element = document.getElementById('myId');
const element = document.querySelector('.myClass');  // First match
const element = document.querySelector('#myId');

// Multiple elements (returns NodeList)
const elements = document.querySelectorAll('.myClass');
const elements = document.getElementsByClassName('myClass');
const elements = document.getElementsByTagName('div');
```

## Creating Elements

```javascript
const div = document.createElement('div');
const text = document.createTextNode('Hello');
const fragment = document.createDocumentFragment();  // For batch operations
```

## Adding Elements to the DOM

```javascript
// Append to end
parent.appendChild(child);

// Insert at specific position
parent.insertBefore(newChild, referenceChild);

// Modern methods
parent.append(child1, child2, 'text');  // Can add multiple, including text
parent.prepend(child);  // Add to beginning
element.after(newElement);
element.before(newElement);
```

## Removing Elements

```javascript
element.remove();  // Remove element itself
parent.removeChild(child);  // Remove specific child
```

## Modifying Content

```javascript
// Text content
element.textContent = 'New text';

// HTML content (be careful with user input!)
element.innerHTML = '<p>New HTML</p>';

// Get content
const text = element.textContent;
const html = element.innerHTML;
```

## Modifying Attributes

```javascript
// Set/get attributes
element.setAttribute('data-id', '123');
const value = element.getAttribute('data-id');

// Direct property access (common attributes)
element.id = 'newId';
element.className = 'new-class';
element.src = 'image.jpg';
element.href = 'https://example.com';

// Check if attribute exists
element.hasAttribute('data-id');

// Remove attribute
element.removeAttribute('data-id');
```

## Modifying Classes

```javascript
// Add/remove classes
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('open');  // Add if absent, remove if present

// Check for class
element.classList.contains('active');  // Returns boolean

// Replace class
element.classList.replace('old', 'new');
```

## Modifying Styles

```javascript
// Inline styles
element.style.color = 'blue';
element.style.backgroundColor = 'red';  // Use camelCase
element.style.fontSize = '16px';

// Multiple styles
Object.assign(element.style, {
  color: 'blue',
  fontSize: '16px',
  margin: '10px'
});
```

## Reading Element Properties

```javascript
// Dimensions and position
element.offsetWidth;   // Width including border
element.offsetHeight;  // Height including border
element.clientWidth;   // Width excluding border
element.offsetTop;     // Distance from top of offset parent

// Computed styles (actual rendered styles)
const styles = window.getComputedStyle(element);
const color = styles.color;
```

## Traversing the DOM

```javascript
// Parent
element.parentElement;
element.parentNode;

// Children
element.children;  // HTMLCollection (only elements)
element.childNodes;  // NodeList (includes text nodes)
element.firstElementChild;
element.lastElementChild;

// Siblings
element.nextElementSibling;
element.previousElementSibling;
```

## Why This Matters for React

React abstracts away direct DOM manipulation. Instead of manually creating elements and updating the DOM, React:

- Uses a **Virtual DOM** - a JavaScript representation of the real DOM
- Automatically handles DOM updates when data changes
- Determines the most efficient way to update the real DOM
- Lets you describe **what** the UI should look like, not **how** to build it

Understanding vanilla DOM manipulation helps you appreciate what React does behind the scenes and is useful for:
- Debugging React applications
- Understanding React's performance benefits
- Knowing when to use refs for direct DOM access (rare cases)
- Working with third-party libraries that need DOM access
