export class Invoker {
  private command: Command;
  constructor(command: Command) {
    this.command = command;
  }
  operation() {
    this.command.execute();
  }
}

export interface Command {
  execute(): void;
}

export class Command1 implements Command {
  private reciever1: Receiver1;
  constructor(reciever1: Receiver1) {
    this.reciever1 = reciever1;
  }
  execute() {
    console.log("Command1 : Performing (carrying out) the request ...");
    this.reciever1.action1();
  }
}

export class Receiver1 {
  action1() {
    console.log("Receiver1: Hello World1!");
  }
}

const invoker = new Invoker(new Command1(new Receiver1()));

invoker.operation();
