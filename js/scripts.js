// Business Logic

function Pizza(size, topping) {
  this.size = size;
  this.toppings = [topping];
}

Pizza.prototype.addToppings = function (newTopping) {
  this.toppings.push(newTopping);
};

Pizza.prototype.fullPizza = function () {
  return this.size + ": " + this.toppings; 
}

// Pizza.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }

// User Interface Logic

let pizza = new Pizza();

