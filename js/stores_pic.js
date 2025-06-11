const addresses = document.querySelectorAll('.stores_address');
const mainImage = document.getElementById('mainImage');

addresses.forEach(address => {
    address.addEventListener('mouseover', () => {
        const newSrc = address.dataset.img;
    
        if (mainImage.src.includes(newSrc)) return;

        mainImage.style.opacity = '0.34';

        setTimeout(function() {
            mainImage.src = newSrc;
            mainImage.style.opacity = '1';
        }, 250);
    });
});