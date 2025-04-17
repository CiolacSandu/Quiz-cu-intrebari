const user = localStorage.getItem('loggedInUser');
document.addEventListener("click", function(e) {
  if (e.target.id === "logoutBtn") {
    localStorage.removeItem("loggedInUser");
    window.location.href = "../Login/login.html";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("rulesModal");
  const btn = document.getElementById("rulesBtn");
  const span = document.querySelector(".close");

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});
