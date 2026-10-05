// we need to understand really well what is actually an event on Javascript. 
// An event is an action or occurrence that happens in the system you are programming, which the system tells you about so your code can respond to it as needed. Events can be user interactions, such as clicks, key presses, or mouse movements, or they can be system-generated events, such as when a page finishes loading or when an error occurs. an event is an object, that's it.

// We're going to create an event in the button to save the node.

const button = document.querySelector('button');
const buttonClicked = (event) => {
  console.log(event);
  console.log(event.target);
  console.log(event.target.id);
  console.log(event.target.textContent);
}
button.addEventListener('click', buttonClicked); // the output will be pointerEvent, which is a type of event that occurs when the user interacts with a pointing device, such as a mouse or a touch screen. It provides information about the interaction, such as the position of the pointer and the type of action performed (e.g., click, hover, drag).

// The event property "target" the object was the target.