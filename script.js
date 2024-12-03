document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    
    if (password !== confirmPassword) {
        document.getElementById('message').innerText = "Passwords do not match!";
        return;
    }

 
    document.getElementById('message').innerText = "Registration successful! Welcome, " + username + "!";
    document.getElementById('registrationForm').reset(); // Reset form fields
});

