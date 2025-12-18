// import { Cart, CartItem } from "./cart/index.js";
// import { Product, ProductList } from "./product/index.js";
// import { formatCurrency } from "./utils/index.js";

// // Create a product list and add some products
// const productList = new ProductList();
// productList.addProduct(new Product(1, "Laptop", 999.99));
// productList.addProduct(new Product(2, "Smartphone", 499.99));
// productList.addProduct(new Product(3, "Headphones", 199.99));

// // Create a cart and add some items
// const cart = new Cart();
// cart.addItem(new CartItem(productList.getProductsById(1), 1)); // Laptop
// cart.addItem(new CartItem(productList.getProductsById(2), 2)); // 2 Smartphones

// // Display cart total
// console.log("Cart Summary:");
// console.log(`Cart Items: ${cart.getItemCount()}`);
// console.log(`cart Total: ${formatCurrency(cart.getTotal())}`);

// // Add more functionality as needed
// cart.addItem(productList.getProductsById(3), 1); // Add Headphones
// console.log("Updated Cart Summary:");
// console.log(`Cart Items: ${cart.getItemCount()}`);
// console.log(`Cart Total: ${formatCurrency(cart.getTotal())}`);

import { Cart, CartItem } from "./cart/index.js";
import { Product, ProductList } from "./product/index.js";
import { formatCurrency } from "./utils/index.js";

/* =====================
   STATE
===================== */
const productList = new ProductList();
const cart = new Cart();

/* =====================
   DOM ELEMENTS
===================== */
const productListEl = document.getElementById("product-list");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");

/* =====================
   INITIAL DATA
===================== */
productList.addProduct(new Product(1, "Laptop", 500));
productList.addProduct(new Product(2, "Smartphone", 499));
productList.addProduct(new Product(3, "Headphones", 199));

/* =====================
   RENDER FUNCTIONS
===================== */
function renderProducts() {
  productListEl.innerHTML = "";

  productList.getAllProducts().forEach((product) => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <h4>${product.name}</h4>
      <p>${formatCurrency(product.price)}</p>
      <button data-id="${product.id}">Add to Cart</button>
    `;

    productListEl.appendChild(div);
  });
}

function renderCart() {
  cartItemsEl.innerHTML = "";

  cart.items.forEach((item) => {
    if (!item.product) return;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <span>${item.product.name} (x${item.quantity})</span>
      <strong>${formatCurrency(item.getTotal())}</strong>
    `;

    cartItemsEl.appendChild(div);
  });

  cartTotalEl.textContent = formatCurrency(cart.getTotal());
}

/* =====================
   EVENTS
===================== */
productListEl.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const productId = Number(e.target.dataset.id);
    const product = productList.getProductsById(productId);

    if (!product) return;

    cart.addItem(new CartItem(product, 1));
    renderCart();
  }
});

/* =====================
   INIT
===================== */
renderProducts();
renderCart();
