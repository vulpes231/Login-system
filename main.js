const passwordToggleBtn = document.querySelector(".password_toggle");
const passwordInput = document.getElementById("password");
const usernameInput = document.getElementById("username");

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


// function to validate

// get the username input 
// is the usernam
function handleSubmit() {
    const userError = document.querySelector(".user_error")
    const passError = document.querySelector(".pass_error")
    const username = usernameInput.value

    if (username.trim() === "") {
        usernameInput.style.border = "1px solid red"
        userError.textContent = "username must be at least 4 or more characters"
    } else {
        usernameInput.style.border = "1px solid darkgrey"
        userError.textContent = ""
        passError.textContent = ""
    }
    
    if (passwordInput.value.trim() === "") {
        passwordInput.style.border = "1px solid red"
        passError.textContent = "Enter password"
    } else {
        passwordInput.style.border = "1px solid darkgrey"
    }
}
