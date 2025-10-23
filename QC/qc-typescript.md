
## Required Questions

[Back to top](#unit)

* What are some features that TypeScript has that JavaScript doesn't have?
  * Keywords, concepts, or topics that should be in the response:
    * Strong typing - type does not coerce automatically
    * Static typing - you can set the type for variables/functions
      * `let variableName: string = "this is a string"`
    * Access Modifiers - easier encapsulation compared to JavaScript closures
      * public - accessed from anywhere in and outside a class without restriction
      * private - only accessible inside the class it's declared in
      * protected - can be accessed in the class and from children of that class
    * Interfaces - allows for more elaborate abstraction
    * Enums - creating an object consisting only of constants
  * Possible follow-up questions
    * How have you used these new features so far in your own development?
    * How do you set up the return type for a function?
    * When do you not need to use let/var/const when declaring a variable?

* How does TypeScript relate to JavaScript? What are the major benefits of using it over JavaScript?
  * Keywords, concepts, or topics that should be in the response:
    * TypeScript is a superset of JavaScript
    * All JavaScript syntax is valid TypeScript syntax
    * You transpile Typescript into JavaScript
  * Possible follow-up questions
    * Can TypeScript run in the browser?
    * How can you transpile TypeScript into JavaScript

* List some of the data types of TypeScript.
  * Keywords, concepts, or topics that should be in the response:
    * Not in JavaScript:
      * Tuple
      * Enum
      * Unknown
      * Any
      * Void
      * Never
    * Also in JavaScript:
      * Boolean
      * Number
      * String
      * Array
      * Null
      * Undefined
      * Object
      * Symbol
  * Possible follow-up questions
    * Why would you ever use the Void data type?
    * Which data type allows a TypeScript variable to act like a JavaScript variable?
    * What's the difference between an Array and a Tuple?

* **Compare and contrast TypeScript with JavaScript. What are the key differences, and why might someone choose TypeScript over JavaScript?**
  * Keywords, concepts, or topics that should be in the response:
    * Type safety and static typing in TypeScript
    * Superset of JavaScript
    * Transpilation to JavaScript
    * Tooling and IDE support
    * Better refactoring and documentation

* **What are some of the basic types available in TypeScript? Give examples.**
  * Keywords, concepts, or topics that should be in the response:
    * string, number, boolean, void, null, undefined, any, unknown, never, object
    * Type annotations with : type syntax

* **How do you implement user-defined types in TypeScript?**
  * Keywords, concepts, or topics that should be in the response:
    * interface and type
    * Example `using interface Person { name: string; age: number }`
    * Use in function parameters or object declarations

* **Describe the process of transpiling and running TypeScript code.**
  * Keywords, concepts, or topics that should be in the response:
    * .ts files compiled using the TypeScript compiler (tsc)
    * Output is plain JavaScript
    * Running compiled JS with Node.js or in the browser

## Preferred Questions

[Back to top](#unit)

* **How can you write and execute TypeScript without using frameworks like Angular or React?**
  * Keywords, concepts, or topics that should be in the response:
    * Writing .ts files in a simple directory
    * Using tsc or setting up tsconfig.json
    * Including compiled .js in HTML or running with Node.js

* **What is the purpose of the strict flag in tsconfig.json, and what does it enable?**
  * Keywords, concepts, or topics that should be in the response:
    * Enables all strict type-checking options
    * Includes strictNullChecks, noImplicitAny, etc.
    * Helps catch more bugs at compile time

* **Can you demonstrate how union types work in TypeScript? Why are they useful?**
  * Keywords, concepts, or topics that should be in the response:
    * Syntax: string | number
    * Example: `function padLeft(value: string, padding: string | number)`
    * Allowing multiple accepted types in one variable or parameter

* **What are type guards in TypeScript? How do you implement them?**
  * Keywords, concepts, or topics that should be in the response:
    * typeof, instanceof, custom type predicates
    * Example: `if (typeof x === 'string') { ... }`
    * Narrowing down union types at runtime

* **What is a type alias in TypeScript? How is it different from an interface?**
  * Keywords, concepts, or topics that should be in the response:
    * type keyword
    * Aliasing unions, primitives, and more complex types
    * type StringOrNumber = string | number;
    * Interfaces can be extended and merged; aliases cannot

## Stretch Questions

[Back to top](#unit)

* **How do you configure the TypeScript compiler using tsconfig.json to suit different project needs?**
  * Keywords, concepts, or topics that should be in the response:
    * Common options: target, module, outDir, strict, include, exclude
    * Customizing compile behavior
    * Incremental builds with incremental: true

* **How do you use generic types in TypeScript? Provide an example.**
  * Keywords, concepts, or topics that should be in the response:
    * function `identity<T>(arg: T): T { return arg; }`
    * Code reusability with type safety
    * Generics in functions, classes, and interfaces
