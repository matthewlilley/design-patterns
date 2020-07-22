export interface Observer {
  update(subject: Subject): void;
}

export class Observer implements Observer {
  update(subject: Subject) {
    if (subject.state === "new state") {
      console.log(
        `Subject state changed to ${subject.state} therefore Observer reacted`
      );
    }
  }
}

export class Subject {
  state: string = "initial state";
  observers: Observer[] = [];
  register(observer: Observer) {
    if (!this.observers.includes(observer)) {
      console.log("Register observer");
      this.observers.push(observer);
    }
  }
  unregister(observer: Observer) {
    if (this.observers.includes(observer)) {
      console.log("Unregister observer");
      this.observers.splice(this.observers.indexOf(observer), 1);
    }
  }
  notify() {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
  setState(state: string) {
    this.state = state;
    this.notify();
  }
}

const subject = new Subject();

const observer = new Observer();

subject.register(observer);

subject.setState("new state");

subject.unregister(observer);
