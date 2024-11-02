import axios from 'axios';

// Function to send POST request for user creation
const createUser = async (data) => {
  try {
    const response = await axios.post('http://localhost:3006/api/users', data);
    console.log('User created successfully:', response.data);
    alert('User created successfully!');
    window.location.href="Login.html"

  } catch (error) {
    console.error('Error creating user:', error.response ? error.response.data : error.message);
    alert(`Error: ${error.response ? error.response.data : error.message}`);
  }
};

// Event listener for form submission
document.getElementById('4444').addEventListener('submit', function (event) {
  event.preventDefault();  // Prevent page reload on form submission

  // Get form data
  const Name = document.getElementById('username').value;
  const Email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value; 

  // Basic password match check before sending data
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // Prepare data for API
  const userData = {
    Name,
    Email,
    password: password,
    confirmPassword: confirmPassword  // Send one validated password
  };

  // Call function to send data to API
  createUser(userData);
});
