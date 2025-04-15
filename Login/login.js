document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const errorMessage = document.getElementById("error-message");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
  
      if (!username || !password) {
        showError("Completează toate câmpurile!");
        return;
      }
  
      if (username === "admin" && password === "parola123") {
        errorMessage.textContent = "";
        window.location.href = "../Dashboard/dash.html";
      } else {
        showError("Username sau parolă incorectă!");
      }
    });
  
    function showError(message) {
      errorMessage.textContent = message;
      errorMessage.style.display = "block";
  
      setTimeout(() => {
        errorMessage.textContent = "";
        errorMessage.style.display = "none";
      }, 3000); 
    }
    
  });
  