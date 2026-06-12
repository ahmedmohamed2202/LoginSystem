const correctEmail = "ahmedmohamed@gmail.com";
const correctPassword = "ahmedmohamed2001";

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    if (email === correctEmail && password === correctPassword) {
        message.textContent = "Login successful!";
        message.className = "success";
        
        if (confirm("Welcome! Login successful. Do you want to continue?")) {
            alert("Welcome to the page!");
        }
    } else {
        message.textContent = "Incorrect email or password";
        message.className = "error";
        
        if (confirm("Incorrect login credentials. Do you want to try again?")) {
            document.getElementById('email').value = "";
            document.getElementById('password').value = "";
            message.textContent = "";
        }
    }
});
