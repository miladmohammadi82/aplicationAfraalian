window.Vue = require('vue')
import header from "./components/header";

Vue.component('header-menu', header)


const app = new Vue({
    el: "#app",
    data:{
        name: "Hello milad!"
    },

})