//mini cart button

const cartBtn = document.querySelector('.cart-btn');
const  cartPage = document.querySelector('.mini-cart');
const  cartCloseBtn = document.querySelector('.cart-close-btn')

cartBtn.addEventListener("click",() => {
	cartPage.classList.toggle("translate-x-full")
});

cartCloseBtn.addEventListener("click",() => {
	cartPage.classList.toggle("translate-x-full")
});

//curosal
document.addEventListener('DOMContentLoaded', function () {
	new Splide('.splide', {
		type: 'loop',
		autoplay: true
	}).mount();
});

//Product view onclick function

let productImage = document.getElementById('ProductImage');
let smallImg = document.getElementsByClassName('Small-img');

smallImg[0].onclick = function () {
	productImage.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
	productImage.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
	productImage.src = smallImg[2].src;
};
