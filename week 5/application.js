// 1. Defining a Global Vue Component
Vue.component('message-board', {
    // 'props' allow the parent HTML to pass data down into this component.
    props: ["title"],
    
    // The 'template' defines the HTML structure of this specific component.
    // It uses ES6 template literals (backticks) to allow for multi-line strings.
    template: `
    <div>
        <h3> {{ title }} </h3>
        <div class="form-group">
            <label for="vistor_name">Your Name</label>
            <!-- v-model binds this input directly to 'vistor_name' in the data function -->
            <input type="text" id="vistor_name" v-model="vistor_name" />
        </div>
        <div class="form-group">
            <label for="vistor_message">Your Message</label>
            <!-- v-model binds this input directly to 'vistor_message' -->
            <input type="text" id="vistor_message" v-model="vistor_message" />
        </div>
        <!-- v-on:click listens for a click event and triggers the 'sayHi' method -->
        <button v-on:click="sayHi">Say Hi</button>
        <ul>
            <!-- v-for iterates over the 'messages' array and generates a list item for each -->
            <li v-for="message in messages">{{message['vistor name']}} - {{message['vistor_message']}}</li>
        </ul>
    </div>
    `,
    
    // The 'data' function returns an object containing the component's reactive state.
    // It must be a function in components so each instance gets a fresh copy of the state.
    data: function() {
        return {
            vistor_name: null,
            vistor_message: null,
            messages: []
        }
    },
    
    // 'methods' contain the functions that can be called by the component's template.
    methods: {
        sayHi: function(name) {
            // Push a new object to the messages array using the current input values
            this.messages.push({
                "vistor name": this.vistor_name,
                "vistor_message": this.vistor_message
            });
            // Clear the input fields by resetting the reactive data properties
            this.vistor_name = "";
            this.vistor_message = "";
            
            // $emit broadcasts a custom event up to the parent element.
            // The parent can listen for 'add-to-grand-total' and execute its own logic.
            this.$emit('add-to-grand-total');
        }
    },
    
    // 'computed' properties are cached calculations based on reactive data.
    // They only re-evaluate when their dependencies (like 'this.messages') change.
    computed: {
        count: function() {
            return this.messages.length;
        }
    }
});

// 2. Initializing the Root Vue Instance
// This mounts Vue to the DOM and acts as the parent to the 'message-board' component.
new Vue({
    el: '#app', // Tells Vue to mount onto the HTML element with id="app"
    data: {
        grand_total: 0 // Tracks the total across all message boards
    },
    methods: {
        add_grand_total: function() {
            console.log("in grand_total");
            this.grand_total = this.grand_total + 1;
        }
    }
});