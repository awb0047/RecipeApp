// Listens for login submission
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch("users.json");
            const users = await response.json();

            const user = users.find(
                (user) => user.username === username && user.password === password
            );

            if (user) {
                window.location.href = "home.html";
            } else {
                alert("Invalid username or password.");
            }
        } catch (error) {
            console.error("Error loading users:", error);
            alert("An error occurred. Please try again later.");
        }
    });
});

// Listens for account creation submission
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("create-form");

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        window.location.href = "home.html";
    });
});