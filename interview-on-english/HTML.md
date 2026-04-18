### HTML (HyperText Markup Language)

1. What is HTML and describe the basic structure of an HTML page?

HTML is a markup language for creating web pages that are displayed in a browser. HTML consists of:

- `<!DOCTYPE html>` — this declares (означает) that we are using the latest version, HTML5.
- The `<head>` contains metadata about the document – the page title, links to fonts and stylesheets, scripts, and meta tags like viewport, description, charset, etc.
- `<body>` — contains (содержит) all the markup (разметку) of the HTML document. This markup is what gets displayed (отображается) in the browser.

2. Do HTML elements have their own default specific styles? /

Yes, every HTML element comes with default browser styles. For instance, <h1> is bold and larger, <p> has margins, <em> is italic. However, it is worth noting that font sizes and other default styles may vary across browsers. To avoid inconsistencies, developers often use either reset.css or normalize.css.

3. What is an inline style? Can it be overridden?

An inline style is a style inside the style attribute. It has high specificity and can only be overridden using !important in CSS

4. What is semantics? What semantic tags do you know?

<details>
<summary>HTML (HyperText Markup Language)</summary>

<details>
<summary>What is semantics? What semantic tags do you know?</summary>

In the past, all developers wrote everything using divs and spans. However, with the introduction of semantic tags in HTML5, a lot has changed. They help browsers and search engines analyze and understand the structure and content of our web application. They also improve accessibility. For example, for visually impaired users – screen readers read the text and emphasize certain words using tags like `strong` or `em`. Instead of an image, a screen reader reads the explanatory text inside the `img` tag's `alt` attribute.

</details>

<details>
<summary>What is the difference between the tags `strong` and `em` vs `b` and `i`?</summary>

Tags: `strong` and `b` (bold) – make text bold.
Tags: `em` (emphasis) and `i` (italic) – make text italic.

The main difference is that some are semantic (`strong`, `em`), while others are non-semantic (`b`, `i`). When a screen reader reads the `strong` and `em` tags, it places a slight emphasis on them, whereas it does not emphasize `b` and `i`.

</details>

<details>
<summary>How do you semantically correctly markup a navigation menu?</summary>

Using `nav > ul > li > a`.

</details>

<details>
<summary>How can you hide an element in the markup without using CSS or JS?</summary>

HTML has a special attribute for this: `hidden`. However, this is not the best practice because it affects the page via markup – the element is not visible not only to the user but also to screen readers. This attribute is global and can be added anywhere. Its CSS equivalent is `display: none`.

</details>

<details>
<summary>Which tag should be used to markup a button?</summary>

Regular button: `<button>Button</button>`

Form submission button, used as:
<button type="submit">Submit button</button>
<input type="submit" value="Submit">

<input type="button" value="Button"> ```</details><details> <summary>Types of lists in HTML?</summary>

<ul> – unordered list. Each list item is marked with a bullet: li;

<ol> – ordered list. Each list item is marked with a number: li;

Definition list – consists of the following tags: dl – main wrapper, dt – definition term, and dd – description.

</details><details> <summary>What are the tags tr, th, td used for?</summary>
These tags are used inside another tag: <td>, which is necessary for creating tables:

<tr> (table row) – container for creating a table row.
<th> (table-header) – used to create a single table cell as a header.
<td> (table-data) – table cell
<table>
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
   </tr>
</table>
<img src="./0_interview/assets/html/table.PNG" alt="table" /></details><details> <summary>Which tag uses the alt attribute and why is it needed?</summary>
It is written in the img tag. If an image does not display on the page, the explanatory text (the one we put in alt) will be shown instead.

This attribute is also useful for people with disabilities – when a screen reader reads the page, it will read out what is in the alt. (Additionally, using this attribute improves accessibility because various screen readers read it when browsing a web page. As a result, users with disabilities understand the context of the image.)

It is also required for validation.

</details><details> <summary>What is HTML markup validation? What types of HTML document checks do you know?</summary>
HTML markup validation is the process of checking code against W3C (World Wide Web Consortium) standards. W3C provides a platform where we can drag and drop our HTML code to have it checked for errors. Errors can be of different types – missing closing tags, missing alt attributes for images, etc.

</details><details> <summary>Why is it considered good practice to place the link tag for CSS styles inside the head tag, and to put the script tag for JS just before the closing body tag?</summary>
The link tag inside the site's header is specified in the HTML specification. If the stylesheet is in the head, the page loads faster.

HTML and CSS are loaded first on the initial page load, and they should be placed in the header. After everything is loaded, JavaScript is used. If we put JS at the very beginning, it will block the rendering of the HTML. Placing scripts at the bottom allows the browser to first parse and display all the HTML to the user, and then add logic to it.

</details><details> <summary>Difference between `script`, `script async`, and `script defer`? (Asynchronous and deferred)</summary>
Typically, browsers load script synchronously while parsing the document. Therefore, it is common to add scripts at the end of the document, before </body>, so they do not slow down page loading. However, using the defer and async attributes, we can explicitly control the order of loading and execution of scripts.

<script async src="..."> => the script executes in parallel with reading the HTML document. It will not wait for the web page to load and display. It is good for independent scripts, such as counters and ads, where the order of execution does not matter.

<script defer src="..."> – tells the browser that the script should be executed after the HTML has been fully loaded.

In practice, defer is used for scripts that need access to the entire DOM tree or when their execution order is important.

Additional question: If there are several consecutive scripts with the async attribute, will their loading and execution order be preserved? What about defer?

</details><details> <summary>What are data attributes used for?</summary>
They appeared in HTML5 and allow storing additional information directly inside HTML tags. For example: data-size. Also, using a specific syntax, they can be easily styled: [data-age="46"] {}

<img src='./assets/html/data-attribute.png' alt='Data attributes' /></details><details> <summary>What is the datalist element used for?</summary>
It is used to create a dropdown list that can be selected while typing in a text field. The datalist element with an id attribute must exactly match the list attribute of an input element.

<img src='./assets/html/datalist.png' alt="Datalist">
html
<label for="select-animal">Who is the strongest animal?:</label>
<input list="animals" id="select-animal" placeholder="type here... " />

<datalist id="animals">
  <option value="Elephant"></option>
  <option value="Tiger"></option>
  <option value="Zebra"></option>
  <option value="Lion"></option>
</datalist>
</details><details> <summary>Types of `input` elements in HTML? (List them and describe their features)</summary>
The input element is necessary for communication with users; it is designed to receive entered data. It has a type attribute.

input type = "text" – for entering letters, numbers, and special characters.
input type = "password" – used for passwords. Its feature: characters are displayed as asterisks.
input type = "email" – for entering the user's email.
input type = "number" – allows only numeric values, and when focused, it opens a keyboard containing only digits.
input type = "button" (and input type = "submit") – an input field that turns into a button; with "submit" you can even submit a form.
input type = "checkbox" / radio – replaces the input field with special elements: either a square with a checkmark or a circle with a dot.
input type = "date", month, day, datetime-local – intended for entering date and time.

</details>
```
