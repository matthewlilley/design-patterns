export class Context {}

export abstract class AbstractExpression {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract interpret(context: Context): void;
  getName() {
    return this.name;
  }
  add(e: AbstractExpression): boolean {
    // fail by default
    return false;
  }
}

export class NonTerminalExpression extends AbstractExpression {
  private expressions: AbstractExpression[] = [];
  constructor(name: string) {
    super(name);
  }
  interpret(context: Context) {
    console.log(this.getName() + ": ");
    for (const expression of this.expressions) {
      console.log("  interpreting ... " + expression.getName());
      expression.interpret(context);
    }
    console.log(this.getName() + " finished.");
  }
  add(e: AbstractExpression) {
    this.expressions.push(e);
    return true;
  }
}

export class TerminalExpression extends AbstractExpression {
  constructor(name: string) {
    super(name);
  }
  interpret(context: Context): void {
    // ...
  }
}

// Building an abstract syntax tree (AST).
const ntExpr2 = new NonTerminalExpression("ntExpr2");
ntExpr2.add(new TerminalExpression(" tExpr3"));
ntExpr2.add(new TerminalExpression(" tExpr4"));
ntExpr2.add(new TerminalExpression(" tExpr5"));

const ntExpr1 = new NonTerminalExpression("ntExpr1");
ntExpr1.add(new TerminalExpression(" tExpr1"));
ntExpr1.add(ntExpr2);
ntExpr1.add(new TerminalExpression(" tExpr2"));

const context = new Context();

// Interpreting the AST (walking the tree).
ntExpr1.interpret(context);
