import { categories } from "./components/categories.js";
import { reload } from "./utils/reload.js";
import { add } from "./components/product.js";

let res = await fetch("https://6832b59ec3f2222a8cb333b6.mockapi.io/api/v1/products");
let products = await res.json();

let productPlace = document.querySelector(".grid");
reload(products, add, productPlace);

let res1 = await fetch("https://6832b59ec3f2222a8cb333b6.mockapi.io/api/v1/categories");
let categoriesData = await res1.json();

let categoryPlace = document.querySelector(".categories");
categoryPlace.innerHTML = "";

for (let item of categoriesData) {
    const elem = categories(item, products, productPlace);
    categoryPlace.appendChild(elem);
}

const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.slider-dots');
const leftBtn = document.querySelector('.arrow.left');
const rightBtn = document.querySelector('.arrow.right');

let current = 0;


slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('span');

function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    current = index;
}

let interval = setInterval(() => {
    goToSlide(current + 1)
}, 2500);

leftBtn.addEventListener('click', () => goToSlide(current - 1));
rightBtn.addEventListener('click', () => goToSlide(current + 1));


goToSlide(0);