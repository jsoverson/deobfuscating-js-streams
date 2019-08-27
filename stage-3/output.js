(function () {
  class o {
    constructor(p) {
      this.target = p;
    }
    greet() {
      console.log("Hello " + this.target);
    }
    setTarget(q) {
      this.target = q;
    }
  }
  const r = new o("world");
  r.greet();
  r.setTarget("reader");
  r.greet();
}());

