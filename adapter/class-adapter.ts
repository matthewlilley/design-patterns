export interface Target {
  operation(): void;
}

export class Adaptee {
  specificOperation() {
    console.log("specificOperation");
  }
}

export class Adapter extends Adaptee implements Target {
  operation() {
    this.specificOperation();
  }
}

// No need to create adaptee

// Create adapter which inherits adaptee
const adapter = new Adapter();

// Example client requires a parameter which satisfies Target interface
function client(target: Target) {
  target.operation();
}

client(adapter);
