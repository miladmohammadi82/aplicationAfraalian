window.Vue = require('vue')
import test from "./components/test";

Vue.component('example', test)


const app = new Vue({
    el: "#app",
    data:{
        name: "Hello milad!"
    },

})