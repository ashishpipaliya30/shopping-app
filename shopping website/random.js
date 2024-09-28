// For click 3 line menu button and get opetions
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// for cart-item, click cart button and get options
let cartItem = document.querySelector('.cart-items-cntainer');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

// for search, click search button and get search options
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
        cartItem.classList.remove('active');
}

// for we open one menu then remove other menu
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}