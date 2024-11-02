import axios from 'axios';
import config from './config';
// Function to send POST request for user creation
const createUser = async (data) => {
  try {
    const response = await axios.post('http://localhost:3006/api/login', data);
    if(response.data.message = 'success'){
      localStorage.setItem(config.token,response.data.token)
      
      window.location.href="main.html"
    }
  } catch (error) {
    console.error('Error creating user:', error.response ? error.response.data : error.message);
    alert(`Error: ${error.response ? error.response.data : error.message}`);
  }
};

// Event listener for form submission
document.getElementById('5555').addEventListener('submit', function (event) {
  event.preventDefault();  // Prevent page reload on form submission

  // Get form data
  const Email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // Prepare data for API
  const userData = {
    Email:Email,
    password:password
  };

  // Call function to send data to API
  createUser(userData);
});
