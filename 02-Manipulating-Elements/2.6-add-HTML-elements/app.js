const listArea = document.getElementById("listArea");
listArea.innerHTML += "<li>Item 5</li>";
// Add another item to the list using innerHTML. The problem with this approach is that it re-renders the entire list, which can be inefficient for large lists.

// The best way to do add an element is to use insertAdjacentHTML.
listArea.insertAdjacentHTML('beforeend', '<li>Item 6</li>');