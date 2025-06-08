const addresses = document.querySelectorAll('.stores_address');
const mainImage = document.getElementById('mainImage');

addresses.forEach(address => {
    address.addEventListener('mouseover', () => {
        const newSrc = address.dataset.img;
        mainImage.src = newSrc;
    });
});