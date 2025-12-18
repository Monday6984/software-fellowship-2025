import { CartItem } from "./cartItem.js";

export class Cart {
  constructor() {
    this.items = new Map(); // key: productId, value: CartItem
  }

  addItem(product, quantity = 1) {
    if (this.items.has(product.id)) {
      const existingItem = this.items.get(product.id);
      existingItem.quantity += quantity;
    } else {
      this.items.set(product.id, new CartItem(product, quantity));
    }
  }

  removeItem(productId) {
    this.items.delete(productId);
  }

  getTotal() {
    let total = 0;
    for (const item of this.items.values()) {
      total += item.getTotal();
    }
    return total;
  }

  getItemCount() {
    let count = 0;
    for (const item of this.items.values()) {
      count += item.quantity;
    }
    return count;
  }
}
