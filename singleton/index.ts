export class Singleton {
  static instance: Singleton;
  static getInstance() {
    // Lazy loading
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

// Always the same instance
console.log(Singleton.getInstance());
