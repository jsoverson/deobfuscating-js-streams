(function () {
  class c {
    constructor(d) {
      this.target = d;
    }
    greet() {
      console.log("Hello " + this.target);
      if (this.target === "world") {
        {
          console.log("It's beautiful out, isn't it?");
        }
      }
      if (this.target === "reader") {
        {
          console.log("I like your hair!");
        }
      }
      console.log("I hope you have a good day!");
      console.log("I have run out of things to say.");
    }
    setTarget(i) {
      this.target = i;
    }
  }
  const k = new c("world");
  k.greet();
  k.setTarget("reader");
  k.greet();
}());

