class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance method
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  // Static method
  static species() {
    return "Homo sapiens";
  }
}

// Using this class
const person = new Person("Charlie", 28);
console.log(person.greet()); // Hello, my name is Charlie and I am 28 years old.
console.log(Person.species()); // Homo sapiens

const ben = new Person("Ben", 35, "male");
const bolu = new Person("Bolu", 14, "female");

console.log(ben.greet(), bolu.greet(), Person.species());
