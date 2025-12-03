// Create a Car object with an image property
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "Blue",
  image:
    "https://carsales.pxcrush.net/carsales/cars/dealer/7ajb8pggioceez2do9rk1kt6y.jpg?pxc_method=fitfill&pxc_bgtype=self&pxc_size=720,480",
  start: function () {
    return "The car has started!";
  },
};

// Function to display car properties including the image
function showCarDetails() {
  let details =
    `<strong>Brand:</strong> ${car.brand}<br>` +
    `<strong>Model:</strong> ${car.model}<br>` +
    `<strong>Year:</strong> ${car.year}<br>` +
    `<strong>Color:</strong> ${car.color}<br><br>` +
    `<strong>Action:</strong> ${car.start()}<br><br>` +
    `<img src='${car.image}' alt='Car Image' />`;

  document.getElementById("output").innerHTML = details;
}
