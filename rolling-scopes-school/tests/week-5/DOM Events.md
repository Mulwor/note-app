1. What are the advantages of using the addEventListener() method? (мультивыбор)

Handler can be removed at any time

One method call can set unlimited number of handlers to one event

Event handler's behavior can be configured (e.g. it can be called once)

Adding an unlimited number of handlers to one event
2. What is the maximum number of arguments that the addEventListener() method can accept when used on an EventTarget?

0

1

2

3

4

5
3. Identify the correct touch event types supported in JavaScript. (мультивыбор)

touchenter

touchstart

touchmove

touchleave

touchend

touchcancel
4. What is an 'event' object in an event handler?

Object where the event occurred

Operational System Events

Global scope object which is passed as an argument to the event handler

There is no 'event' object in the event handler
5. What is an event bubbling?

Propagation of the event from a child element to its parent elements

Propagation of the event from a trigger element to its sibling elements

Propagation of the event from a parent element to its child element

No propagation

A party for events where they all get to bubble
6. TouchEvent interface is a UIEvent which is dispatched when the state of contacts with a touch-sensitive surface changes. Is this statement correct?

Yes

No

Partly correct, it's not UIEvent

Partly correct, it follows not the state of contacts
7. What properties are specific to a KeyboardEvent object? (мультивыбор)

altKey

shiftKey

keyLocale

key 
8. Which of the following are valid focus event types in JavaScript? (мультивыбор)

blur

reblur

unfocus

focus
9. Which method is most recommended for adding an event handler in JavaScript?

Use an HTML event handler attribute (inline)

Use a DOM property

Use a DOM node

Use a special DOM method addEventListener()
10. What is an event delegation?

Consistent list of invoked events

When an event handler is put only on a parent element and this element's child elements use this handler when the event happens

When an event handler is put only on a child element and this element's parent elements use this handler when the event happens

When an event handler is put only on one element and this element's sibling elements use this handler when the event happens

A formal meeting where events decide their leader
11. Which of the following is a property of the DragEvent object?

drag

dataTransfer

dragend

dragenter
12. What does the 'target' property of an event object signify?

It reference to the deepest element to which the event handler has been attached

It reference to the deepest element onto which the event was dispatched

It stores this event handler

None of above
13. What properties does an event object have? (мультивыбор)

target

currentTarget

bubble

eventPhase

type
14. What is an event capturing?

Propagation of the event from a child element to its parent elements

Propagation of the event from a trigger element to its sibling elements

Propagation of the event from a parent element to its child element

No propagation

When events go on a secret mission
15. event.eventPhase property returns a number. What does it mean?

If this event can bubble

How many phases this event has

Which phase of the event flow is currently being evaluated

Number of event handlers
16. Which sets of arguments are valid for the addEventListener() method? (мультивыбор)

type, listener, useCapture

only listener

type, listener

only options

only type

type, listener, options
17. What does the expression 'elem.target !== elem.currentTarget' typically evaluate to?

true

false

It can be both - true or false

Always returns true because it's very confident
18. What methods are available on a JavaScript event object? (мультивыбор)

preventPropagation

preventDefault

stopPropagation

stopDefault
19. What can be set as an event handler?

Function

Object

Function and object

None of the above
20. What methods can stop bubbling? (мультивыбор)

elem.removeEventListener()

event.stopPropagation()

elem.clearEventListener()

event.stopImmediatePropagation()

event.eventPhase()
21. What does preventDefault() method do?

Creates new event

Stop element's bubbling / capturing

Prevent element's default behavior

Prevent element's bubbling
22. What does a construсtor 'new Event' do?

Creates an event object

Creates an event handler

Creates an element for the event passed as argument
23. Is it true that all events in JavaScript bubble by default?

Yes

No

Yes, they love to attend parties
24. What events related to focus does FocusEvent interface represent? (мультивыбор)

focus

reblur

focusin

unfocus

blur

focusout
25. How to remove an event handler which is added by an addEventListener()?

eventListener = null

clearEventListener

removeEventListener

deleteEventListener
26. What Mouse Event Types exist? (мультивыбор)

click

contextmenu

dblclick

mouseenter

rightClick

mouseup

mouseCenter
27. What Drag Event Types exist? (мультивыбор)

drag

dragend

dragenter

dragcenter

dragover

dragleave

dragstart

drop
28. Which properties are part of the MouseEvent object? (мультивыбор)

altKey

enterKey

button

clientX

clientZ

screenX

screenY
29. What are the different ways to add an event handler in JavaScript? (мультивыбор)

HTML event handler attribute (inline)

DOM property

DOM node

Special DOM method addEventListener()
30. Сan you differentiate between a real DOM event and a synthetic event created programmatically?

Yes, by checking event.defaultEvent

Yes, by calling DOM method isDefaultEvent()

Yes, by checking event.isTrusted

No

31. What properties does TouchEvent have? (мультивыбор)
 
touch

touches

touchcancel

targetTouches

touchleave

changedTouches
