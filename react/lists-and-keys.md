# Lists and Keys

Keys are a required attribute when rendering lists in React. They help React identify which items have changed, been added, or removed, improving performance and preventing bugs.

Keys must be unique among sibling elements in the same list, but don't need to be globally unique. Use a unique ID from your data (like a database ID) as the key. If you don't have IDs, generate them or use a library.

As a last resort, use the array index as a key, but this causes problems if items can be reordered, deleted, or inserted. React can lose track of elements, leading to bugs with state and input values.

```jsx
import React, { useState } from 'react';

const TodoList = () => {
  // Each todo has a unique 'id' property
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Walk the dog', completed: false },
    { id: 3, text: 'Finish homework', completed: true }
  ]);

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    // When items are deleted, keys help React track what changed
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        // key prop uses the unique id - this is crucial!
        <li key={todo.id}>
          <input 
            type="checkbox" 
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
```

## Keys Are Just an Attribute

Keys aren't a special React API or function - they're simply an attribute you add to JSX elements. There's no `Key` class or special imports needed. Just add `key={value}` to your elements when rendering lists, and React handles the rest internally. The important thing is remembering to use unique, stable values for your keys.
