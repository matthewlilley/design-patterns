export class Delegatee {
  operation() {
    return "Delegatee operation";
  }
}

export class Delegator {
  delegatee: Delegatee;
  constructor(delegatee: Delegatee) {
    this.delegatee = delegatee;
  }
  operation() {
    return this.delegatee.operation();
  }
}

const delegatee = new Delegatee();

const delegator = new Delegator(delegatee);

console.log(delegator.operation());
