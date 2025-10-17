# Routing in React

## What is Routing?

Routing is the process of navigating between different pages or views in your application. In traditional websites, clicking a link loads a completely new HTML page from the server. In single-page applications (SPAs), routing happens in JavaScript without full page reloads - the URL changes, but the browser stays on the same page and React updates what's displayed.

## React Router

React doesn't have built-in routing. The most popular routing library is **React Router**, which is the standard solution for handling navigation in React applications.

As of 2025, **React Router v6** is the current version, with v7 in development.

## Installing React Router

```bash
npm install react-router-dom
```

The `react-router-dom` package is specifically for web applications (there's also `react-router-native` for React Native).

## Basic Setup

The routed content appears wherever you place the `<Routes>` component in your JSX. Everything outside of `<Routes>` (like headers, footers, navigation) stays on the page while the matched route renders inside `<Routes>`.

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>My Website</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      {/* Routed content renders here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        <p>Copyright 2025</p>
      </footer>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}
```

## Key Components

- **BrowserRouter:** Wraps your entire app and enables routing. Put this at the top level.

- **Routes:** Container for all your Route components. Only one Route will match at a time.

- **Route:** Defines a path and what component to render when that path matches.

- **Link:** Creates navigation links. Use instead of `<a>` tags to prevent full page reloads.

## Dynamic Routes

Use URL parameters to create dynamic routes:

```jsx
import { useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:userId" element={<UserProfile />} />
        <Route path="/posts/:postId" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

function UserProfile() {
  const { userId } = useParams();
  return <h1>User Profile: {userId}</h1>;
}

function Post() {
  const { postId } = useParams();
  return <h1>Post: {postId}</h1>;
}
```

The `:userId` syntax defines a URL parameter. Access it with the `useParams()` hook.

## Programmatic Navigation

Navigate from JavaScript code using the `useNavigate` hook:

```jsx
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // After successful login
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleLogin}>
      <button type="submit">Login</button>
    </form>
  );
}
```

## Nested Routes

Create nested routing structures with child routes that render inside parent components:

```jsx
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      <nav>{/* navigation */}</nav>
      <Outlet /> {/* Child routes render here */}
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* Nested child routes render here */}
    </div>
  );
}
```

The `<Outlet />` component acts as a placeholder where child routes render. It's similar to Angular's `<router-outlet>` for nested routes.

## 404 Not Found

Handle routes that don't match:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}
```

The `path="*"` matches any route that hasn't been matched by previous routes.

## Important Notes

- Always wrap your app with `<BrowserRouter>`
- Use `<Link>` instead of `<a>` tags for internal navigation
- Routes must be inside a `<Routes>` component
- Only one route matches at a time (first match wins)
- React Router is a separate library, not part of React core
