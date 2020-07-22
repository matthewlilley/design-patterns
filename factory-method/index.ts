export abstract class Creator {
  private product?: Product;
  abstract factoryMethod(): Product;
  operation() {
    this.product = this.factoryMethod();
    return (
      "Hello World from " +
      this.constructor.name +
      "!\n" +
      this.product.getName() +
      " created."
    );
  }
}

export class Creator1 extends Creator {
  factoryMethod() {
    return new Product1();
  }
}

export interface Product {
  getName(): string;
}

export class Product1 implements Product {
  getName() {
    return "Product1";
  }
}

export class Product2 implements Product {
  getName() {
    return "Product2";
  }
}

const creator = new Creator1();

console.log(creator.operation());
