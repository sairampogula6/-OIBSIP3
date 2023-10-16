
document.addEventListener("DOMContentLoaded", function () {
    const registrationLink = document.getElementById("registration-link");
    const loginLink = document.getElementById("login-link");
    const registrationPage = document.getElementById("registration-page");
    const loginPage = document.getElementById("login-page");

    registrationLink.addEventListener("click", () => {
        registrationPage.style.display = "block";
        loginPage.style.display = "none";
    });

    loginLink.addEventListener("click", () => {
        registrationPage.style.display = "none";
        loginPage.style.display = "block";
    });
});
/*reg*/
document.getElementById("registration-page").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;
    const message = document.getElementById("registration-message");

    if (password !== confirm_password) {
        message.textContent = "Passwords do not match. Please try again.";
    } else {
        // You can save the user's information to localStorage or sessionStorage here.
        // Note: This is not secure for production use; it's just for demonstration.

        localStorage.setItem(username, password);
        message.textContent = "Registration successful!";
    }
});
/*log*/
document.getElementById("login-page").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("login-message");

    // Retrieve the stored password from localStorage.
    const storedPassword = localStorage.getItem(username);

    if (password === storedPassword) {
        message.textContent = "Login successful!";
    } else {
        message.textContent = "Login failed. Please try again.";
    }
});