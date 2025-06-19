let cart = JSON.parse(localStorage.getItem("cart")) || [];

const tableBody = document.querySelector(".table_body");
const tableFoot = document.querySelector(".table_foot");

function updateCart() {
    tableBody.innerHTML = "";

    cart.forEach((item, index) => {
        const tr = document.createElement("div");
        tr.classList.add("tr");
        tr.dataset.index = index;
        tr.innerHTML = `
            <div class="td name">${item.name}</div>
            <div class="td price">$${item.price}</div>
            <div class="td quantity">${item.quantity}</div>
            <div class="td subtotal">$${item.price * item.quantity}</div>
            <div class="td delete"><span class="remove_button">&times;</span></div>
        `;
        tableBody.appendChild(tr);
    });

    function updateTotal() {
        const total = cart.reduce((sum, item) => (sum + item.price * item.quantity), 0);
        tableFoot.innerHTML = `
            <div class="tr">
                <div class="td total">總計　$${total}</div>
            </div>
        `;
    };
    updateTotal();
}

function removeProduct() {
    function removeItem(index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
    }
    tableBody.addEventListener("click", function (e) {
        if (e.target.classList.contains("remove_button")) {
            const tr = e.target.closest(".tr");
            const index = parseInt(tr.dataset.index);
            removeItem(index);
        }
    });
}

function nextStep() {
    if (cart.length === 0) {
        alert("購物車目前是空的！");
        return;
    }
    window.location.href = "pickup.html";
}

function initCart() {
    updateCart();
    removeProduct();
}

initCart();
