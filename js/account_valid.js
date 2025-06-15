const form = document.getElementById("loginForm");

const accountInput = form.account;
const passwordInput = form.password;

const errorA = form.querySelector(".errorA");
const errorP = form.querySelector(".errorP")
const error2 = form.querySelector(".error2");

const correctAccount = "orange";
const correctPassword = "0987654321";


[accountInput, passwordInput].forEach(input => {
    input.addEventListener("input", () => {
        errorA.style.display = "none";
        errorP.style.display = "none";
        error2.style.display = "none";
    });
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let valid = true;

    if (!accountInput.value.trim()) {
        errorA.style.display = "block";
        valid = false;
    }

    if (!passwordInput.value.trim()) {
        errorP.style.display = "block";
        valid = false;
    }

    if (!valid) return;


    if (
        accountInput.value.trim() === correctAccount &&
        passwordInput.value.trim() === correctPassword
    ) {
        alert ("登入成功！");
        window.location.href = "index.html";
    } else if ( 
        accountInput.value.trim() && 
        passwordInput.value.trim()
    ) {
        error2.style.display = "block";
    }
});
