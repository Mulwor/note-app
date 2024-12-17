1. How to define a grid container? (мультивыбор)

a) display: grid;
b) display: flex-grid;
c) display: flex; flex-direction: grid;
d) Using the grid attribute
e) display: inline-grid

2. Is it possible to make an element a grid container using "display: inline-grid"?

a) Yes
b) No

3. Is the statement "grid-template-columns: 2rem 20% 150px 1fr;" correct?

a) Yes
b) No

4. In CSS grids, what does the value -1 typically represent when it comes to grid assignments?

a) -1 is not a valid value in CSS grids
b) -1 represents the first column or row in the grid
c) -1 is an alternate value for the very last column or row
d) -1 indicates a placeholder for empty grid cells

5. Which of the following statements about "fr" are correct? (мультивыбор)

a) fr is a shorthand for fraction
b) fr is a unit of measurement
c) fr represents a fraction of the available space in the grid container
d) The code "grid-template-columns: repeat(3, 1fr);" creates one column that will take up 3 widths of the parent
e) "grid-template-columns: repeat(3, 1fr);" and "grid-template-columns: 1fr 1fr 1fr;" are equivalent records

6. Which track sizes can you use to create a grid?

a) Fixed track sizes
b) Flexible track sizes
c) Both of them
d) None of them

7. By default, a grid container behaves like a...?

a) block element
b) inline element
c) inline-block element

8. Which property is used to define columns in a grid?

a) grid-column-gap
b) columns
c) grid-template-columns

9. What is the default behavior of an item in CSS Grid?

a) The item will automatically span the entire grid
b) The item will not be displayed in the grid
c) The item will span 1 track by default
d) The item will span as many columns or rows as there are in the grid

10. Which statement is correct if you need to create 3 columns with a width of 100px, 200px, 100px. The height of each row should be 100px.

a) grid-template-rows: 100px 200px 100px; grid-template-columns: 100px;
b) grid-template-columns: 100px 200px 100px; grid-auto-rows: 100px;
c) grid-template-columns: 1fr 3fr 1fr; grid-auto-rows: 1fr;
d) grid-template-columns: 1fr 3fr 1fr, 100px; grid-template-rows: 1fr, 200px;

11. Which properties can be used to specify gaps between grid cells? (мультивыбор)

a) grid-gap: <size>
b) template-gap: <size>
c) gap: <size>
d) grid-template-gap: <size>

12. Which syntax is used to name grid lines in CSS grid?

a) grid-template-columns: [start] 1fr [middle] 2fr [end];
b) grid-template-columns: start:: 1fr, middle:: 2fr, end:: 1fr;
c) grid-template-columns: 'start' 1fr 'middle' 2fr 'end';
d) grid-template-columns: <start> 1fr <middle> 2fr <end>;

13. How to assign a name to a grid area?

a) grid-area: hd;
b) grid-template-areas: "hd hd hd";
c) grid-area: hd 2 / 4 / 3 / 8;
d) none of the above

14. How to leave a grid cell empty?

a) grid-template-areas: "header - header header";
b) grid-template-areas: "header 0 header header";
c) grid-template-areas: "header . header header";
d) grid-template-areas: "header _ header header";

15. Can grid items occupy the same cell in CSS grids?

a) No, grid items are always in separate cells
b) Yes, grid items can occupy the same cell
c) Only if the parent grid has a specific setting
d) Only if the grid items have the same class

16. Which statements are correct if you need to create an item, which starts on the first grid column line, and spans two column tracks? (мультивыбор)

a) grid-column-start: 1; grid-column-end: 3;
b) grid-column: 1 / 3;
c) grid-column: 0 / 2;
d) grid-column: 1 - 3;
e) grid-column: 0 - 2;
f) grid-column-start: 0; grid-column-end: 2;
g) grid-column: 1 / span 2;

17. Which element becomes the parent when the "display: grid" property is applied?

a) Grid line
b) Grid container
c) Grid cell
d) Grid area
e) Grid track
f) Grid item

18. Can a grid item also act as a grid container?

a) Yes
b) No
c) Only if display:flex is used inside the element

19. What values can be assigned to the grid-area property? (мультивыбор)

a) Any number of grid lines defining the location of the grid area
b) Two grid lines to define the location of the grid area
c) Four grid lines to define the location of the grid area
d) Six grid lines to define the location of the grid area
e) A color code for the background color of the grid area

20. Is it possible to use both Flex and Grid technologies in the same project?

a) Yes
b) No