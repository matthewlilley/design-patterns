export class Context {
  private state: State;
  constructor(state: State) {
    this.state = state;
  }
  operation() {
    return (
      "Context: Delegating state-specific behavior to the current State object.\n" +
      this.state.operation(this)
    );
  }
  setState(state: State) {
    this.state = state;
  }
}

export interface State {
  operation(context: Context): string;
}

export class State1 implements State {
  // Implemented as Singleton.
  private static readonly INSTANCE: State1 = new State1();
  private constructor() {}
  static getInstance(): State1 {
    return State1.INSTANCE;
  }
  operation(context: Context) {
    const result =
      "    State1 : Hello World1!" +
      " Changing current state of Context to State2.";
    context.setState(State2.getInstance()); // state transition
    return result;
  }
}

export class State2 implements State {
  // Implemented as Singleton.
  private static readonly INSTANCE: State2 = new State2();
  private constructor() {}
  static getInstance(): State2 {
    return State2.INSTANCE;
  }
  operation(context: Context) {
    const result =
      "    State2 : Hello World1!" +
      " Changing current state of Context to State1.";
    context.setState(State1.getInstance()); // state transition
    return result;
  }
}

// Creating a Context object
// and configuring it with the initial State1 object.
const context = new Context(State1.getInstance());

// Calling an operation on context.
console.log("(1) " + context.operation());

// Calling the operation again.
console.log("(2) " + context.operation());
