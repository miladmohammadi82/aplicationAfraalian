import Vue from 'vue'


new Vue({
    el: "#app",
    data: {
        menuOpen: false,
        mobileMenu: false
    },
    
    methods: {
        menuOpenshow(){
            if(!this.menuOpen){
                this.menuOpen = true
            }
            else{
                this.menuOpen = false
            }

            if(!this.mobileMenu){
                this.mobileMenu = true
            }
            else{
                this.mobileMenu = false
            }
        }
    }
})

