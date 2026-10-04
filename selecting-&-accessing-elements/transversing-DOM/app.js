const parent = document.getElementById('parent');
console.log(parent);

const children = parent.children; // returns a live HTMLCollection of the child elements of the specified parent element.
console.log(children);

const firstChild = parent.firstElementChild; // returns the first child element of the specified parent element.
console.log(firstChild);

const lastChild = parent.lastElementChild; // returns the last child element of the specified parent element.
console.log(lastChild);

const nextSibling = firstChild.nextElementSibling; // returns the next sibling element of the specified element.
console.log(nextSibling);

const previousSibling = lastChild.previousElementSibling; // returns the previous sibling element of the specified element.
console.log(previousSibling);

const parentOfFirstChild = firstChild.parentElement;  // returns the parent element of the specified child element.
console.log(parentOfFirstChild);

const parentOfLastChild = lastChild.parentElement; // returns the parent element of the specified child element.
console.log(parentOfLastChild);

// Difference between parentElement and parentNode
// parentElement returns the parent element of the specified element, while parentNode returns the parent node of the specified node. In most cases, these two properties will return the same value, but there are some cases where they may differ. For example, if the specified element is a text node, parentElement will return null, while parentNode will return the parent element of the text node.


// const parent = document.getElementById("parent");
// console.log(parent);

// const children = parent.children;
// console.log(children);

// const firstChild = parent.firstElementChild;

// console.log(firstChild);

// const lastChild = parent.lastElementChild;
// console.log(lastChild);

// const previousSibling = parent.previousElementSibling;
// console.log(previousSibling);

// const nextSibling = parent.nextElementSibling;
// console.log(nextSibling);

// children; // live HTMLCollection
// childNodes; // live NodeList
// firstChild; // live NodeList
// firstElementChild; // non-live HTMLCollection
// lastChild; // live NodeList
// lastElementChild; // non-live HTMLCollection
// previousSibling; // live NodeList
// previousElementSibling; // non-live HTMLCollection
// nextSibling; // live NodeList
// nextElementSibling; // non-live HTMLCollection
// parentNode; // live NodeList
// parentElement; // non-live HTMLCollection
// closest(selector); // este último es el más utilizado

const children2 = document.querySelector("li");
console.log(children2);

const parent2 = children2.parentNode;
console.log(parent2);

const grandParent = children2.parentElement;
console.log(grandParent);

const grandGrandParent = children2.closest("menu"); // este último es el más utilizado
console.log(grandGrandParent);