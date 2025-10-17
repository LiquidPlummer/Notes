# React StrictMode

## What is StrictMode?

`StrictMode` is a development tool that helps you find potential problems in your React application. It's a wrapper component that activates additional checks and warnings for its descendants.

```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## What Does It Do?

StrictMode performs extra checks during development to help you write better React code:

**1. Identifies Unsafe Lifecycles**
Warns about deprecated lifecycle methods that might cause bugs in future React versions.

**2. Warns About Legacy APIs**
Alerts you when using outdated React features like legacy string refs or findDOMNode.

**3. Detects Unexpected Side Effects**
Intentionally double-invokes certain functions (like component bodies, useState initializers, and useEffect cleanup) to help you catch side effects that should be pure.

**4. Warns About Deprecated APIs**
Notifies you when using features that will be removed in future React releases.

## Important Notes

- **Development Only**: StrictMode checks only run in development mode. They have zero impact on production builds.
- **No Visual Output**: StrictMode doesn't render any visible UI. It's purely for activating checks.
- **Double Rendering**: In development, components inside StrictMode render twice to help catch impure functions. This is intentional and helps you find bugs.

## Should You Use It?

**Yes**, especially when learning React. It helps you:
- Learn React best practices
- Catch bugs early
- Write more resilient code
- Prepare for future React versions

## Can You Remove It?

You can remove StrictMode if you want, but it's recommended to keep it during development:

```jsx
// Without StrictMode
createRoot(document.getElementById('root')).render(<App />)
```

However, the warnings it provides are valuable for catching issues before they become problems in production.

## What About Production?

StrictMode can be kept in your code even when deploying to production. All of its checks are automatically disabled in production builds, so it has zero performance impact.

Most developers remove StrictMode before deploying because it serves no purpose in production and keeping it is just an unnecessary wrapper. However, leaving it in won't break anything.

**For now: Keep it in.** Don't worry about StrictMode while you're learning React. It's helping you catch bugs and learn best practices. You can always remove it later if needed.
