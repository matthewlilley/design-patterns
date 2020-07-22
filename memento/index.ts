export class Originator {
  // Hiding internal state.
  private state?: string;

  // Saving internal state.
  createMemento() {
    const memento = new Memento();
    memento.setState(this.state);
    return memento;
  }

  restore(memento: Memento) {
    this.state = memento.getState();
  }

  getState() {
    return this.state;
  }

  setState(state: string) {
    this.state = state;
  }
}

export class Memento {
  // Storing Originator's internal state.
  private state?: string;

  getState() {
    return this.state;
  }

  setState(state?: string) {
    this.state = state;
  }
}

const originator = new Originator();

const mementos = [];

originator.setState("A");

// Saving state.
let memento = originator.createMemento();
mementos.push(memento); // add to list
console.log("(1) Saving current state ...... : " + originator.getState());
originator.setState("B");

// Saving state.
memento = originator.createMemento();
mementos.push(memento); // add to list
console.log("(2) Saving current state ...... : " + originator.getState());

memento = mementos[0]; // getting previous (first) memento from the list
originator.restore(memento);
console.log("(3) Restoring to previous state : " + originator.getState());
