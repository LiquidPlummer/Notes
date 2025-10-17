# React Project Structure

When you create a new React app with Vite, several files are generated. Let's understand what each one does.

## Configuration Files

### eslint.config.js

ESLint is a tool that analyzes your code for potential errors and style issues. This file configures the rules ESLint uses to check your code.

The default configuration includes:
- React-specific rules (hooks, JSX syntax)
- Best practice warnings
- Code style guidelines

You'll see warnings in your editor when you break these rules. You can modify this file to adjust which rules are enforced.

### package.json

This is your project's manifest file. It contains:
- **Project metadata**: name, version, description
- **Dependencies**: libraries your app needs (React, ReactDOM)
- **DevDependencies**: tools for development (Vite, ESLint)
- **Scripts**: commands you can run (`npm run dev`, `npm run build`)

When you install new packages with `npm install`, they're automatically added here.

### package-lock.json

This file locks the exact versions of all dependencies and their sub-dependencies. It ensures everyone working on the project uses identical package versions.

**Don't edit this file manually.** It's automatically generated and updated by npm. You should commit it to version control to ensure consistent builds across different environments.

### vite.config.js

This configures how Vite builds and serves your app. The default setup includes:
- React plugin configuration
- Development server settings
- Build optimization options

Most beginners won't need to modify this file. Vite works great out of the box.

## Source Code Files (src/)

### main.jsx

This is the entry point of your React application. It's the first JavaScript file that runs.

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

**What it does:**
1. Imports React and your App component
2. Finds the `<div id="root">` in index.html
3. Creates a React root and renders your App inside it
4. Wraps everything in StrictMode for development checks

You rarely need to modify this file unless you're adding global providers or configuration.

### App.jsx

This is your main application component. It's the root of your component tree. Everything you build will either go in this file or be imported into it.

The default App.jsx includes some starter content and examples. You'll replace this with your actual application code.

### App.css

Styles specific to the App component. When you import this in App.jsx, these styles become available.

The default file includes some example styles. You can delete these and write your own, or remove the file entirely if you prefer other styling approaches (Tailwind, CSS modules, etc.).

### index.css

Global styles that apply to your entire application. This is imported in main.jsx, so it loads before any components render.

Common uses:
- CSS resets
- Base typography
- Global color variables
- Body and html styles

## Organizing Your App

As your application grows beyond the starter files, you'll need to organize your code. Here are two popular approaches:

### Feature-Based Structure

Organize code by features or domains of your application:

```
src/
├── features/
│   ├── auth/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── authService.js
│   │   └── authStyles.css
│   ├── products/
│   │   ├── ProductList.jsx
│   │   ├── ProductDetail.jsx
│   │   └── productsApi.js
│   └── cart/
│       ├── Cart.jsx
│       └── cartUtils.js
├── components/          // Shared components
│   ├── Button.jsx
│   ├── Modal.jsx
│   └── Header.jsx
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

**Benefits:**
- Related code stays together
- Easy to find feature-specific code
- Good for larger apps with distinct sections
- Makes it easier to work on features independently

### Type-Based Structure

Organize code by the type of file (components, utilities, services):

```
src/
├── components/
│   ├── Login.jsx
│   ├── ProductList.jsx
│   ├── Cart.jsx
│   ├── Button.jsx
│   └── Modal.jsx
├── hooks/
│   ├── useAuth.js
│   └── useProducts.js
├── services/
│   ├── authService.js
│   └── productsApi.js
├── utils/
│   ├── formatters.js
│   └── validators.js
├── styles/
│   ├── components.css
│   └── utilities.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

**Benefits:**
- Clear separation of concerns
- Easy to find all components or all utilities
- Simple mental model
- Good for smaller to medium apps

## Which Structure Should You Use?

**Starting out:** Keep it simple with a flat `components/` folder. Don't over-organize until you need to.

**As you grow:** Choose based on your app:
- **Feature-based** if you have distinct sections (user dashboard, admin panel, shopping features)
- **Type-based** if your app is simpler or more uniform

You can always refactor later. Most apps start simple and evolve their structure as needed.
