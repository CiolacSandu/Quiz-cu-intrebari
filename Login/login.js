document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
      localStorage.setItem('loggedInUser', username);
      window.location.href = "../Dashboard/dash.html";
  } else {
      errorMessage.textContent = "Invalid username or password.";
  }
});
