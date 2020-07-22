export class Abstraction {
  implementor?: Implementor;
  constructor(implementor?: Implementor) {
    this.implementor = implementor;
  }
  operation() {
    if (!this.implementor) {
      throw new Error("No implementor");
    }
    this.implementor.operation();
  }
}

export abstract class Implementor {
  abstract operation(): void;
}

export class RefinedAbstraction extends Abstraction {
  operation(): void {
    if (!this.implementor) {
      throw new Error("No implementor");
    }
    this.implementor.operation();
  }
}

export class ConcreteImplementorA extends Implementor {
  operation(): void {
    console.log("ConcreteImplementorA operation");
  }
}

export class ConcreteImplementorB extends Implementor {
  operation(): void {
    console.log("ConcreteImplementorB operation");
  }
}

const abstraction: Abstraction = new RefinedAbstraction();

// Set implementation to ConcreteImplementorA and call operation function
abstraction.implementor = new ConcreteImplementorA();
abstraction.operation();

// Change implemention to ConcreteImplementorB and call operation function
abstraction.implementor = new ConcreteImplementorB();
abstraction.operation();
