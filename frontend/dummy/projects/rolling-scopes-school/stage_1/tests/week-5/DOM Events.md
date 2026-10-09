1. What are the advantages of using the addEventListener() method?

`a) Handler can be removed at any time`
b) One method call can set unlimited number of handlers to one event
`c) Event handler's behavior can be configured (e.g. it can be called once)`
`d) Adding an unlimited number of handlers to one event`

2. What is the maximum number of arguments that the addEventListener() method can accept when used on an EventTarget?

a) 0
b) 1
c) 2
`d) 3`
e) 4
f) 5

3. Identify the correct touch event types supported in JavaScript.

a) touchenter
`b) touchstart`
`c) touchmove`
d) touchleave
`e) touchend`
`f) touchcancel`

---
4. What is an 'event' object in an event handler?

a) Object where the event occurred
b) Operational System Events
`c) Global scope object which is passed as an argument to the event handler`
d) There is no 'event' object in the event handler

---
5. What is an event bubbling?

`a) Propagation of the event from a child element to its parent elements`
b) Propagation of the event from a trigger element to its sibling elements
c) Propagation of the event from a parent element to its child element
d) No propagation
e) A party for events where they all get to bubble

---
6. TouchEvent interface is a UIEvent which is dispatched when the state of contacts with a touch-sensitive surface changes. Is this statement correct?

a) Yes
b) No
c) Partly correct, it's not UIEvent
d) Partly correct, it follows not the state of contacts

---
7. What properties are specific to a KeyboardEvent object?

`a) altKey`
`b) shiftKey`
c) keyLocale
`d) key`

---
8. Which of the following are valid focus event types in JavaScript?

a) blur
b) reblur
c) unfocus
d) focus

---
9. Which method is most recommended for adding an event handler in JavaScript?

a) Use an HTML event handler attribute (inline)
b) Use a DOM property
c) Use a DOM node
`d) Use a special DOM method addEventListener()`

---
10. What is an event delegation?

a) Consistent list of invoked events
`b) When an event handler is put only on a parent element and this element's child elements use this handler when the event happens`
c) When an event handler is put only on a child element and this element's parent elements use this handler when the event happens
d) When an event handler is put only on one element and this element's sibling elements use this handler when the event happens
e) A formal meeting where events decide their leader

---
11. Which of the following is a property of the DragEvent object?

a) drag
`b) dataTransfer`
c) dragend
d) dragenter

---
12. What does the 'target' property of an event object signify?

a) It reference to the deepest element to which the event handler has been attached
`b) It reference to the deepest element onto which the event was dispatched`
c) It stores this event handler
d) None of above

---
13. What properties does an event object have?

`a) target`
`b) currentTarget`
c) bubble
`d) eventPhase`
`e) type`

---
14. What is an event capturing?

a) Propagation of the event from a child element to its parent elements
b) Propagation of the event from a trigger element to its sibling elements
`c) Propagation of the event from a parent element to its child element`
d) No propagation
e) When events go on a secret mission

---
15. event.eventPhase property returns a number. What does it mean?

a) If this event can bubble
b) How many phases this event has
`c) Which phase of the event flow is currently being evaluated`
d) Number of event handlers

---
16. Which sets of arguments are valid for the addEventListener() method?

`a) type, listener, useCapture`
b) only listener
`c) type, listener`
d) only options
e) only type
`f) type, listener, options`

---
17. What does the expression 'elem.target !== elem.currentTarget' typically evaluate to?

a) true
b) false
`c) It can be both - true or false`
d) Always returns true because it's very confident

---
18. What methods are available on a JavaScript event object?

a) preventPropagation
`b) preventDefault`
`c) stopPropagation`
d) stopDefault

---
19. What can be set as an event handler?

a) Function
b) Object
`c) Function and object`
d) None of the above

---
20. What methods can stop bubbling?

a) elem.removeEventListener()
`b) event.stopPropagation()`
c) elem.clearEventListener()
`d) event.stopImmediatePropagation()`
e) event.eventPhase()

---
21. What does preventDefault() method do?

a) Creates new event
b) Stop element's bubbling / capturing
`c) Prevent element's default behavior`
d) Prevent element's bubbling

---
22. What does a construсtor 'new Event' do?

`a) Creates an event object`
b) Creates an event handler
c) Creates an element for the event passed as argument

---
23. Is it true that all events in JavaScript bubble by default?

a) Yes
`b) No`
c) Yes, they love to attend parties

---
24. What events related to focus does FocusEvent interface represent?

`a) focus`
b) reblur
`c) focusin`
d) unfocus
`e) blur`
`f) focusout`

---
25. How to remove an event handler which is added by an addEventListener()?

a) eventListener = null
b) clearEventListener
`c) removeEventListener`
d) deleteEventListener

---
26. What Mouse Event Types exist?

`a) click`
`b) contextmenu`
`c) dblclick`
`d) mouseenter`
e) rightClick
`f) mouseup`
h) mouseCenter

---
27. What Drag Event Types exist?

`a) drag`
`b) dragend`
`c) dragenter`
d) dragcenter
`e) dragover`
`f) dragleave`
`h) dragstart`
`j) drop`

---
28. Which properties are part of the MouseEvent object?

`a) altKey`
b) enterKey
`c) button`
`d) clientX`
e) clientZ
`f) screenX`
`g) screenY`

---
29. What are the different ways to add an event handler in JavaScript?

`a) HTML event handler attribute (inline)`
`b) DOM property`
c) DOM node
`d) Special DOM method addEventListener()`

---
30. Сan you differentiate between a real DOM event and a synthetic event created programmatically?

a) Yes, by checking event.defaultEvent
b) Yes, by calling DOM method isDefaultEvent()
`c) Yes, by checking event.isTrusted`
d) No

---
31. What properties does TouchEvent have?
 
a) touch
`b) touches`
c) touchcancel
`d) targetTouches`
e) touchleave
`f) changedTouches`
