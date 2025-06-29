function openModal(element) {
    const uid = element.dataset.uid;
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

    window.currentItem = {
        name, 
        price: parseInt(price),
    };

    document.querySelector(".modal").style.display = "flex";

    history.pushState({uid}, null, `?pizza=${uid}`);
}

function closeModal() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".quantity").value = 1; 

    history.pushState({}, "", window.location.pathname);
}

document.querySelector(".modal_content").addEventListener("click", e => e.stopPropagation());

function addToCart() {
    const quantity = parseInt(document.querySelector(".quantity").value);

    const item = {
        ...window.currentItem,
        quantity,
        subtotal: window.currentItem.price * quantity 
    };

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // 相同商品合併數量
    const itemExist = cart.find(p => p.name === item.name);
    if (itemExist) {
        itemExist.quantity += item.quantity;
        itemExist.subtotal = itemExist.price * itemExist.quantity; 
    } else {
        cart.push(item); // 不存在就加新項目
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    
    alert("已加入購物車！");
    closeModal();
}

window.addEventListener("load", () => {
    const params = new URLSearchParams(window.location.search);
    const uid = params.get("pizza"); 
    if (uid) {
        const element = document.querySelector(`.menu_card[data-uid="${uid}"]`); 
        if (element) {
            openModal(element);
        }
    }
});

window.addEventListener("popstate", (event) => {
    const uid = event.state?.uid;
    if (uid) {
        const element = document.querySelector(`.menu_card[data-uid="${uid}"]`); 
        if (element) {
            openModal(element);
        }
    } else {
        closeModal();
    }
});
