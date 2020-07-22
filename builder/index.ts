export class Director {
  private complexObject?: ComplexObject;
  private builder: Builder;
  constructor(builder: Builder) {
    this.builder = builder;
  }
  construct() {
    console.log(
      "Director: Delegating constructing a complex object to a builder object."
    );
    this.builder.buildPartA();
    this.builder.buildPartB();
    this.complexObject = this.builder.getResult();
    return "Hello World from " + this.complexObject.getParts() + " objects!";
  }
}

export interface Builder {
  buildPartA(): void;
  buildPartB(): void;
  getResult(): ComplexObject;
}

export class Builder1 implements Builder {
  private complexObject = new ComplexObject();
  buildPartA() {
    console.log("Builder1: Creating and assembling ProductA1.");
    this.complexObject.add(new ProductA1());
  }
  buildPartB() {
    console.log("Builder1: Creating and assembling ProductB1.");
    this.complexObject.add(new ProductB1());
  }
  getResult() {
    return this.complexObject;
  }
}

export class ComplexObject {
  private children: Product[] = [];
  getParts() {
    let string = "Complex Objetct made up of";
    for (const child of this.children) {
      string += child.getName();
    }
    return string;
  }
  add(child: Product) {
    return this.children.push(child);
  }
}

export interface Product {
  getName(): string;
}

export interface ProductA extends Product {}

export class ProductA1 implements ProductA {
  getName() {
    return " ProductA1";
  }
}

export interface ProductB extends Product {}

export class ProductB1 implements ProductB {
  getName() {
    return " ProductB1";
  }
}

// Creating a Director object
// and configuring it with a Builder1 object.
const director = new Director(new Builder1());
// Calling construct on the director.
console.log(director.construct());
