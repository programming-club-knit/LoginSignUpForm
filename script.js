const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const toggleSignup = document.getElementById("toggle-signup");
const toggleLogin = document.getElementById("toggle-login");
const formContainer = document.querySelector(".form-container");

toggleSignup.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});

toggleLogin.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});

document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Login successful!");
});

document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const password = e.target.querySelector('input[type="password"]').value;
    const confirmPassword = e.target.querySelectorAll('input[type="password"]')[1].value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    alert("Signup successful!");
});

document.getElementById("reset-button").addEventListener("click", (e) => {
    const form = document.getElementById("signup-form");
    form.reset(); 
});
