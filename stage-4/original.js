(function() {
  class Greeter {
    constructor(target) {
      this.target = target;
    }
    greet() {      
      console.log(`Hello ${this.target}`);

      if (this.target === 'world') {
        console.log(`It's beautiful out, isn't it?`)
      }

      if (this.target === 'reader') {
        console.log(`I like your hair!`);
      }

      console.log(`I hope you have a good day!`);
      console.log(`I have run out of things to say.`);
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