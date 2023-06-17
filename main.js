const passwordToggleBtn = document.querySelector(".password_toggle");
const passwordInput = document.getElementById("password");
const usernameInput = document.getElementById("username");

const users = 
    {
        "username": "admin1234",
        "password": "admin"
    }


// append button element
passwordToggleBtn.innerHTML = 
`
    <span class="material-symbols-outlined">
        visibility_off
    </span>
`;


// visibility toggler function
passwordToggleBtn.addEventListener("click", function() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggleBtn.innerHTML = `
            <span class="material-symbols-outlined">
                visibility
            </span>`;
    } else {
        passwordInput.type = "password";
        passwordToggleBtn.innerHTML = `
            <span class="material-symbols-outlined">
                visibility_off
            </span>`;
    }
});


function handleSubmit() {
    const userError = document.querySelector(".user_error")
    const passError = document.querySelector(".pass_error")

    const username = usernameInput.value
    const password = passwordInput.value

    if (username.trim() === users.username && password.trim() === users.password) {
        console.log(users.username)
        console.log(users.password)
        window.location.href = "/dashboard.html"
    } else if (username.trim() === "" && passwordInput.value.trim() === "") {
        usernameInput.style.border = "1px solid red"
        userError.textContent = "username must be at least 4 or more characters"
        passwordInput.style.border = "1px solid red"
        passError.textContent = "Enter password"
    } else {
        usernameInput.style.border = "1px solid red"
        userError.textContent = "Invalid username or password"
        passwordInput.style.border = "1px solid red"
        passError.textContent = ""

    
    }
}
