export enum FruitType {
  none,
  apple,
  banana,
}

export class Fruit {
  private static readonly types: Map<FruitType, Fruit> = new Map();
  public static getFruitByType(type: FruitType) {
    if (!Fruit.types.has(type)) {
      const fruit = new Fruit();
      Fruit.types.set(type, fruit);
    }
    return Fruit.types.get(type);
  }
}

console.log(Fruit.getFruitByType(FruitType.none));
console.log(Fruit.getFruitByType(FruitType.apple));
console.log(Fruit.getFruitByType(FruitType.banana));
