export interface Aggregate<T> {
  createIterator(): Iterator<T>;
  add(element: T): boolean;
  getSize(): number;
  get(index: number): T;
}

export interface Iterator<T> {
  next(): T;
  hasNext(): boolean;
}

export class Aggregate1<T> implements Aggregate<T> {
  private data: T[] = [];
  private index: number = 0;
  private size: number;
  constructor(size: number) {
    if (size < 0) {
      throw new Error("size: " + size);
    }
    this.size = size;
  }
  add(element: T) {
    if (this.index < this.size) {
      this.data[this.index++] = element;
      return true;
    }
    return false;
  }

  get(index: number) {
    return this.data[index];
  }

  getSize() {
    return this.size;
  }
  // Factory method for instantiating Iterator1.
  createIterator() {
    return new Iterator1<T>(this);
  }
}

export class Iterator1<T> implements Iterator<T> {
  // Holds the current position in the traversal.
  private cursor = 0; // index of next element to return
  private aggregate: Aggregate<T>;
  constructor(aggregate: Aggregate1<T>) {
    this.aggregate = aggregate;
  }

  hasNext() {
    return this.cursor < this.aggregate.getSize();
  }

  next() {
    if (this.cursor >= this.aggregate.getSize()) {
      throw new Error("No element");
    }

    return this.aggregate.get(this.cursor++);
  }
}

const aggregate = new Aggregate1<String>(3);

aggregate.add(" ElementA ");

aggregate.add(" ElementB ");

aggregate.add(" ElementC ");

const iterator = aggregate.createIterator();

console.log("Traversing the aggregate front-to-back:");

while (iterator.hasNext()) {
  console.log(iterator.next());
}
