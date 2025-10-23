
## Required Questions

[Back to top](#unit)

* **What is JavaScript? What are some features and how does it compare to other languages?**
  * Keywords, concepts, or topics that should be in the response:
    * Loosely typed, high-level, scripting language
    * Multi-paradigm (functional, object-oriented, procedural)
    * DOM manipulation
    * Single-threaded, asynchronous
    * Originally designed for browser (client side); can run server-side with Node.js
  * Possible follow-up questions
    * **What does being loosely typed mean?**
      * Variables can change data type, different data types can be compared
    * **What programming paradigm(s) does JS support?**
      * Multi-paradigm (functional, object-oriented, procedural)
    * **Can we run JavaScript in a web browser, on a server, or both?**
      * Originally designed for browser (client side); can run server-side with Node.js
  
* **What are the different scopes of variables in JS?**
  * Keywords, concepts, or topics that should be in the response:
    * block
    * function / lexical
    * global
  * Possible follow-up questions
    * **What are the different ways to declare global variables?**
      * If not using `strict` mode, any variable used without declaring will be global
      * If using `strict` mode, must declare outside of any function
    * **Is it a best practice to use global variables? Why or why not?**
      * No, because variables should be encapsulated in the lowest scope needed for easier maintenance of code
    * **What is the difference between var, let, and const keywords?**
      * `var` = function scoped; `let` = block scoped; `const` = cannot reassign or change variable's value
    * **If you declare a variable `var` inside a `for` loop is that block, function, or global scoped?**
      * function
    * **If you declare a variable `let` inside a `for` loop is that block, function, or global scoped?**
      * block

* **What is the difference between `==` and `===?` Which one allows for type coercion?**
  * Keywords, concepts, or topics that should be in the response:
    * `==` allows type coercion, compares values only; data types can be converted
    * `===` is strict comparison, data types must match for this to return `true`
    * Example: `5 == '5' // true`
    * Example: `5 === '5' // false`
  * Possible follow-up questions
    * **What is the result of the expression here? `3 === '3'`**
      * The result will be equal to false because the datatype does not match.
      * The 3 on the left is of type `number` and the 3 on the right is of type `string`

* **What are JS objects? What is the syntax?**
  * Keywords, concepts, or topics that should be in the response:
    * In JS, objects are collections of key/value pairs, like a dictionary or map in other languages
    * Use curly brace syntax: `let obj = {a: 'foo'}`

* **What is JSON? Is it different from JS objects?**
  * Keywords, concepts, or topics that should be in the response:
    * JavaScript Object Notation - a format for data to be stored or transferred in
    * JSON is a string and must be converted (parsed) into an object for use as a JS object
    * Use the built-in `JSON.parse()` and `JSON.stringify()` methods to parse/serialize

* **What are callback functions?**
  * Keywords, concepts, or topics that should be in the response:
    * Functions that are passed in as parameters to other functions
    * Useful for asynchronous programming
    * This is possible because functions are treated as objects in JS

* **What is the DOM? How is it represented as a data structure? What object in a browser environment allows us to interact with the DOM?**
  * Keywords, concepts, or topics that should be in the response:
    * DOM = Document Object Model
    * In-memory representation of nodes on the HTML tree
    * It is a tree structure, each node has sub-nodes (nested elements)
    * Get and manipulate DOM elements through the `document` global object

* **List some ways of querying the DOM for elements**
  * Keywords, concepts, or topics that should be in the response:
    * `document.getElementById()`
    * `document.getElementsByClassName()`
    * `document.getElementsByTagName()`
    * `document.querySelector()`
    * `document.querySelectorAll()`

* **What are event listeners? What are some events we can listen for? What are some different ways of setting event listeners?**
  * Keywords, concepts, or topics that should be in the response:
    * Callback functions that run when a particular event happens on an element
    * Common events: 'click', 'mouseover', 'keydown', 'keyup', 'mouseleave'
    * Use `element.addEventListener()` method or assign `element.onXXX = function(){...}` where XXX=the event name you want to listen for

* **What is bubbling and capturing and what is the difference?**
  * Keywords, concepts, or topics that should be in the response:
    * When an event is triggered, it must propagate through the DOM
    * Starts from outermost root element and travels inward to target element (capturing)
    * Then it goes back out from target element to outermost element (bubbling)
    * Event listeners can be configured to fire on either of these phases
    * Events can also be prevented from further propagation through the DOM
    * Default phase to execute on is bubbling

* **What is AJAX? why do we use it? What are the benefits of using AJAX? Are there any downsides of using AJAX?**
  * Keywords, concepts, or topics that should be in the response:
    * AJAX = Asynchronous Javascript And XML
    * Allows for HTTP requests that you don't have to wait on to continue executing other code
    * Does not block user interactions on the page
    * Downside: asynchronous programming not as straightforward as procedural
  * Possible follow-up questions
    * Explain why it is important that AJAX is asynchronous

* **List the steps to sending an HTTP request using the fetch API**
  * Keywords, concepts, or topics that should be in the response:
    * Call `fetch()` and pass the URL and optional configuration object
    * Chain `.then()` on the object returned and pass in callback functions to process the response
  * Possible follow-up questions
    * What is the default HTTP method when `fetch()` is called? Ans: GET  

* **How do you handle a failed request when using the Fetch API?**
  * Keywords, concepts, or topics that should be in the response:
    * chain a `.catch()` method onto the `Promise` returned by the `fetch()` call
    * Example: `fetch(URL).then(resp => console.log(resp.json())).catch(error => console.error(error))`

* **What type of object does the Fetch API return?**
  * Keywords, concepts, or topics that should be in the response:
    * Promise - wrapper for a value delivered asynchronously
    * Promises can be resolved or rejected for successful vs unsuccessful completion
    * Helpful for asynchronous programming - timeouts, HTTP requests and API calls
  * Possible follow-up questions:
    * What is a Promise?
    * How do you interact with a Promise? When would it be appropriate to use a Promise?
      * Call `.then()` method and pass callback function to process the data
      * Use `.catch()` to handle errors (rejected state)

* **What is function and variable hoisting?**
  * Keywords, concepts, or topics that should be in the response:
    * Variables declared with `var` are hoisted to the top of their scope when the JS interpreter scans the code
    * Functions are hoisted as well
    * This means you could use these functions and variables before they are declared - but this is a **bad practice**

* **Explain the `async`/`await` keywords. Why is it preferred to use this instead of `.then()` methods?**
  * Keywords, concepts, or topics that should be in the response:
    * Introduced with ES7, these allow asynchronous functions
    * `async` functions return a `Promise`, can use `await` within it
    * `await` expressions make promise-returning functions behave as if synchronous by suspending execution until promise is fulfilled or rejected
    * Resolved value of the promise used as return value of the `await` expression
    * Cleaner style than explicit promise chaining

## Preferred Questions

[Back to top](#unit)

* **What are the data types in JS?**
  * Keywords, concepts, or topics that should be in the response:
    * number
    * boolean
    * string
    * undefined
    * null
    * object
  * Possible follow-up questions
    * What is the type of NaN?
      * `NaN` is a `number`
    * What is the data type of a function?
      * Object
    * What is the data type of an array?
      * Object
    * What is the difference between `undefined` and `null`?
      * `undefined` has no value assigned; `null` represents empty value

* **What are arrays in JS and how do they work? Can you change their size?**
  * Keywords, concepts, or topics that should be in the response:
    * Dynamic, can add or remove elements; similar to lists in other languages
    * Array is actually an object under the hood with '0', '1', '2', etc being the properties
    * Access elements with `myarray[index]` syntax; 0-based indexing

* **What is the global object in client-side JavaScript? What are some built-in properties and functions on this object?**
  * Keywords, concepts, or topics that should be in the response:
    * `window` is the global object in the browser
    * `window.document` is a common global variable to access the DOM through
    * `window.alert()` function can show a basic alert

## Stretch Questions

[Back to top](#unit)

* **List some array methods and explain how they work**
  * Keywords, concepts, or topics that should be in the response:
    * push, pop, concat, fill, every
    * map, includes, reduce, reverse
    * shift, slice, sort

* **What are some ways you can use functions in JS?**
  * Keywords, concepts, or topics that should be in the response:
    * callback functions
    * assign and store in variables
    * arrow functions

* **What is a truthy or falsy value? List the falsy values.**
  * Keywords, concepts, or topics that should be in the response:
    * Every value is either truthy or falsy in JS which means it can be used in conditional statements
    * falsy values: `0`, `null`, `NaN`, `''`, `undefined`, `false`
    * Everything not falsy above is truthy

* **What is the difference between `for of` and `for in`?**
  * Keywords, concepts, or topics that should be in the response:
    * `for-of` loops over the values in an object
    * `for-in` loops over the keys in an object

* **What is the difference between a do-while and a while loop?**
  * Keywords, concepts, or topics that should be in the response:
    * do-while loops always run at least once

* **What is fall-through with regard to switch statements?**
  * Keywords, concepts, or topics that should be in the response:
    * If no `break` statement is included in the case, execution will continue with the next case
    * Example:

    ```javascript
    switch(x) {
      case 'a': console.log('hi ');
      case 'b': console.log('hello');
    }
    switch('a'); // hi hello
    ```

* **Explain what "strict mode" does**
  * Enforces certain conventions like requiring `;` at the end of each line and preventing accidental global variables

* **What are the naming conventions for a variable used in JavaScript?**
  * We use camelCase

* **What are the naming conventions for a function used in JavaScript?**
  * Keywords, concepts, or topics that should be in the response:
    * also camelCase

* **How would you insert a new element into the DOM?**
  * Keywords, concepts, or topics that should be in the response:
    * `document.createElement()` or `document.createDocumentFragment()` (more efficient for more elements)
    * Can append to other elements with `element.appendChild(newElement)`

* **What are some methods on the event object and what do they do?**
  * Keywords, concepts, or topics that should be in the response:
    * `event.stopPropagation()` - prevents event from traveling further through the DOM
    * `event.stopImmediatePropagation()` - like above, but prevents all other listeners from being called even on same element
    * `event.preventDefault()` - cancels the event (the default functionality will not happen)

* **List the steps to sending an AJAX request (using the XHR object)**
  * Keywords, concepts, or topics that should be in the response:
    * Create the `XmlHttpRequest` object
    * Call `.open()` and provide URL and optional data for body
    * Configure `.onreadystatechange` callback to handle the response
    * Send with `.send()` method
    * Possible follow-up questions
      * List the different ready states of the XmlHttpRequest object?
        * 0: UNSENT - Client has been created. open() not called yet.
        * 1: OPENED - open() has been called.
        * 2: HEADERS_RECEIVED - send() has been called, and headers and status are available.
        * 3: LOADING - Downloading; responseText holds partial data.
        * 4: DONE - The operation is complete.
      * What conditions should you check in the ready state change callback to run only when request is successful?
        * The XHR ready state should be 4 and the HTTP status should be between 200 and 299
      * How would you retrieve JSON data from the response?
        * Use `JSON.parse()` and pass in the `xhr.responseText` to convert to JSON object

* **What is the difference between Fetch and XHR?**
  * Keywords, concepts, or topics that should be in the response:
    * `fetch` is a higher level API and is built on top of XHR API
    * XHR is older, lower level, legacy, and not recommended

* **What is the difference between using `Promise.all()` and `Promise.race()`?**
  * Keywords, concepts, or topics that should be in the response:
    * Each take an array of Promises
    * `Promise.all()` returns a single Promise that resolves to an array of the results of the input promises (waits for all Promises to complete)
    * `Promise.race()` resolves with a single value as soon as one of the input promises resolves (the first Promise to complete is returned)

* **What is closure and when should you use it?**
  * Keywords, concepts, or topics that should be in the response:
    * When a function is declared within another, the outer function does not have access to the variables in the inner function
    * Allows encapsulation within JavaScript

* **What does the "this" keyword refer to?**
  * Keywords, concepts, or topics that should be in the response:
    * The function or object in which it is declared
    * Arrow functions do not inherit "this" from the parent context
  * Possible follow-up questions
    * Explain the concept of lexical scope

* **Explain how inheritance works in JS**
  * Keywords, concepts, or topics that should be in the response:
    * JavaScript uses prototype-based inheritance instead of class-based inheritance
    * When a property or method cannot be found on an object, it looks up the next prototype in the chain
    * Root of this chain is the `Object` prototype which all objects inherit from

* **What is the difference between `setInterval()` and `setTimeout()`?**
  * Keywords, concepts, or topics that should be in the response:
    * `setInterval()` runs a callback function continuously after a set interval
    * `setTimeout()` runs a callback function once after a set length of time
    * How would you stop a `setInterval()` once it has been set? Ans: you can assign the result to a variable and then call `clearInterval(variable)`
  * Possible follow-up questions:
    * Advanced: How do they work with regards to the callback queue?

* **How would you handle an error in JS?**
  * Keywords, concepts, or topics that should be in the response:
    * Use the `try/catch` blocks as in other languages
    * There is also a `finally` block

* **What are some characteristics of the functional programming paradigms**
  * Keywords, concepts, or topics that should be in the response:
    * Functions treated as first-class objects
    * Functions can be stored as variables and passed around as parameters
    * Focus on pure functions with no side effects
    * Minimize or eliminate global state that needs to be changed
  * Possible follow-up questions
    * What does it mean for a function to have no side effects? (what is a pure function?)

* **What are the advantages/disadvantages to using a functional approach? (as opposed to OOP)**
  * Keywords, concepts, or topics that should be in the response:
    * Advantages: intuitive method chaining, reusability and composition of functions
    * Disadvantages: more difficult debugging process

* **What's the difference between a normal function declaration and an arrow function?**
  * Keywords, concepts, or topics that should be in the response:
    * Normal functions have their own lexical scope and therefore have bindings to `this`, `arguments`, and `super`
    * Arrow functions inherit the scope they are declared within, and the above keywords are NOT bound to it
    * Arrow functions are not suitable for `call`, `bind`, and `apply` methods because they rely on establishing a scope
    * Arrow functions cannot be used as constructors or use `yield` within it

* **Does JS have classes? How does this relate to Prototypal inheritance in JS? What is the difference between a Prototype and a Class?**
  * Keywords, concepts, or topics that should be in the response:
    * Yes, classes introduced with ES6
    * Classes are syntactic sugar that is converted to prototypal inheritance under the hood

* **How would you set default values for parameters to a function?**
  * Keywords, concepts, or topics that should be in the response:
    * Example: `function foo(a, b = 'hello') {console.log(a+b)}`

* **What is a generator function?**
  * Keywords, concepts, or topics that should be in the response:
    * A generator returns an object on which we can call `next()`
  * Possible follow-up questions:
    * What is the point of the `yield` keyword?
      * Every time a generator encounters a `yield`, it will return the value specified after it

* **What is a `Symbol`?**
  * Keywords, concepts, or topics that should be in the response:
    * A primitive type introduced in ES6
    * Unique identifiers
    * Can be created using the factory function `Symbol()`
  * Possible follow-up questions:
    * What is the advantage of using `Symbol`?
      * Every symbol is unique, so every symbol has its own identity
    * What are some use cases of `Symbol`?
      * Symbols as keys of non-public properties
      * For private properties with string keys, accidental name clashes can become a problem, therefore, symbols are a good choice

* **When writing a unit test, what is the order of the following: "Act", "Assert", "Arrange"? Explain these terms.**
  * Order: Arrange, Act, Assert
  * Arrange: Setup the test by initializing objects, preparing inputs, and configuring the environment.
  * Act: Execute the specific behavior or action that you want to test.
  * Assert: Verify that the outcome of the action matches the expected result or state

* **What does "code coverage" as a metric mean?**
  * How much of the code has been tested with unit tests
  * Could be measured by lines of code tested, or how many of branches of control flow have been tested

* **What are some Jest assertions?**
  * `expect().toBe()`
  * `.toEqual()`
  * `.toBeGreaterThan()` / `.toBeLessThan()`
