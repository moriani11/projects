let products = [];
let cart = [];
let wishlist = [];

document.addEventListener('DOMContentLoaded', function() {
    fetch('json/cars.json')
        .then(res => res.json())
        .then(data => { 
            products = data; 
            renderProducts();
        })
        .catch(err => console.error(err));
});
