const form = document.getElementById('myForm');
const errors = document.getElementById('errors');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting

  // Clear previous errors
  errors.innerHTML = '';
  
  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const password = form.elements['password'].value;

  let messages = [];

  if (name.length === 0) {
    messages.push('Name is required');
  }
  if (email.length === 0) {
    messages.push('Email is required');
  }
  if (password.length < 6) {
    messages.push('Password must be at least 6 characters long');
  }

  if (messages.length > 0) {
    messages.forEach((message) => {
      const li = document.createElement('li');
      li.textContent = message;
      errors.appendChild(li);
    });
  } else {
    // If no errors, you can submit the form or perform other actions
    alert('Form submitted successfully!');
    form.reset(); // Reset the form fields
  }
});