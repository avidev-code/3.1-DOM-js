// Remove method removes a child node from the DOM and returns the removed node.
// removeChild method removes a child node from the DOM and returns the removed node.

const firstItem = document.querySelector("li");
firstItem.remove(); // Removes the first <li> element from the DOM

const list = document.querySelector("ul");
const secondItem = list.querySelector("li:nth-child(2)");
list.removeChild(list.firstElementChild); // Removes the first <li> element from the DOM
list.removeChild(secondItem); // Removes the second <li> element from the DOM