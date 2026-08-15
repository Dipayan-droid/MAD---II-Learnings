var app = new Vue({
  el: "#app",
  data: {
    message: "Hello World",
    count: 0,
    visitorName: "",
    lastVisitor: "",
    visitors: []
  },
  methods: {
    sayHi: function() {
      if (this.visitorName.trim() === "") {
        return;
      }

      this.message = "HI";
      this.count = this.count + 1;
      this.lastVisitor = this.visitorName;

      // Add current visitor name to the list
      this.visitors.push(this.visitorName);

      // Clear the input
      this.visitorName = "";
    }
  }
});