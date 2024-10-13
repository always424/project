function recoverPassword(event) {
    event.preventDefault();
    
    const username = document.getElementById('recoveryUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const userIndex = users.findIndex(user => user.username === username);

    if (userIndex > -1) {
        users[userIndex].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        alert("Password updated successfully!");
        window.location.href = "login.html"; // Redirect to login page
    } else {
        alert("Username not found!");
    }
}
