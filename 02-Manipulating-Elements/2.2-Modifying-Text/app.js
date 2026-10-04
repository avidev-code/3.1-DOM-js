const input = document.querySelector("input"); // selects the first <input> element in the document.

console.dir(input); // shows all the properties of the input element, including the value property.

//Changing the property of an element:
input.value = 'Apellido'; // changes the value of the input element to "Apellido"
console.log(input.value); // Apellido.