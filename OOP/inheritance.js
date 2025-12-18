// JavaScript OOP Inheritance Example

// Base class

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }

  eat() {
    return `${this.name} is eating....`;
  }
}

// child class Dog that inherits from Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  // Overriding the speak method
  speak() {
    return `${this.name}  is barking.`;
  }

  // New method specific to Dog class
  fetch() {
    return `${this.name} is fetching the ball.`;
  }
}

const animal = new Animal("Lion");

const dog = new Dog("Buddy", "Golden Retriever");
console.log(animal.speak());
console.log(dog.speak());
