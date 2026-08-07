let app = new Vue({
    el: "#app",
    data: {
        message: "Hello 1234 starts updating",
        fsize: "42px",
        msg2: "DUmmy"
    },
    methods: {
        updateMsg(){
            this.message = "back to square one"
        }
    },
    computed: {
        myFontSize: function(){
            return `${this.message.length + 10}px`;
        }
    },
    watch:{
        message: function(nmsg){
            this.msg2=`New: ${nmsg}`;
        }
    }
})