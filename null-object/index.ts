export enum AnimalType {
  cat,
  dog,
}

export class Cat {
  sound() {
    return "meow";
  }
}

export class Dog {
  sound() {
    return "bark";
  }
}

export class NullAnimal {
  sound() {
    return null;
  }
}

function getAnimal(type?: AnimalType | string | null) {
  if (type === AnimalType.cat) {
    return new Cat();
  } else if (type === AnimalType.dog) {
    return new Dog();
  }
  return new NullAnimal();
}

// meow
console.log(getAnimal("cat").sound());

// bark
console.log(getAnimal("dog").sound());

// null
console.log(getAnimal().sound());
