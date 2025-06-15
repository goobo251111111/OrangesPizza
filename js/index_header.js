function headerTransparency() {
    const header = document.querySelector("header");
    const scrollPosition = window.scrollY;
    const threshold = window.innerHeight * 0.2; // 當前視窗高度的 20%

    if (scrollPosition < threshold) {
        header.classList.add("transparent");
    } else {
        header.classList.remove("transparent");
    }
};

window.addEventListener("DOMContentLoaded", headerTransparency);
window.addEventListener("scroll", headerTransparency);