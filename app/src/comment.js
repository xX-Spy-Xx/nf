import axios from "axios"
import config from "./config";
const fetchTokenData = async () => {
  try {
    const token = localStorage.getItem(config.token);
    if (!token) {
      throw new Error('No token found in localStorage');
    }
    const response = await axios.post('http://localhost:3006/api/NF', null, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    X()
    document.getElementById('0000').textContent = response.data.userID
  } catch (error) {
    console.error('Error fetching token data:', error.response ? error.response.data : error.message);
  }
};

const fetchMovieData = async () => {
  let movie = document.getElementById("m1").textContent.trim();
  console.log(movie);
  let payload = {
    movie: movie
  }
  try {
    const response = await axios.post('http://localhost:3006/api/GG', payload);
    if (response.data.message === 'success') {

      document.getElementById('name').textContent = response.data.result[0].MovieID;
    }
    fetchTokenData()
  } catch (error) {
    console.error('Error fetching movie data', error.response ? error.response.data : error.message);
  }
};


const X = async () => {
  let ben = document.getElementById("name").textContent;
  let ten = { movie: ben };

  try {
    const response = await axios.post("http://localhost:3006/api/young", ten);
    
    console.log(response.data);  // Log response to confirm structure

    if (response.data.message === "success") {
      const comments = response.data.result;  // Assuming comments are inside response.data

      const commentsContainer = document.getElementById("lol");
      commentsContainer.innerHTML = '';  // Clear previous comments

      comments.forEach(comment => {
        const commentElement = document.createElement("p");
        commentElement.textContent = comment.Comment.trim();
        commentsContainer.appendChild(commentElement);
      });
    }
  } catch (error) {
    console.error('Error fetching movie data:', error.response ? error.response.data : error.message);
  }
};





window.onload = fetchMovieData;

const comment = async (data) => {
  try {
    const VV = await axios.post('http://localhost:3006/api/VV', data)
    if (VV.data.message = "success") {
      alert("You comment success fully")
    }
  } catch (error) {
    console.error('Error fetching movie data', error.response ? error.response.data : error.message);
  }
}
// Event listener for form submission
document.getElementById('6666').addEventListener('submit', function (event) {
  event.preventDefault();  // Prevent page reload on form submission

  // Get form data
  const Comment = document.getElementById('7777').value;
  const UserID = document.getElementById('0000').textContent
  const MovieID = document.getElementById('name').textContent
  // Prepare data for API
  const userData = {
    Comment: Comment,
    UserID: UserID,
    MovieID: MovieID
  };

  // Call function to send data to API
  comment(userData);
});


