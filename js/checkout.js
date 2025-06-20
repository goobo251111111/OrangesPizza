const nameInput = document.getElementById("name");
const phonenumInput = document.getElementById("phonenum");

const errorN = document.querySelector(".errorN");
const errorPh = document.querySelector(".errorPh");
const errorR = document.querySelector(".errorR");
const errorPa = document.querySelector(".errorPa");

function nextStep() {
    
    const receiptInput = document.querySelector('input[name="receipt"]:checked');
    const payInput = document.querySelector('input[name="pay"]:checked');

    errorN.style.display = "none";
    errorPh.style.display = "none";
    errorR.style.display = "none";
    errorPa.style.display = "none";

    if (!nameInput.value.trim()) {
        errorN.style.display = "block";
    }
    if (!phonenumInput.value.trim()) {
        errorPh.style.display = "block";
    }
    if (!receiptInput) {
        errorR.style.display = "block";
    }
    if (!payInput) {
        errorPa.style.display = "block";
    }

    if (!nameInput.value.trim() || !phonenumInput.value.trim() || !receiptInput || !payInput) {
        return;
    }

    alert("已送出訂單！");
    window.location.href = "index.html";
}

window.addEventListener("click", function () {
    setTimeout(() => {
        if (errorN) errorN.style.display = "none";
        if (errorPh) errorPh.style.display = "none";
        if (errorR) errorR.style.display = "none";
        if (errorPa) errorPa.style.display = "none";
    }, 10000);
});

function prevStep() {
    window.location.href = "pickup.html";
}