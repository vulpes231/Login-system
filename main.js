const passwordToggleBtn = document.querySelector(".password_toggle");
const passwordInput = document.getElementById("password");
passwordToggleBtn.innerHTML = 
`
    <span class="material-symbols-outlined">
        visibility_off
    </span>
`;



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
