# React Fragments

## What Are Fragments?

React components must return a single root element. Fragments let you group multiple elements without adding an extra DOM node. They satisfy React's single-root requirement without creating unnecessary wrapper divs that can interfere with CSS or clutter your HTML.

The most common syntax uses empty tags `<>` and `</>`:

```jsx
function UserInfo() {
  return (
    <>
      <h1>John Doe</h1>
      <p>Software Developer</p>
      <p>john@example.com</p>
    </>
  );
}
```

You can also use `<Fragment>` from React if you need to add a `key` prop for lists. The Fragment doesn't appear in the rendered HTML - only its children do.
