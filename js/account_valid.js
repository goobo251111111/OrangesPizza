const form = document.getElementById("loginForm");

const account = form.account;
const password = form.password;

const errorA = form.querySelector(".errorA");
const errorP = form.querySelector(".errorP")
const error2 = form.querySelector(".error2");

const correctAccount = "orange";
const correctPassword = "0987654321";


[account, password].forEach(input => {
    input.addEventListener("input", () => {
        errorA.style.display = "none";
        errorP.style.display = "none";
        error2.style.display = "none";
    });
});

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    if (!account.value.trim()) {
        errorA.style.display = "block";
        valid = false;
    }

    if (!password.value.trim()) {
        errorP.style.display = "block";
        valid = false;
    }

    if (!valid) return;


    if (
        account.value.trim() === correctAccount &&
        password.value.trim() === correctPassword
    ) {
        alert ("登入成功！");
        window.location.href = "index.html";
    } else if ( 
        account.value.trim() && 
        password.value.trim()
    ) {
        error2.style.display = "block";
    }
});
