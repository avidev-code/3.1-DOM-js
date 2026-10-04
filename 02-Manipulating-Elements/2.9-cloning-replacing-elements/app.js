// Cloning and Replacing elements
// In order to select the elements in the DOM we need to remember to first select them.
// There's a method called cloneNode() that allows us to clone an element. It takes a boolean parameter that indicates whether we want to clone the element and its children (true) or just the element itself (false).

const contentArea = document.querySelector('#contentArea');
const originalP = contentArea.querySelector('p'); //you can also use document.getElementById('content-area') to select the content area

const clonedP = originalP.cloneNode(true); // Cloning the original paragraph with its children
clonedP.textContent = 'This is the cloned paragraph.'; // Changing the text content of the cloned paragraph

contentArea.append(clonedP); // Appending the cloned paragraph to the content area.

clonedP.textContent = 'This is the cloned paragraph with updated text content.'; // Updating the text content of the cloned paragraph

// We can also replace an element with another using the replaceWith() method. This method takes two parameters: the new element and the old element that we want to replace.

const list = document.querySelector('#listArea');
const itemToReplace = listArea.children[2]; // Selecting the second item in the list to replace
itemToReplace.replaceWith(clonedP); // Replacing the second item in the list with the cloned paragraph