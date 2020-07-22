export abstract class Mediator {
  abstract mediate(colleague: Colleague): void;
}

export class ConcreteMediator extends Mediator {
  private colleague1?: ConcreteColleague1;
  private colleague2?: ConcreteColleague2;
  setColleagues(
    colleague1: ConcreteColleague1,
    colleague2: ConcreteColleague2
  ) {
    this.colleague1 = colleague1;
    this.colleague2 = colleague2;
  }
  mediate(colleague: Colleague) {
    if (colleague == this.colleague1) {
      this.colleague2?.action2(this.colleague1.getState());
    }
    if (colleague == this.colleague2) {
      this.colleague1?.action1(this.colleague2.getState());
    }
  }
}

export abstract class Colleague {
  mediator: Mediator;
  constructor(mediator: Mediator) {
    this.mediator = mediator;
  }
}

export class ConcreteColleague1 extends Colleague {
  private state?: string;
  constructor(mediator: Mediator) {
    super(mediator);
  }
  setState(state: string) {
    this.state = state;
    console.log(`Concrete colleague 1 state changed to ${this.state}`);
    console.log("Calling mediator");
    this.mediator.mediate(this);
  }
  getState() {
    return this.state;
  }
  action1(state?: string) {
    this.state = state;
    console.log(`Concrete colleague 1 state synchronized to ${this.state}`);
  }
}

export class ConcreteColleague2 extends Colleague {
  private state?: string;
  constructor(mediator: Mediator) {
    super(mediator);
  }
  setState(state: string) {
    this.state = state;
    console.log(`Concrete colleague 2 state changed to ${this.state}`);
    console.log("Calling mediator");
    this.mediator.mediate(this);
  }
  getState() {
    return this.state;
  }
  action2(state?: string) {
    this.state = state;
    console.log(`Concrete colleague 2 state synchronized to ${this.state}`);
  }
}

const mediator = new ConcreteMediator();

const colleague1 = new ConcreteColleague1(mediator);
const colleague2 = new ConcreteColleague2(mediator);

mediator.setColleagues(colleague1, colleague2);

console.log("(1) Changing state of ConcreteColleague1 ...");
colleague1.setState("Hello World1!");

console.log("(2) Changing state of ConcreteColleague2 ...");
colleague1.setState("Hello World2!");
