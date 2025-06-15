window.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.querySelector('.table_body');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
    tableBody.innerHTML = '<p>購物車是空的</p>';
    return;
    }

let html = `
    <div class="table_row head">
        <div>品項</div>
        <div>數量</div>
        <div>單價</div>
        <div>小計</div>
        <div>操作</div>
    </div>
    `;

cart.forEach((item, index) => {
    html += `
        <div class="table_row">
            <div>${item.name}</div>
            <div>${item.quantity}</div>
            <div>$${item.price}</div>
            <div>$${item.price * item.quantity}</div>
            <div><button data-index="${index}">刪除</button></div>
        </div>
    `;
    });

    tableBody.innerHTML = html;
});

// 刪除功能
document.querySelector('.table_body').addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        const index = e.target.dataset.index;
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload();
    }
});
