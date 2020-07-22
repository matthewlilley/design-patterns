export class Factory {
  static createOrder() {
    console.log("Order object created.");
    return new Order();
  }
  static createProduct() {
    console.log("Product object created.");
    return new Product();
  }
}

export interface Order {}
export interface Product {}

export class Order implements Order {}

export class Product implements Product {}

console.log("Creating an order object:");
Factory.createOrder();

console.log("Creating a product object:");
Factory.createProduct();
