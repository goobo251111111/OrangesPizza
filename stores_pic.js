const addresses = document.querySelectorAll('.stores_address');
const images = document.querySelectorAll('.stores_pic img'); 

for (let i = 0; i < addresses.length; i++) {
(function(index) {
    addresses[index].addEventListener('mouseover', function() {
    // 全部圖片隱藏
    for (let j = 0; j < images.length; j++) {
        images[j].style.opacity = '0';
    }
    // 顯示對應那一張
    images[index].style.opacity = '1';
    });
})(i);
}

// 預設顯示第一張
images[0].style.opacity = '1';