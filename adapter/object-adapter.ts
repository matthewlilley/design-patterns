export interface Target {
  operation(): void;
}

export class Adapter implements Target {
  adaptee: Adaptee;
  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }
  operation() {
    this.adaptee.specificOperation();
  }
}

export class Adaptee {
  specificOperation() {
    console.log("specificOperation");
  }
}

// Create adaptee
const adaptee = new Adaptee();

// Create adapter and compose by delegation instead of inheritence
const adapter = new Adapter(adaptee);

// Example client requires a parameter which satisfies Target interface
function client(target: Target) {
  target.operation();
}

client(adapter);
