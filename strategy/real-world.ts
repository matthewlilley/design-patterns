export interface Strategy {
  calculate(): number | string;
}

export class DiceRollStrategy implements Strategy {
  calculate() {
    return Math.round((Math.random() * 100) % 6);
  }
}

export class CoinFlipStrategy implements Strategy {
  calculate() {
    const rng = Math.random();
    if (rng >= 0.5) {
      return "tails";
    } else {
      return "heads";
    }
  }
}

export class Game {
  strategy?: Strategy;
  constructor(strategy?: Strategy) {
    this.strategy = strategy;
  }
  setStategy(strategy: Strategy) {
    this.strategy = strategy;
  }
  calculate() {
    if (!this.strategy) {
      throw Error("No strategy!");
    }
    return this.strategy.calculate();
  }
}

const game = new Game();

game.setStategy(new DiceRollStrategy());

console.log(game.calculate());

game.setStategy(new CoinFlipStrategy());

console.log(game.calculate());
