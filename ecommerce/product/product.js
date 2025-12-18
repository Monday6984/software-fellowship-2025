export class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  formatPrice() {
    return `$${this.price.toFixed(2)}`;
  }
}
