'use strict'
const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('_active');
    menuBody.classList.toggle('menu_active');

});