export class SubsystemA {
  operationA1() {
    return "Subsystem A, Method A1\n";
  }
  operationA2() {
    return "Subsystem A, Method A2\n";
  }
}

export class SubsystemB {
  operationB1() {
    return "Subsystem B, Method B1\n";
  }

  operationB2() {
    return "Subsystem B, Method B2\n";
  }
}

export class SubsystemC {
  operationC1() {
    return "Subsystem C, Method C1\n";
  }

  operationC2() {
    return "Subsystem C, Method C2\n";
  }
}

export class Facade {
  private readonly a: SubsystemA = new SubsystemA();
  private readonly b: SubsystemB = new SubsystemB();
  private readonly c: SubsystemC = new SubsystemC();
  operation1() {
    console.log(
      "Operation 1\n" +
        this.a.operationA1() +
        this.b.operationB1() +
        this.c.operationC1()
    );
  }
  operation2() {
    console.log(
      "Operation 2\n" +
        this.a.operationA2() +
        this.b.operationB2() +
        this.c.operationC2()
    );
  }
}

const facade = new Facade();

facade.operation1();

facade.operation2();
