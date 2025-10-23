
## Required Questions

[Back to top](#unit)

* **What is HTML?**
  * Keywords, concepts, or topics that should be in the response:
    * HTML stands for Hypertext Markup Language and consists of various tags to describe the content of a document - utilized as the basis for all web pages, along with CSS and JavaScript

* **What is the structure of an HTML document? List some tags. What is `<head>` used for? `<body>`?**
  * Keywords, concepts, or topics that should be in the response:
    * Start with the doctype declaration, then `<html>`, then `<head>` and `<body>`. The head contains the metadata for the page, while the body contains the content that is rendered to the screen. Other tags: div, span, p, ul, ol, li, strong, em, table

* **How/where would you add an external CSS style sheet to an HTML file?**
  * Keywords, concepts, or topics that should be in the response:
    * You would use the link tag in the Head of the HTML file and specify the path to the CSS file.
    * `<link rel="stylesheet" href="mystyle.css">`
  * Possible follow-up questions:
    * **How would you do this for an external JavaScript file?**
      * You would use the script tag at the bottom of the body in the HTML document
      * `<script src="myscripts.js"></script>`

* **What is the tag for an ordered list? Unordered list?**
  * Keywords, concepts, or topics that should be in the response:
    * ordered list: ol, unordered list: ul. Both use li - list items

* **Write the HTML markup for a table.**
  * Keywords, concepts, or topics that should be in the response:

    ```html
    <table>
      <caption>optional</caption>
      <thead>
        <tr>
        <td>Heading 1</td><td>Heading 2</td>
      </tr>
      </thead>
      <tr>
        <td>Cell 1</td><td>Cell 2</td>
      </tr>
      <tbody>
      </tbody>
    </table>
    ```

* **What is an inline element in HTML?**
  * Keywords, concepts, or topics that should be in the response:
    * It does not start on a new line.
    * Which only takes up as much width as necessary.
      * Eg: a `<span>` element inside a paragraph.

* **What is an block element in HTML?**
  * Keywords, concepts, or topics that should be in the response:
    * It always starts on a new line.
    * Which always takes up the full width available.
    * Eg: `<p>` and `<div>`.
  * Possible follow-up questions:
    * **Explain about `<p>` and `<div>` tag.**
      * The `<p>` element defines a paragraph in an HTML document.
      * The `<div>` element defines a division or a section in an HTML document.

* **What is CSS? what are the different ways of styling an HTML file?**
  * Keywords, concepts, or topics that should be in the response:
    * CSS stands for Cascading Style Sheets - it is a language for styling HTML documents by specifying certain rules for layout and display in key/value pairs. There are 3 ways of styling an HTML file:
      * (1) inline - in the `style` attribute
      * (2) internal stylesheet - in the `<style>` tag in the `<head>`
      * (3) external stylesheet - using external `.css` file, use `<link>` in the `<head>`
  * Possible follow-up questions:
    * **Which of the above approaches is generally a best practice? why?**
      * External stylesheet is best practice due to separation of concerns, reusability, modularity

* **Describe the CSS box model.**
  * Keywords, concepts, or topics that should be in the response:
    * The box model consists of margin (outermost box), then border, then padding, then content (innermost). All box sizes / formatting can be styled with CSS

* **Which way has highest priority when styles cascade: inline, internal, and external.**
  * Keywords, concepts, or topics that should be in the response:
    * Inline has highest priority, then internal/external depending on order. Cascading rules are determined by (1) importance (`!important` flag), (2) specificity of selector (inline has no selector, highest specificity), then (3) source order.

* **Syntax for styling an element? What is a class and how to style them? What is an id? how to style? difference?**

  ```css
    div { property: value}
    .class { property: value}
    #id { property: value}
  ```

  * Possible follow-up questions:
    * **What's the difference between an ID and class in CSS?**
      * *ID:* More specific, should only be used once on one element, should be unique
      * *Class:* More general, used to lump multiple elements together. Helps with code reusability.

* **What is flex block in CSS?**
  * Keywords, concepts, or topics that should be in the response:
    * Also referred to as flexbox
    * It is a one-dimensional layout model for distributing space between items and includes numerous alignment capabilities.

* **Explain about Grid in CSS.**
  * Keywords, concepts, or topics that should be in the response:
    * It was designed for two-dimensional layout - rows, and columns at the same time.

## Preferred Questions

[Back to top](#unit)

* **Do all tags come in a pair? What are the other things inside tags called? list some.**
  * Keywords, concepts, or topics that should be in the response:
    * No - tags either have a closing tag or are self-closing (`<tag />`).
    * Attributes are contained within tags - examples: id, class, style, height, width, etc

* **What are some tags you would use in a form?**
  * Keywords, concepts, or topics that should be in the response:
    * Form tags: `<form>`, `<input>`, `<label>`, `<textarea>`, `<button>`, `<select>`, `<option>`

* **What are some attributes you can use on the form tag and input elements?**
  * Keywords, concepts, or topics that should be in the response:
    * action, target, name, method, value, placeholder
required

* **Construct a form with an input text field and a submit button**
  * Keywords, concepts, or topics that should be in the response:

      ```html
      <form>
        <input type="text" />
        <input type="submit" value="Submit Me">
        <!-- OR... --->
        <button>Submit Me</button>
      </form>
      ```

* **What is the syntax for a comment in HTML?**
  * Keywords, concepts, or topics that should be in the response:
    * `<!-- comments go in here -->`

## Stretch Questions

[Back to top](#unit)

* **What are some HTML5 tags? Why were HTML5 tags introduced?**
  * Keywords, concepts, or topics that should be in the response:
    * HTML5 introduced semantic tags to more accurately reflect the content of the tags. Examples: `<strong>` instead of `<b>`, `<em>` instead of `<i>`, `<nav>`, `<header>`, `<footer>`, `<section>`, `<article>`, and `<aside>` instead of reusing `<div>` tags everywhere

* **How would you write a media query?**
      * ```
          @media only screen and (max-width: 600px) {
            body {
              background-color: red;
              font-family: Arial;
            }
          }
        ```
  * **What does the above media query do?**
    * It changes the background color of the \"\<body>" element to "red" and the font style to "Arial" when the browser window is 600px wide or less.

* **What is the doctype?**
  * Keywords, concepts, or topics that should be in the response:
    * First tag in the document - defines what type of file it is - whether html 4 or 5, etc

* **Explain the difference between HTML elements and tags.**
  * Keywords, concepts, or topics that should be in the response:
    * An HTML tag - indication to a web browser of how a web page should displayed.
    * HTML element - individual component of HTML, which are created using HTML tags.

* **What do you know about HTML attributes?**
  * Keywords, concepts, or topics that should be in the response:
    * All HTML elements can have attributes
    * It provide additional information about elements and always specified in the start tag
    * Which comes in name/value pairs like: name="value"

* **How can you make web pages responsive using CSS?**
  * Keywords, concepts, or topics that should be in the response:
    * You can use *Media Queries* which allow you to customize the presentation of your web pages for a specific range of devices like mobile phones, tablets, desktops, etc. without any change in markups. It composed of a media type and expressions that check for the conditions of particular media features. It is a logical expression that is either true or false.

* **What is a CSS Selector?**
  * Keywords, concepts, or topics that should be in the response:
    * Used to "find" or “select” the HTML elements you want to style.
    * We can be divided into five categories:
      * Simple selectors - select elements based on name, id, class
      * Combinator selectors - select elements based on a specific relationship between them
      * Pseudo-class selectors - select elements based on a certain state
      * Pseudo-elements selectors - select and style a part of an element
      * Attribute selectors - select elements based on an attribute or attribute value

* **What if I want to select child elements, What syntax is that?**
  * Keywords, concepts, or topics that should be in the response:
    * use direct descendant selector (`>`) or space for any level nested element

* **Can I select multiple elements at once? How?**
  * Keywords, concepts, or topics that should be in the response:
    * yes, with a comma

* **What would you write in CSS to make every paragraph in the HTML have blue font?**

    ```css
      p {  
      color: blue;  
      }      
    ```

* **What is a psuedo-class? What is syntax for selecting that?**
  * Keywords, concepts, or topics that should be in the response:
    * psuedo-class selects an element in a certain state - for example, when hovered over. Use colon (`:psuedoselector`) syntax

* **What is Bootstrap?**
  * Keywords, concepts, or topics that should be in the response:
    * Bootstrap is a CSS framework with pre-written CSS rules to easily style your page and incorporate responsive design seamlessly. Contains various utilities and components for making a great UI

* **Describe the Bootstrap grid system**
  * Keywords, concepts, or topics that should be in the response:
    * The Bootstrap grid is divided into 12 columns. You wrap the columns in a `.row` which is in a `.container` or `.container-flex`. The columns are responsive - there are classes for different screen sizes which collapse on smaller windows
