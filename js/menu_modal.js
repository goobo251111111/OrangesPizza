function openModal(element) {
    const img = element.dataset.img;
    const name = element.dataset.name;
    const price = element.dataset.price;
    const desc1 = element.dataset.desc1;
    const desc2 = element.dataset.desc2;

    document.getElementById('img').src = img;
    document.getElementById('img').alt = img;
    document.getElementById('name').textContent = name;
    document.getElementById('price').textContent = `$${price}`;
    document.getElementById('desc1').textContent = desc1;
    document.getElementById('desc2').textContent = desc2;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function addToCart() {
    const name = document.getElementById('name').textContent;
    const qty = document.getElementById('quantity').value;
    alert(`已加入購物車！`);
    closeModal();
}