export interface Coffee {
  cost(): number;
  ingredients(): string;
}

export class Coffee implements Coffee {
  cost() {
    return 1;
  }
  ingredients() {
    return "Coffee";
  }
}

// Abstract Decorator
export abstract class CoffeeDecorator implements Coffee {
  coffee: Coffee;
  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }
  cost() {
    return this.coffee.cost();
  }
  ingredients() {
    return this.coffee.ingredients();
  }
}

// With Milk
export class WithMilk extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }
  cost() {
    return super.cost() + 0.5;
  }
  ingredients() {
    return super.ingredients() + ", Milk";
  }
}

// With Sugar
export class WithSugar extends CoffeeDecorator {
  cost() {
    return super.cost() + 0.5;
  }
  ingredients() {
    return super.ingredients() + ", Sugar";
  }
}

let coffee = new Coffee();

coffee = new WithMilk(coffee);

coffee = new WithSugar(coffee);

console.log(coffee.ingredients());
console.log(coffee.cost());
