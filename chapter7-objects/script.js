// creating and displaying variables
// let car = "Flat";
// document.getElementById("demo").innerText = car;

// create a object:
const car = {
  type : "Flat",
  model : "5000", 
  color : "Red & Black",
  carOwner : function() {
    return "I am the owner of this car";
  }
};

// Display some data from the object:
document.getElementById("demo1").innerText = "The car type is: " + car.type;
document.getElementById("demo2").innerText = "The car mode is: " + car.model;
document.getElementById("demo3").innerText = "The car color is: " + car["color"];
document.getElementById("demo4").innerText = car.carOwner();