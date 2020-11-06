window.Vue = require('vue')
import header from "./components/header";
import slider from "./components/slider";
import vuetify from './plugins/vuetify';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.component('header-menu', header)
Vue.component('image-slider', slider)


const app = new Vue({
    el: "#app",
    vuetify,
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

