

let submitButton = document.getElementById('submit-button');
let fullnameInput = document.getElementById('fullname');
let emailInput = document.getElementById('email');
let messageTextarea = document.getElementById('message');

// Declare variable that will store regular expression for email
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//function 
function validateForm(event) {
  event.preventDefault();

  // Declare an object that will store the form-data
  let data = {};
  // Declare an array that will store the errors
  let errors = [];

// FULL NAME
if (fullnameInput.value.trim() !== '') {
  data.fullname = fullnameInput.value.trim();
} else {
  errors.push('Full name is required.');
}

// EMAIL
if (emailInput.value.trim() !== '') {
  if (emailRegex.test(emailInput.value.trim())) {
    data.email = emailInput.value.trim();
  } else {
    errors.push('Invalid email address.');
  }
} else {
  errors.push('Email is required.');
}

// MESSAGE
if (messageTextarea.value.trim() !== '') {
  data.message = messageTextarea.value.trim();
} else {
  errors.push('Message is required.');
}

// FEEDBACK/ERRORS
if (errors.length > 0) {
  console.error('Form errors:', errors );
} else {
   console.log('Form data:', data);
  
  fullnameInput.value = '';
  emailInput.value = '';
  messageTextarea.value = '';
  document.getElementById('fullname').style.backgroundColor = 'lightyellow';

}
}

// Register your form to "click" event.
submitButton.addEventListener('click', validateForm);
