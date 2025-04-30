// Listens for login submission
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // This is where the request to check the database will go

        window.location.href = "home.html";
    });
});

// Listens for account creation submission
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("create-form");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // This is where the request to check the database will go

        window.location.href = "home.html";
    });
});