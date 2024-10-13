// Load user information
document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.username === loggedInUser);
    if (user) {
        document.getElementById('profileUsername').value = user.username;
        document.getElementById('profilePassword').value = user.password;
    }
});

function updateProfile(event) {
    event.preventDefault();

    const username = document.getElementById('profileUsername').value;
    const password = document.getElementById('profilePassword').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(user => user.username === localStorage.getItem('loggedInUser'));

    if (userIndex > -1) {
        users[userIndex] = { username, password };
        localStorage.setItem('users', JSON.stringify(users));
        alert("Profile updated successfully!");
    }
}

function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = "login.html"; // Redirect to login page
}
