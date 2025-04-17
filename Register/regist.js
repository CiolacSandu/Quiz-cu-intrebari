document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    
    if (!username || !email || !password || !confirmPassword) {
        alert("Toate câmpurile sunt obligatorii!");
        return;
    }

    
    if (password.length < 6) {
        alert("Parola trebuie să aibă cel puțin 6 caractere.");
        return;
    }

    
    if (password !== confirmPassword) {
        alert("Parolele nu se potrivesc.");
        return;
    }

    
    const emailPattern = /^(.*)@(gmail\.com|email\.com)$/;
    if (!emailPattern.test(email)) {
        alert("Te rog introduce un email valid care să fie @gmail.com sau @email.com.");
        return;
    }

    
    let users = JSON.parse(localStorage.getItem('users')) || [];

   
    if (users.some(user => user.username === username)) {
        alert("Acest username este deja utilizat.");
        return;
    }

    
    const newUser = { username, email, password };
    users.push(newUser);

    
    localStorage.setItem('users', JSON.stringify(users));

    
    alert("Înregistrare reușită! Te poți autentifica acum.");

    
    window.location.href = "../Login/login.html"; 
});

