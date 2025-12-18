// E-commerce Product System

class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  getDiscountedPrice(discountPercent) {
    return this.price * (1 - discountPercent / 100);
  }

  displayInfo() {
    return `Product: ${this.name} - Price: $${this.price.toFixed(
      2
    )}, Category: ${this.category}`;
  }
}

class Electronics extends Product {
  constructor(name, price, brand, warranty) {
    super(name, price, "Electronics");
    this.brand = brand;
    this.warranty = warranty; // in months
  }

  displayInfo() {
    return `${super.displayInfo()} - Brand: ${this.brand}, Warranty: ${
      this.warranty
    } months`;
  }
}

class Book extends Product {
  constructor(name, price, author, numberOfPages) {
    super(name, price, "Book");
    this.author = author;
    this.numberOfPages = numberOfPages;
  }

  displayInfo() {
    return `${super.displayInfo()} - Author: ${this.author}, Pages: ${
      this.numberOfPages
    }`;
  }
}

// Example usage:

const products = [
  new Electronics("Laptop", 999, "Dell", 24),
  new Book("JavaScript Guide", 29.99, "John Doe", 350),
  new Electronics("Smartphone", 699, "Samsung", 12),
  new Book("Learning Python", 39.99, "Jane Smith", 500),
];

products.forEach((product) => {
  console.log(product.displayInfo());
  console.log(
    `Sale Price: $${product.getDiscountedPrice(10).toFixed(2)} (10% off)`
  );
});
