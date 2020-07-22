export interface Component {
  operation(): string;
}

export class ConcreteComponent implements Component {
  operation() {
    return "Component operation";
  }
}

// Abstract Decorator
export abstract class Decorator implements Component {
  component: Component;
  constructor(component: Component) {
    this.component = component;
  }
  operation(): string {
    return this.component.operation();
  }
}

// Concrete Decorator 1
export class ConcreteDecorator1 extends Decorator {
  operation() {
    return super.operation() + " -> Component decorator 1 operation";
  }
}

// Concrete Decorator 2
export class ConcreteDecorator2 extends Decorator {
  operation() {
    return super.operation() + " -> Component decorator 2 operation";
  }
}

let component = new ConcreteComponent();

component = new ConcreteDecorator1(component);

component = new ConcreteDecorator2(component);

console.log(component.operation());
