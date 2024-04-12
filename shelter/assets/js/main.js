const navBar = document.querySelector('.header__items');
const navBtn = document.querySelector('.header__burger');
const activeNav = document.querySelector('.header__nav');
const body = document.body;
const bodyModal = document.body;

// Burger-menu

navBtn.addEventListener('click', function () {
    navBar.classList.toggle('nav--active');
    navBtn.classList.toggle('btn--active');
    body.classList.toggle('noscroll');
});

document.addEventListener("click", (e) => {
    // проверяем, что элемент на который кликнули (e.target) не находится в блоке бургера
    if (!activeNav.contains(e.target)) {
        navBar.classList.remove('nav--active');
        navBtn.classList.remove('btn--active');
        body.classList.remove('noscroll');
    }
});

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(navBar.children);

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});


function closeOnClick() {
    navBar.classList.remove('nav--active');
    navBtn.classList.remove('btn--active');
    body.classList.remove('noscroll');
}


// Modal window

const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal__btn');
const items = document.querySelectorAll('.our-friends__item');

items.forEach((item) => {
    item.addEventListener('click', function() {
        modal.classList.toggle('modal--active');
        bodyModal.classList.toggle('scroll');
    })
});

modalBtn.addEventListener('click', function(){
    modal.classList.remove('modal--active');
    bodyModal.classList.remove('scroll');
});


// Slider


const btnLeft = document.querySelector('.slider-btn-left');
const btnRight = document.querySelector('.slider-btn-rigth');
const sliderItem = document.querySelector('.slider__wrapper');

let offset = 0;

btnLeft.addEventListener('click' , ()=> {
    offset += 295;
    if(offset > 1180) {
        offset = 0;
    }
    sliderItem.style.left = -offset + 'px';
});


btnRight.addEventListener('click' , ()=> {
    offset -= 295;
    if(offset < 0) {
        offset = 1180;
    }
    sliderItem.style.left = -offset + 'px';
});


