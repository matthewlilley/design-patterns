export interface Component {
  // Component operation
  operation(): void;
}

export class Composite implements Component {
  // Children
  private children: Component[] = [];

  // Adds component to children array.
  add(component: Component) {
    this.children.push(component);
  }

  // Operation
  operation() {
    for (const component of this.children) {
      //Delegation
      component.operation();
    }
  }
}

export class Leaf implements Component {
  operation() {
    console.log("Leaf Operation");
  }
}

//Initialize four ellipses
const leaf1 = new Leaf();
const leaf2 = new Leaf();
const leaf3 = new Leaf();
const leaf4 = new Leaf();

// Create initial composite
const composite = new Composite();

// Create two composites containing the components
const composite1 = new Composite();
composite1.add(leaf1);
composite1.add(leaf2);
composite1.add(leaf3);

const composite2 = new Composite();
composite2.add(leaf4);

// Add composite 1 and 2 to initial composite
composite.add(composite1);
composite.add(composite2);

// Call composite operation which will call component operation of all child components
// Leaf operation for 1..4
composite.operation();
