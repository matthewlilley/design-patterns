export abstract class Handler {
  protected successor?: Handler;

  constructor(successor?: Handler) {
    this.successor = successor;
  }

  handle(request: number) {
    this.successor?.handle(request);
  }
}

export class Reciever1 extends Handler {
  handle(request: number): void {
    if (request >= 0 && request < 10) {
      console.log(`${this.constructor.name} handled request ${request}`);
    } else {
      super.handle(request);
    }
  }
}

export class Reciever2 extends Handler {
  handle(request: number): void {
    if (request >= 10 && request < 20) {
      console.log(`${this.constructor.name} handled request ${request}`);
    } else {
      super.handle(request);
    }
  }
}

export class Reciever3 extends Handler {
  handle(request: number): void {
    if (request >= 20 && request < 30) {
      console.log(`${this.constructor.name} handled request ${request}`);
    } else {
      super.handle(request);
    }
  }
}

const handler: Handler = new Reciever1(new Reciever2(new Reciever3()));

const requests: number[] = [3, 6, 9, 12, 15, 18, 21, 24, 27];

for (const request of requests) {
  handler.handle(request);
}
