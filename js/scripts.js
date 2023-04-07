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

