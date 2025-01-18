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
    let emailValid=e.target.email.value.split("@");
    if(emailValid[1] !== "gmail.com" && emailValid[1] !=="yahoo.com" && emailValid[1] !== "outlook.com")
    {
        alert("Invalid Email address, Please Enter correct address");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    alert("Signup successful!");
});