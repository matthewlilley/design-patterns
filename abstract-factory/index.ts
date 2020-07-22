export class Client {
  private productA?: ProductA;
  private productB?: ProductB;
  private factory: AbstractFactory;
  constructor(factory: AbstractFactory) {
    this.factory = factory;
  }
  operation() {
    this.productA = this.factory.createProductA();
    this.productB = this.factory.createProductB();
    return (
      "Hello World from " +
      this.productA.getName() +
      " and " +
      this.productB.getName() +
      "!"
    );
  }
}

export interface AbstractFactory {
  createProductA(): ProductA;
  createProductB(): ProductB;
}

export class Factory1 implements AbstractFactory {
  createProductA() {
    return new ProductA1();
  }
  createProductB() {
    return new ProductB1();
  }
}

export class Factory2 implements AbstractFactory {
  createProductA() {
    return new ProductA2();
  }
  createProductB() {
    return new ProductB2();
  }
}

export interface ProductA {
  getName(): string;
}

export class ProductA1 implements ProductA {
  getName() {
    return "ProductA1";
  }
}

export class ProductA2 implements ProductA {
  getName() {
    return "ProductA2";
  }
}

export interface ProductB {
  getName(): string;
}

export class ProductB1 implements ProductB {
  getName() {
    return "ProductB1";
  }
}

export class ProductB2 implements ProductB {
  getName() {
    return "ProductB2";
  }
}

const client = new Client(new Factory1());

console.log(client.operation());
