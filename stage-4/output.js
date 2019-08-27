(function () {
  var c = {hsakO: "3|4|2|1|0", tPkAq: function (d, e) {
    return d === e;
  }, YhcXR: "reader", PFwHf: "world"};
  class f {
    constructor(g) {
      this.target = g;
    }
    greet() {
      console.log("Hello " + this.target);
      if (c.tPkAq(this.target, c.PFwHf)) {
        console.log("It's beautiful out, isn't it?");
      }
      if (c.tPkAq(this.target, c.YhcXR)) {
        console.log("I like your hair!");
      }
      console.log("I hope you have a good day!");
      console.log("I have run out of things to say.");
    }
    setTarget(j) {
      this.target = j;
    }
  }
  const k = new f(c.PFwHf);
  k.greet();
  k.setTarget(c.YhcXR);
  k.greet();
}());

