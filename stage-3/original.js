(function() {
  class Greeter {
    constructor(target) {
      this.target = target;
    }
    greet() {
      console.log(`Hello ${this.target}`);
    }
    setTarget(newTarget) {
      this.target = newTarget;
    }
  }
  const greeter = new Greeter("world");
  greeter.greet();
  greeter.setTarget("reader");
  greeter.greet();
})();