export abstract class Element {
  abstract accept(visitor: Visitor): void;
}

export class ConcreteElementA extends Element {
  accept(visitor: Visitor) {
    visitor.visitElementA(this);
  }
  operationA() {
    return "Hello World from ConcreteElementA!";
  }
}

export class ConcreteElementB extends Element {
  accept(visitor: Visitor) {
    visitor.visitElementB(this);
  }
  operationB() {
    return "Hello World from ConcreteElementB!";
  }
}

export abstract class Visitor {
  abstract visitElementA(element: ConcreteElementA): void;
  abstract visitElementB(element: ConcreteElementB): void;
}

class ConcreteVisitor1 extends Visitor {
  visitElementA(element: ConcreteElementA) {
    console.log(
      "ConcreteVisitor1: Visiting (doing something on) ConcreteElementA.\n" +
        element.operationA()
    );
  }
  visitElementB(element: ConcreteElementB) {
    console.log(
      "ConcreteVisitor1: Visiting (doing something on) ConcreteElementB.\n" +
        element.operationB()
    );
  }
}

// Usage
const elements: Element[] = [];
elements.push(new ConcreteElementA());
elements.push(new ConcreteElementB());
// Creating a Visitor1 object.
const visitor: Visitor = new ConcreteVisitor1();
// Traversing the object structure and
// calling accept(visitor) on each element.
for (const element of elements) {
  element.accept(visitor);
}
