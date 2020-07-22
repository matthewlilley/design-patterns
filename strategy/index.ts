export interface Strategy {
  calculate(): number;
}

export class ConcreteStrategy1 implements Strategy {
  calculate() {
    return 1;
  }
}

export class ConcreteStrategy2 implements Strategy {
  calculate() {
    return 2;
  }
}

export class Context {
  strategy?: Strategy;
  constructor(strategy?: Strategy) {
    this.strategy = strategy;
  }
  setStategy(strategy: Strategy) {
    this.strategy = strategy;
  }
  operation() {
    if (!this.strategy) {
      throw Error("No strategy!");
    }
    return this.strategy.calculate();
  }
}

const context = new Context();

context.setStategy(new ConcreteStrategy1());

console.log(context.operation());

context.setStategy(new ConcreteStrategy2());

console.log(context.operation());
