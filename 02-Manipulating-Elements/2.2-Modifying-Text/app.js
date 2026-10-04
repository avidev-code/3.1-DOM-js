const title = document.querySelector("#app-title");
console.dir(title); // returns the element with the specified ID, we can save this value in a variable to do something later.

title.textContent = "Hello World!"; // modifies the text content of the element with the specified ID.

title.innerHTML = "<span>Hello World!</span>"; // modifies the HTML content of the element with the specified ID.

// The difference between textContent and innerHTML is that textContent sets or returns the text content of the specified node, while innerHTML sets or returns the HTML content of the specified node. If you want to modify the text content of an element, use textContent. If you want to modify the HTML content of an element, use innerHTML.