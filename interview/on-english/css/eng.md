## CSS (Cascading Style Sheets)

<details>
<summary>What is CSS?</summary>

CSS (Cascading Style Sheet) is used for styling HTML documents by using selectors.

</details>

<details>
<summary>How we can style our html-document? / What are the types of CSS? - Inline, internal, and external CSS</summary>

- Bad practice, but inline style.
- Also, we can use the `<style>` tag inside `<head>` for internal CSS.
- With different UI libraries — MUI, Tailwind, Chakra UI, CSS-in-JS, and others.
- And we can create a .css file and write all styles there.

</details>

<details>
<summary>How do you import CSS in another file?</summary>

We can use @import url("style.css")

</details>

<details>
<summary>What is the difference between id and class in CSS?</summary>

1. id has higher specificity — 100, while class has 10.
2. id must be unique on the page, class can be reused many times.
3. id is usually used for JavaScript logic (like getElementById), while class is used for styling.

</details>

<details>
<summary>How do you center a div horizontally?</summary>

We can use:

1. Display flex with justify content and align-items center
2. Display table with margin 0 auto;
3. Use just margin 0 auto;
4. Position absolute with left 0, right 0 and margin 0 auto
5. Display grid with justify-items: center
6. Display table with margin 0 auto

If we have inline block - we can use text-aline center

</details>

<details>
<summary>What's the difference between inline, block, and inline block</summary>

- Block starts on a new line, inline continues on the same line.
- Block works with width and height, while inline doesn't.
- Inline-block combines both — it works with width and height like block, but doesn't start on a new line.

Block: div, img, h1-h6, ul, li
Inline: span, a, em, strong, audio
Inline-block: button, input, select

</details>

<details>
<summary>What display do you know?</summary>

Display:

- none;
- block;
- inline;
- block-inline;
- flex;
- grid;
- table;
- list-items

and global display:

- initial
- inherit
- unset
- revert
</details>

<details>
<summary>Tell me about global display</summary>

- initial - sets default value
- inherit - takes the style from the parent element
- unset - inherit if possible, otherwise initial
- revert - removes the style and reverts to the browser's default style (user-agent stylesheet).

</details>

<details>
<summary> How do you apply styles to all elements of a page?</summary>

We can use the universal selector (star)

</details>

<details>
<summary>How do you make a responsive image in css</summary>

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

</details>

<details>
<summary>What are pseudo-classes, pseudo-elements in CSS?</summary>

Pseudo-class works for a state (hover, focus, disabled). Pseudo-element works for a part of an element (first letter, first line, or before/after to add content)

</details>

<details>
<summary>What's specificity in CSS?</summary>

Specificity is a weight system that defines which style will be applied. For example, we have inline styles with a weight of 1000, and we can override them using !important; or we have an id with a weight of 100, a classname with a weight of 10, or a selector with a weight of 1.

If the specificity is higher, then that style is used.

And I would also add that if the specificity is the same, the style that we wrote last will be applied.

</details>

<details>
<summary>What's the box model in CSS?</summary>

The box model is the structure of every HTML element. It has content, padding (inside), border, and margin (outside). By default, width ignores padding and border, and to solve the problem and calculate correctly we can use box-sizing: border-box.

</details>

<details>
<summary> What's the difference between visibility: hidden and display: none;</summary>

If we speak about display: none, it removes the element completely and its space. But if we use visibility: hidden, we just don't see it, but we notice that there is empty space.

</details>

<details>
<summary>What are media-queries in CSS?</summary>

Media queries help us to create responsive design for different screen sizes - laptop, mobile phone and another

</details>

<details>
<summary>What are variables in CSS?</summary>

Variables are a feature of CSS that helps to write cleaner code and makes it easier to work with designers. For example, when they decide to change the background color on every page, we don't need to go to every component — we just change the variable in one place.

</details>

<details>
<summary>What's position - do you know?</summary>

By default, we've `static` position - and it doesn't work with top, right, bottom and left

Another one is `relative` — it changes its place from where the element is located. If we want to move it, we use top, right, bottom, or left.

Another one is `fixed` - when we want to fixed some element and when we scroll, it moves with us.

Another one is `sticky` - it looks like fixed but it save its position to the top of the viewport only inside its parent container

Another one is `absolute` - removes the element from the normal flow. It moves relative to the nearest positioned parent, If there is no positioned parent, it goes to the browser window.

</details>

<details>
<summary>What's z-index?</summary>

So first of all it works with any position beside static. So it lets us put one content on top of another.

</details>

<details>
<summary>What's difference between em/rem and px</summary>

`px` — is an absolute and fixed value.
`em` — is relative to the parent element.
`rem` — is relative to the root `<html>` element. If we have 32px in the root, then 1rem equals 32px.

</details>

<details>
<summary>What's the calc() function in CSS?</summary>

calc() lets us do make in CSS like 100%-50px. It making layout more flexible

</details>
