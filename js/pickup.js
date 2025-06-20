const methods = document.querySelectorAll(".method");

const dateSelect = document.getElementById("date");
const timeSelect = document.getElementById("time");
const storeSelect = document.getElementById("store");
const addressInput = document.getElementById("address");

const errorS = document.querySelector(".errorS");
const errorA = document.querySelector(".errorA");

function nextStep() {

    errorS.style.display = "none";
    errorA.style.display = "none";
    
    if (!storeSelect.disabled && storeSelect.value === "") {
        errorS.style.display = "block";
    }
    if (!addressInput.disabled && addressInput.value.trim() === "") {
        errorA.style.display = "block";
    }

    if (
        (!dateSelect.disabled && dateSelect.value === "") ||
        (!timeSelect.disabled && timeSelect.value === "") ||
        (!storeSelect.disabled && storeSelect.value === "") ||
        (!addressInput.disabled && addressInput.value.trim() === "")
    ) {
        return;
    }

    window.location.href = "checkout.html";
}

function prevStep() {
    window.location.href = "cart.html";
}

window.addEventListener("click", function () {
    setTimeout(() => {
        if (errorS) errorS.style.display = "none";
        if (errorA) errorA.style.display = "none";
    }, 5000);
});

function changeMethod(method) {

    methods.forEach(m => m.classList.remove("active"));

    if (method === "dropoff") {
        methods[1].classList.add("active");
        addressInput.disabled = false;
        storeSelect.disabled = true;
        storeSelect.value = "";
    } else {
        methods[0].classList.add("active");
        storeSelect.disabled = false;
        addressInput.disabled = true;
        addressInput.value = "";
    }
}

function updateTime(selectedDateStr) {
    timeSelect.innerHTML = "";

    const now = new Date();
    const selectedDate = new Date(selectedDateStr);
    const isToday = now.toDateString() === selectedDate.toDateString();

    let startTime;

    if (isToday) {
    let baseTime = new Date(now);
    baseTime.setMinutes(baseTime.getMinutes() + 10);

    // 開店時間
    const open = new Date(now);
    open.setHours(10, 0, 0, 0);

    if (baseTime < open) {
        baseTime.setHours(10, 0, 0, 0); // 如果早於營業時間，就從 10:00 開始
    } else {
        // 補齊到下一個 20 分鐘區間
        const min = baseTime.getMinutes();
        const next20 = Math.ceil(min / 20) * 20;
        if (next20 >= 60) {
            baseTime.setHours(baseTime.getHours() + 1);
            baseTime.setMinutes(0, 0, 0);
        } else {
            baseTime.setMinutes(next20, 0, 0);
        }
    }

    startTime = baseTime;
    } else {
      // 未來的話從 10:00 開始
        startTime = new Date(selectedDate);
        startTime.setHours(10, 0, 0, 0);
    }

    const endTime = new Date(selectedDate);
    endTime.setHours(22, 0, 0, 0);

    while (startTime <= endTime) {
        const opt = document.createElement("option");
        opt.value = opt.textContent = startTime.toTimeString().slice(0, 5);
        timeSelect.appendChild(opt);
        startTime.setMinutes(startTime.getMinutes() + 20);
    }
}

window.addEventListener("DOMContentLoaded", function () {

    const today = new Date();
    for (let i = 0; i < 5; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const formatted = date.toISOString().split("T")[0];
        const opt = document.createElement("option");
        opt.value = opt.textContent = formatted;
        dateSelect.appendChild(opt);
    }

    updateTime(dateSelect.value); // 初始化產生今天的時間選單

    // 監聽選擇日期變化時，更新時間選單
    dateSelect.addEventListener("change", function () {
        updateTime(this.value);
    });
});