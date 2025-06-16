function openModal(element) {
    const img = element.dataset.img;
    const name = element.dataset.name;
    const price = element.dataset.price;
    const desc1 = element.dataset.desc1;
    const desc2 = element.dataset.desc2;

    document.querySelector(".img").src = img;
    document.querySelector(".img").alt = name;
    document.querySelector(".name").textContent = name;
    document.querySelector(".price").textContent = `$${price}`;
    document.querySelector(".desc1").textContent = desc1;
    document.querySelector(".desc2").textContent = desc2;

    // 記住目前商品資料，用於 addToCart
    window.currentItem = {
        name, 
        price: parseInt(price),
    }; // ← 新增：暫存目前商品

    document.querySelector(".modal").style.display = "flex";
}

function closeModal() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".quantity").value = 1; 
}


document.querySelector(".modal_content").addEventListener("click", e => e.stopPropagation());

function addToCart() {
    const quantity = parseInt(document.querySelector(".quantity").value);

    // 取得目前資料與數量
    const item = {
        ...window.currentItem,
        quantity,
        subtotal: window.currentItem.price * quantity 
    };

    // 讀取舊的購物車，若無則為空陣列
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // 可選：如果想要相同商品合併數量
    const exist = cart.find(p => p.name === item.name);
    if (exist) {
        exist.quantity += item.quantity;// ← 若已存在，直接加數量
        exist.subtotal = exist.price * exist.quantity; 
    } else {
        cart.push(item); // ← 不存在就加新項目
    }

    // 儲存到 localStorage
    localStorage.setItem("cart", JSON.stringify(cart));


    alert("已加入購物車！");
    closeModal();
}
