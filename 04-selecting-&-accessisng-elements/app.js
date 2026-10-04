// Querying the DOM

// Selecting elements
document.getElementById('app-title'); // returns the element with the specified ID, we can save this value in a variable to do something later.

document.querySelector('#app-title'); // returns the first element that matches the specified CSS selector.

document.querySelector('p'); // returns the first <p> element in the document.

document.getElementsByClassName('menu-items'); // returns a live HTMLCollection of elements with the specified class name.

document.getElementsByTagName('li'); // returns a live HTMLCollection of elements with the specified tag name.

document.querySelectorAll('.menu-items'); // returns a static NodeList of all elements that match the specified CSS selector.

// Difference between HTMLCollection and NodeList
// HTMLCollection is a live collection of elements, meaning that if the DOM changes, the collection will automatically update to reflect those changes. NodeList is a static collection of nodes, meaning that it does not automatically update when the DOM changes.

// If your code needs to work with a collection of elements that may change over time, you should use HTMLCollection. If your code only needs to work with a static collection of elements, you can use NodeList. In terms of velocity, using 'getElementsByClassName' or 'getElementsByTagName' is faster than 'querySelectorAll', but the difference is negligible for small collections of elements.