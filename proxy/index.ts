export interface Subject {
  operation(): void;
}

export class Subject implements Subject {
  operation() {
    console.log("Subject operation");
  }
}

export class Proxy {
  subject: Subject;
  constructor(subject: Subject) {
    this.subject = subject;
  }
  operation() {
    console.log("Pre subject operation");
    this.subject.operation();
    console.log("Post subject operation");
  }
}

const subject = new Subject();

const proxy = new Proxy(subject);

console.log(proxy.operation());
