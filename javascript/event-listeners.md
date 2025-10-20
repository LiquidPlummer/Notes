# JavaScript Event Listeners - Quick Reference

## What Are Events?

Events are actions or occurrences that happen in the browser that JavaScript can detect and respond to. Common events include:
- **User interactions**: click, dblclick, mouseenter, mouseleave, keydown, keyup
- **Form events**: submit, change, input, focus, blur
- **Document/Window**: load, DOMContentLoaded, resize, scroll
- **Media**: play, pause, ended

When an event occurs, an event object is created containing details about what happened.

## What Are Event Listeners?

Event listeners are functions that "listen" for specific events on DOM elements and execute code when those events occur.

**The DOM (Document Object Model)** is a tree-like representation of your HTML document. Each HTML element is a node in this tree, with parent-child relationships (e.g., `<body>` contains `<div>`, which contains `<button>`). Event listeners attach to these DOM nodes and wait for events to happen.

## Adding Event Listeners

### Via HTML
```html
<button onclick="handleClick()">Click me</button>
```
Simple but mixes HTML and JS, limited to one handler per event.

### Via JavaScript
```javascript
element.addEventListener('click', handleClick);
element.addEventListener('click', handleClick, options);
```

The third parameter accepts either a boolean or an options object:

**Boolean (legacy)**: `true` for capturing, `false` (default) for bubbling

**Options object**:
```javascript
{
  capture: false,  // Use capturing phase (default: false)
  once: false,     // Remove listener after first trigger (default: false)
  passive: false,  // Promise to never call preventDefault() (default: false)
  signal: abortSignal  // AbortSignal to remove listener programmatically
}
```

**Removing listeners**: `element.removeEventListener('click', handleClick)` - must use same function reference and capture setting

## Event Propagation Phases

Events propagate through the DOM in three phases:

1. **Capturing phase** - from root down to target
2. **Target phase** - event reaches the target element
3. **Bubbling phase** - from target back up to root

### Bubbling (default)
```javascript
element.addEventListener('click', handler);
// or
element.addEventListener('click', handler, false);
```
- Event fires on target first, then ancestors
- Most events bubble (exceptions: focus, blur, load)

### Capturing
```javascript
element.addEventListener('click', handler, true);
// or
element.addEventListener('click', handler, { capture: true });
```
- Event fires on ancestors first, then target
- Useful for intercepting events before they reach target

## Controlling Propagation

### Stop Bubbling/Capturing
```javascript
event.stopPropagation();
```
- Prevents event from moving to next element in chain
- Other handlers on current element still fire

### Stop All Handlers
```javascript
event.stopImmediatePropagation();
```
- Stops propagation AND prevents other handlers on current element

## Event Object

When an event fires, the handler receives an event object with information about the event:

```javascript
element.addEventListener('click', function(event) {
  console.log(event.target);  // Element that was clicked
  event.stopPropagation();    // Stop event from bubbling up
});
```

### Key Properties
- `event.target` - The element that triggered the event (where it originated)
- `event.target.value` - The value of the target element (for inputs, textareas, selects)
- `event.currentTarget` - The element with the listener attached (same as `this` in non-arrow functions)
- `event.type` - The event type (e.g., 'click', 'keydown')
- `event.eventPhase` - Current phase: 1=capturing, 2=target, 3=bubbling
- `event.bubbles` - Boolean indicating if event bubbles
- `event.timeStamp` - When the event occurred

### Key Methods
- `event.preventDefault()` - Stops browser's default behavior (form submission, link navigation, etc.)
- `event.stopPropagation()` - Stops propagation to next elements
- `event.stopImmediatePropagation()` - Stops all propagation including other handlers on current element

### Event-Specific Properties
Different event types have additional properties:
- **Mouse events**: `clientX`, `clientY`, `button`, `altKey`, `ctrlKey`, `shiftKey`
- **Keyboard events**: `key`, `code`, `altKey`, `ctrlKey`, `shiftKey`
- **Form events**: `target.value`, `target.checked`
