// We have 2 options to create or eliminate elements in the DOM: cloning and replacing elements.
// Creating elements is useful when we want to create elements in the DOM.
// HTML strings are a way to create new elements in the DOM by using a string of HTML code. This can be useful when we want to create new elements dynamically, but it can also be less efficient than cloning or replacing elements, especially for larger or more complex elements.

// When we use HTML string, we also have 2 ways to create new elements in the DOM:
// 1. Using innerHTML: This method allows us to set the HTML content of an element, which can include new elements. However, it can be less efficient and may lead to security risks if not used carefully.
// 2. Using insertAdjacentHTML: This method allows us to insert new elements into the DOM at a specific position relative to an existing element. It is more efficient than innerHTML and can be safer if used correctly.

const contentArea = document.getElementById('contentArea');
contentArea.innerHTML = '<p>This is a new paragraph created using (innerHTML).</p>'; // Using innerHTML to create a new paragraph element.

contentArea.insertAdjacentHTML('beforeend', '<p>This is another new paragraph created using (insertAdjacentHTML - beforeend).</p>'); // Using insertAdjacentHTML to create another new paragraph element.

contentArea.insertAdjacentHTML('afterbegin', '<p>This is a new paragraph inserted at the beginning using (insertAdjacentHTML - afterbegin).</p>'); // Using insertAdjacentHTML to insert a new paragraph at the beginning of the content area.

contentArea.insertAdjacentHTML('beforebegin', '<p>This is a new paragraph inserted before the content area using (insertAdjacentHTML - beforebegin).</p>'); // Using insertAdjacentHTML to insert a new paragraph before the content area.

contentArea.insertAdjacentHTML('afterend', '<p>This is a new paragraph inserted after the content area using (insertAdjacentHTML - afterend).</p>'); // Using insertAdjacentHTML to insert a new paragraph after the content area.

// Cloning elements is another way to create new elements in the DOM. This method allows us to create a copy of an existing element, which can be useful when we want to create multiple instances of the same element. We can use the cloneNode() method to clone an element, and we can specify whether we want to clone the element's children as well.

// Replacing elements is a way to remove an existing element from the DOM and replace it with a new one. This can be useful when we want to update the content of an element or change its structure. We can use the replaceChild() method to replace an existing child element with a new one.