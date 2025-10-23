
## Required Questions

[Back to top](#unit)

* **What are functional components in React and how are they used?**  
  * JavaScript functions that return JSX to render UI  
  * Use hooks like `useState` and `useEffect` for state and side effects

* **How do Single Page Applications (SPAs) differ from Multi Page Applications (MPAs)?**  
  * SPAs load a single HTML file and dynamically update content via JavaScript  
  * MPAs reload the entire page from the server on every navigation

* **What are the most commonly used React hooks and what do they do?**  
  * `useState` adds local component state  
  * `useEffect` handles side effects like data fetching and subscriptions

* **How are props passed into a React component?**  
  * Props are passed as attributes in JSX, e.g., `<Component title="Hello" />`  
  * Access props inside the component via the `props` object or destructuring

* **What is JSX and how is it used in a React application?**  
  * JSX is a syntax extension that allows writing HTML-like code in JavaScript  
  * Compiles to `React.createElement()` calls behind the scenes

* **What does it mean to be component-based? What does a component represent?**
  * Keywords, concepts, or topics that should be in the response:
    * Components are reusable parts of the UI that maintain a state and get rendered to the page
    * **Follow-up: Why use components?**
      * Increase reusability and maintainability
      * Also helps loosen code coupling within the application
      * Can pass data between components hierarchically as props

* **What is a single page application (SPA)?**
  * Keywords, concepts, or topics that should be in the response:
    * Single Page Application is a website design approach where each new page's content is served not from loading new HTML pages but generated dynamically with JS's ability to manipulate the DOM elements on the existing page itself
    * We can have many components that are rendered in one SINGLE page
    * It is constructed in a way that we only ever need to render one DOM object

* **What are some benefits and drawbacks of SPA?**
  * Keywords, concepts, or topics that should be in the response:
    * Benefit: allows users to continue consuming and interacting with the page while new elements are being updated or fetched, and can result in much faster interactions
    * Drawbacks / downsides
      * Accessibility
      * SEO rankings
      * If your content is purely static, it can worsen initial load times

* **Tell me how you would start up a new React project? What does `create react app` setup for you?**
  * Keywords, concepts, or topics that should be in the response:
    * You should use `npm` to install `react` and any other dependencies

* **How would you create a component?**
  * Keywords, concepts, or topics that should be in the response:
    * Create either a JS class or function
  * **Follow-up: what does a component have to return?**
    * Class components need a `render` method that returns JSX
    * Functional components directly return JSX
  * **Follow-up: What is the difference between a functional and a class component?**
    * Functional - before hooks, could not modify state and only used as 'display' component
    * Class - utilizes lifecycle methods and `render` method

* **What is the `App.tsx`? Why do we structure it in that way?**
  * Keywords, concepts, or topics that should be in the response:
    * Main component, entry point for our application, usually do routing within it
    * This is where we render the root node for the DOM object
    * It's structured like this because easy to maintain and at the end of the day we only want one root for everything else

* **What are "props"? What is state? What data should be put in which?**
  * Keywords, concepts, or topics that should be in the response:
    * Props are read-only; they are passed into the component
    * State is the immutable object representing the current state of the component
  * **Follow-up: how do you edit state in functional and class components?**
    * Class components: use `setState()` and replace the prev state object instead of editing it directly
    * Functional components: get update function from `useState()` hook
    * Remember: state is immutable, so cannot edit directly; this follows functional programming and prevent consistency problems

* **What is the lifecycle of a component?**
  * Class components use specific lifecycle methods:
    * Constructor - use for initializing state
    * `render()` - returns the JSX to be compiled and rendered onto the browser
    * `componentDidMount()` - runs once, after the component is rendered
    * `componentDidUpdate()` - runs after every update of the component
    * `componentWillUnmount()` - runs before the component is removed from the DOM

* **What are React hooks? How do we use them?**
  * Keywords, concepts, or topics that should be in the response:
    * React hooks are functions we can call in order to access certain functionalities
    * They all start with `use` such as `useStyle()`, `useState()`, `useEffect()`, `useReducer()`
    * We call them hooks because they allow us to `hook` into certain aspects of a component whether it be style or lifecycle
  * **Follow-up: What do these hooks let us do?**
    * `useState()`
      * returns an array of the following
        * Index 0, we have the state object
        * Index 1, we have the function to use to update that object state
    * `useEffect()`
      * Allows us to manage side-effects that aren't related to rendering the component
      * Typically actions such as logging or fetching data will utilize `useEffect()`
      * Takes in 2 params
        * A callback function denoting what action you want to perform
        * A dependency array of state values that act as triggers for the action on change
    * `useReducer()`
      * Allows us a better way of updating complex state logic
      * Takes in 2 params
        * The callback function with logic to update the state
        * The initial state of the object

* **How do we save data in a component?**
  * Keywords, concepts, or topics that should be in the response:
    * To save data we can use React component states
    * If we are using class components, we can set this initial state directly in the constructor
    * If we are using a function component, we can use the `useState()` hook to create and offer a method to change state

* **What is JSX? What does it compile into? How to include JS code in JSX?**
  * Keywords, concepts, or topics that should be in the response:
    * JSX is an extension syntax to JS - it lets you write HTML and JS code together; compiles into JS
    * Not required but helps with development
    * Write JS code by using curly braces `{like this}`

* **What are some of the differences between JSX HTML and normal HTML?**
  * Keywords, concepts, or topics that should be in the response:
    * Attribute names
      * Example class => className
      * You can also create your own "attributes" which are called props
    * Tag names
      * HTML tag: `<p>`
      * Component tag: `<SomeComponent>`
      * We can directly add JS into JSX HTML by using { } where as in HTML you cannot do this

## Preferred Questions

[Back to top](#unit)

* **How do you make HTTP requests in React using Axios or Fetch?**  
  * Use `fetch()` or `axios.get()` inside `useEffect` to call APIs  
  * Handle response data and update component state with `setState` or `useState`

* **How does BrowserRouter enable routing between components?**  
  * Wrap the app with `<BrowserRouter>` to enable client-side routing  
  * Use `<Route>` and `<Link>` to define and navigate between views

* **How can route guards be implemented in a React app?**  
  * Use conditional rendering in route components to redirect unauthorized users  
  * Leverage `useNavigate()` or `<Navigate />` from `react-router-dom`

* **What are the core paradigms of React development?**  
  * Declarative UI, component-based architecture, and unidirectional data flow  
  * State management and side-effect handling via hooks

* **How do you implement a function component in React?**  
  * Define a function that returns JSX  
  * Accept props as an argument and use hooks to manage behavior

* **How do you use NPM libraries to add functionality to a React project?**  
  * Install libraries with `npm install` or `yarn add`  
  * Import them into your components and use them like any JavaScript module

* **What is routing and how would you do routing in React?**
  * Keywords, concepts, or topics that should be in the response:
    * Need to install `react-router` using `npm`
    * Use the `BrowserRouter` component to provide context where routing will work
    * Use `Link` component to link to a particular route
    * Use `Routes` and `Route` components to link routes to particular components that get rendered

* **What is the `package.json` file?**
  * Keywords, concepts, or topics that should be in the response:
    * Lists our dependencies
    * Lists our scripts
      * Start, test are aliases for `npm run [script]`
    * Run the build script to show the target folder

* **Does React have 1-way or 2-way data binding and data flow?**
  * Keywords, concepts, or topics that should be in the response:
    * 1-way data binding
    * Data always flows "down" to components nested within them

* **If a parent component has data that a child component needs to access, what should you do?**
  * Keywords, concepts, or topics that should be in the response:
    * Pass in the data through `props` to the child

* **If you have state in two child components that a parent component needs access to, what is a good solution for that?**
  * Keywords, concepts, or topics that should be in the response:
    * Lift the state up to the parent component and then pass it into each child via `props`

## Stretch Questions

[Back to top](#unit)

* **How do you use `createContext()` to define multiple contexts in React?**  
  * Call `React.createContext()` to define each context  
  * Export context objects for use with `Provider` and `useContext()`

* **How are `Context.Provider` tags used to distribute state?**  
  * Wrap components in `<Context.Provider value={...}>`  
  * Any nested component can access the state using `useContext(Context)`

* **How can advanced hooks manipulate context in a React app?**  
  * Use `useReducer` for complex state logic inside context providers  
  * Combine `useMemo` with `useContext` to optimize performance

* **How are React components tested using Jest and the React Testing Library?**  
  * Use `render()` from `@testing-library/react` to render components in tests  
  * Assert behavior with queries like `getByText`, `getByRole`, and `fireEvent`

* **What is ReactDOM.render?**
  * Keywords, concepts, or topics that should be in the response:
    * ReactDOM takes 2 arguments
      * The element to render
      * The location to add the element to in the DOM

* **What is the virtual DOM?**
  * Keywords, concepts, or topics that should be in the response:
    * An "ideal" or "virtual" state of the UI that is managed by React and kept in sync with the actual DOM
    * Improves performance by only requiring changing the actual DOM when needed
  * **Follow-up: How does virtual DOM compare to the DOM?**
    * Kept in sync with the real DOM by a library such as ReactDOM. The process is called reconciliation
    * You tell react what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out attribute manipulation, event handling and manual DOM updates that you would otherwise have to do
