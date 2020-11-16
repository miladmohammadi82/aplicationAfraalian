window.Vue = require('vue')




const app = new Vue({
    el: "#app",
    data: {}
})

const menuBtn = document.querySelector('.menu-btn');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
})


document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.main-menu').classList.toggle('show')
})

