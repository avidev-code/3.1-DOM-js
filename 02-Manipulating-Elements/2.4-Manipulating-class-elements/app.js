// We have 3 ways to style elements in JavaScript:

// 1. Inline styles
// We can set the style of an element directly using the style property. This will override any styles defined in external stylesheets or <style> tags.

const title = document.querySelector('h1');
title.style.color = 'red';

// in the inspector you'll see that the style was added inline to the element, and it will override any styles defined in external stylesheets or <style> tags. if you don't manage well this way of styling, it can lead to a messy codebase and make it difficult to maintain and update styles in the future.

// 2. Selecting menu element.

const menu = document.querySelector('menu');
menu.style.backgroundColor = 'red';

// Changing the font size of the menu element
menu.style.fontSize = '24px';

// 3. Adding and removing classes
// We can add or remove classes from an element using the classList property. This allows us to apply styles defined in external stylesheets or <style> tags.

// Adding a className property to the menu element
menu.className = 'menu-items';

// If add a new class to the menu element, it will override any existing classes. If we want to add a new class without removing existing classes, we can use the classList property.

menu.classList.add('main-menu'); // This will add the new class to the element without overriding the existing class.

// Using classList - Manipulating element Classes in javascript (Class 9 of the Platzi course)

const button = document.querySelector("button");
button.addEventListener("click", () => {
  // Toggle the 'invisible' class on the button element
  menu.classList.toggle("invisible");
});