export enum MultitonType {
  zero,
  one,
  two,
}

export class Multiton {
  private static readonly instances: Map<MultitonType, Multiton> = new Map();
  readonly number: number;
  constructor(number: number) {
    this.number = number;
  }
  static getInstance(type: MultitonType) {
    if (!Multiton.instances.has(type)) {
      Multiton.instances.set(type, new Multiton(type));
    }

    return Multiton.instances.get(type);
  }
}

console.log(Multiton.getInstance(MultitonType.zero));
console.log(Multiton.getInstance(MultitonType.one));
console.log(Multiton.getInstance(MultitonType.two));
