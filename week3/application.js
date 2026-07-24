let app = new Vue({
    el: '#app',
    data: {
        message: 'HELLO WORLD',
        visitorName: '',
        visitors: []
    },
    methods: {
        sayHi: function() {
            // Only trigger if the input is not empty
            if (this.visitorName !== '') {
                this.message = 'Hi '+this.visitorName;
                this.visitors.push(this.visitorName); // Add name to array
                this.visitorName = '';                // Clear the input box
            }
        }
    },
    computed: {
        count: function() {
            // Dynamically calculates based on the array length
            return this.visitors.length;
        }
    }
});