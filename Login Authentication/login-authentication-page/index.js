// Retrieve user data from localStorage if available
let users = JSON.parse(localStorage.getItem('users')) || [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
]

// Function to update user data in localStorage
function updateUserLocalStorage () {
  localStorage.setItem('users', JSON.stringify(users))
}

// Function to perform login authentication
function login () {
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value

  // Check if user exists in the array
  const user = users.find(
    user => user.username === username && user.password === password
  )

  if (user) {
    // Navigate to home page
    window.location.href = 'home.html'
  } else {
    window.location.href = 'register.html'
  }
}

// Function to register new user
function register () {
  const newUsername = document.getElementById('newUsername').value
  const newPassword = document.getElementById('newPassword').value

  // Check if username already exists
  const userExists = users.find(user => user.username === newUsername)

  if (userExists) {
    document.getElementById('message').innerText = 'Username already exists'
  } else {
    // Add new user to the array
    users.push({ username: newUsername, password: newPassword })
    updateUserLocalStorage() // Update localStorage
    window.location.href = 'index.html'
  }
}
