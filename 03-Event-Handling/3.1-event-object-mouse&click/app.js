const container = document.querySelector('.container');
const button = document.querySelector('button');

// Add an event listener to the button for the 'click' event

container.addEventListener('mouseover', () => {
  container.style.backgroundColor = 'lightblue';
});

container.addEventListener('mouseout', () => {
  container.style.backgroundColor = '';
});

// Add an event listener to the button for the 'click' event
//button.addEventListener('click', () => {
  // Log the event object to the console
//alert('Button clicked!');
//});

// If i want to remove events we need to save the function reference in a variable and then use that variable to remove the event listener. For example:

const buttonClickCallback = () => {
  alert('Button clicked!');
};

button.addEventListener('click', buttonClickCallback);

// To remove the event listener, you can use the following line of code:
// button.removeEventListener('click', buttonClickCallback);

setTimeout(() => {
  button.removeEventListener('click', buttonClickCallback);
  console.log('Button click event listener removed after 5 seconds');
}, 2000);