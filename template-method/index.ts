export abstract class AbstractClass {
  protected abstract primitive1(): void;
  protected abstract primitive2(): void;
  readonly templateMethod = () => {
    this.primitive1();
    this.primitive2();
  };
}

export class SubClass1 extends AbstractClass {
  protected primitive1() {}
  protected primitive2() {}
}
