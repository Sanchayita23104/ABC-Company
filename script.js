document.getElementById('showSignup').addEventListener('click', function() {
    document.getElementById('signupForm').style.display = 'block';
});

function createUser() {
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    // Basic encryption simulation
    const encryptedPassword = btoa(password);
    localStorage.setItem('user', JSON.stringify({ username: document.getElementById('username').value, email: document.getElementById('email').value, password: encryptedPassword }));
    alert("User created! Please log in.");
    document.getElementById('signupForm').style.display = 'none';
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userId = document.getElementById('userId').value;
    const password = btoa(document.getElementById('password').value);
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && (user.email === userId || user.mobile === userId) && user.password === password) {
        window.location.href = 'dashboard.html';
    } else {
        alert("Login failed! Incorrect user ID or password.");
    }
});

function showChangePassword() {
    document.getElementById('mainContent').innerHTML = `
        <h2>Change Password</h2>
        <p>[ User ID Text Box ]</p>
        <p>[ New Password Text Box ]</p>
        <button>Update Password</button>
    `;
}

function logout() {
    window.location.href = 'index.html';
}
