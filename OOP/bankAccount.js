class BankAccount {
  #balance; // Private field

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  // Public methods to interact with private data
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    }
  }

  getBalance() {
    return this.#balance;
  }

  // getBalance = () => this.#balance;
}

const account = new BankAccount(100); // Initial balance of 100
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance()); // Should output 120
