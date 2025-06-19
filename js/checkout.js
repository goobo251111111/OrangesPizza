function nextStep() {
    const name = document.querySelector("#name");
    const phonenum = document.querySelector("#phonenum");
    const receipt = document.querySelector('input[name="receipt"]:checked');
    const pay = document.querySelector('input[name="pay"]:checked');

    if (!name.value || !phonenum.value || !receipt || !pay) {
        alert("請填寫完整資訊！");
        return;
    } else {
        alert("已送出訂單！");
    }

    window.location.href = "index.html";
}
function prevStep() {
    window.location.href = "pickup.html";
}