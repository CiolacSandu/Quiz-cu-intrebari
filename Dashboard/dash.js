
document.getElementById("easy").addEventListener("click", function() {
    window.location.href = "../quiz/easy.html";
});

document.getElementById("normal").addEventListener("click", function() {
    window.location.href = "../quiz/normal.html";
});

document.getElementById("hard").addEventListener("click", function() {
    window.location.href = "../quiz/hard.html";
});

document.getElementById("very-hard").addEventListener("click", function() {
    window.location.href = "../quiz/veryhard.html";
});
document.querySelector(".logout-btn").addEventListener("click", function() {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "../login.html";
});
