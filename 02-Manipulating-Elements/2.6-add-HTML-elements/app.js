// Steps to create a new element and add it to the DOM
// 1. Create a new element using document.createElement
const newPelement = document.createElement("p");
newPelement.textContent = "I was created with (createElement)";
// 2. Select the parent element where you want to add the new element
const contentArea = document.getElementById("contentArea");
// 3. Append the new element to the parent element
contentArea.appendChild(newPelement);

const newItem = document.createElement("li");
newItem.textContent = "Item 4";
const listArea = document.getElementById("listArea");
listArea.prepend(newItem); // Add a new item to the beginning of the list using prepend
listArea.before(newItem); // Add a new item before the list using before
listArea.after(newItem); // Add a new item after the list using after

// Add another item to the list using innerHTML. The problem with this approach is that it re-renders the entire list, which can be inefficient for large lists.
listArea.innerHTML += "<li>Item 5</li>";

// The best way to do add an element is to use insertAdjacentHTML.
listArea.insertAdjacentHTML('beforeend', '<li>Item 6</li>');