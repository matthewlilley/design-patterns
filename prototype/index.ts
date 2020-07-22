export interface Prototype {
  clone(): Product;
}

export interface Product extends Prototype {
  getName(): string;
}

export class Product1 implements Product {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  clone(): Product {
    return new Product1(this.getName());
  }
}

const prototype = new Product1("Product1");

const product = prototype.clone();

console.log(
  "Client: Cloning " +
    Object(prototype).name +
    ".\n" +
    product.getName() +
    " object copied."
);
// console.log(clone.getName());
