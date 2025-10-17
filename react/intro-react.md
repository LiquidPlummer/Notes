# Intro to React
**React** is a JavaScript library for building user interfaces, created and maintained by Meta (formerly Facebook). It's designed to make building interactive, dynamic web applications easier by letting you create reusable UI components and efficiently manage how your application updates in response to user interactions and data changes. React has become one of the most popular tools for building modern web applications, with a massive ecosystem and community support.

## Traditional Web Applications

In traditional websites, the server stores complete HTML documents and sends them to the browser on request:

**The Request/Response Cycle:**
1. User clicks a link (e.g., "About Us")
2. Browser sends a request to the server: `GET /about.html`
3. Server locates the requested HTML document
4. Server sends the entire document back to the browser
5. Browser receives the page and discards the old page completely
6. Browser parses and renders the new document from scratch

**Every navigation repeats this cycle:**
- Click "Products" → request `products.html`, full page load
- Click "Contact" → request `contact.html`, full page load
- Submit a form → request new page, full page load

**Problems with this approach:**
- Slow: Every click requires a round trip to the server
- Redundant: Each document contains duplicate structure (header, footer, nav)
- Jarring: The page flashes white during loads
- Network-intensive: Large HTML documents transferred on every request

## What are SPAs?

**Single Page Applications (SPAs)** load once, then use JavaScript to manipulate the page content directly without requesting new HTML from the server.

**The SPA Approach:**
1. **Initial Load**: Browser downloads one HTML page plus a JavaScript bundle
2. **User Interaction**: Clicking links/buttons runs JavaScript instead of requesting new pages
3. **DOM Manipulation**: JavaScript directly modifies the page content (the DOM)
4. **Data Fetching**: Only JSON data is fetched from APIs when needed, not entire pages

Examples: Gmail, Twitter, Netflix

## How SPAs Work

**Initial Load:**
The browser downloads a minimal HTML file that looks something like:
```html
<html>
  <body>
    <div id="root"></div>
    <script src="bundle.js"></script>
  </body>
</html>
```

That `bundle.js` contains all your application code. It takes over and builds the entire UI.

**What is a Bundler?**
A bundler is a tool that takes all your JavaScript files, React components, CSS, and other assets and combines them into optimized files that browsers can efficiently load. During development, bundlers also provide features like:
- Hot reloading (see changes instantly without refresh)
- Fast build times
- Development servers
- Code transformation (JSX → JavaScript, modern → older JS)

**Popular Bundlers:**
- **Webpack** - The original, very configurable but complex
- **Vite** - Modern, extremely fast, simple to use (our choice)
- **Parcel** - Zero-config option
- **esbuild** - Ultra-fast, newer option

We'll use **Vite** because it's fast, has become the community standard, and requires minimal configuration to get started.

**DOM Manipulation:**
Instead of requesting new pages, SPAs update the existing page by manipulating the DOM (Document Object Model). When a user clicks a button or link, JavaScript intercepts the action, fetches any needed data from an API (just JSON, not HTML), and directly modifies the page content.

**What's different:**
- No page reload or white flash
- Only data transferred (JSON), not HTML documents
- Instant UI updates
- App feels responsive like a native application

**The challenge:** Writing all that DOM manipulation code by hand gets complex fast. That's where React comes in.

## How React Solves the Problem

React makes building SPAs easier by:

**1. Component-Based Architecture**
- Break UI into reusable pieces (components)
- Each component manages its own logic and appearance

**2. Declarative UI**
- Describe *what* the UI should look like, not *how* to update it
- React handles the DOM updates for you

**3. Virtual DOM**
- React maintains a virtual representation of the UI
- Calculates minimal changes needed
- Updates only what changed (efficient)

**4. State Management**
- Components can have "state" (data that changes)
- When state changes, React automatically re-renders

## Getting Started

### Install Node.js and NPM

1. Download Node.js from [nodejs.org](https://nodejs.org)
2. Install the LTS version (includes NPM)
3. Verify installation:
```bash
node --version
npm --version
```

### Create Your First React App

Open your terminal and run:

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

This will:
1. Create a new React project called "my-app"
2. Navigate into the project folder
3. Install all dependencies
4. Start the development server

Open your browser to the URL shown (usually `http://localhost:5173`) to see your app running!

We can also create an app that supports TSX by using a different template:
```bash
npm create vite@latest my-app -- --template react-ts
```

### Project Structure
After creating the new React app, you should find a project that looks similar to this:
```
my-app/
├── .gitignore          # Git ignore rules
├── eslint.config.js    # ESLint configuration
├── index.html          # HTML template
├── package.json        # Project config
├── package-lock.json   # Locked dependency versions
├── README.md           # Project documentation
├── vite.config.js      # Vite configuration
├── node_modules/       # Dependencies
├── public/             # Static files
└── src/                # Your code goes here
    ├── App.css         # App component styles
    ├── App.jsx         # Main component
    ├── index.css       # Global styles
    └── main.jsx        # Entry point
```

Start editing `src/App.jsx` to build your application!
