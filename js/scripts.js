// Business Logic

function Pizza(size, topping) {
  this.size = size;
  this.toppings = [topping];
  this.cost = [];
}

Pizza.prototype.addToppings = function (newTopping) {
  this.toppings.push(newTopping);
};

Pizza.prototype.fullPizza = function () {
  return this.size + ": " + this.toppings; 
}

Pizza.prototype.costCalculate = function() {
  if (this.size === "large") {
    this.cost = 12;
  } else if (this.size === "medium") {
    this.cost = 10; 
  } else if (this.size === "small") {
    this.cost = 8; 
  }
  return this.costCalculate();
}

// Pizza.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }

// User Interface Logic

let pizza = new Pizza();

function hideToppings () {
  document.getElementById("hidden-large").setAttribute("class", "hidden");
  document.getElementById("hidden-medium").setAttribute("class", "hidden");
  document.getElementById("hidden-small").setAttribute("class", "hidden");
}

function handleRadio(event) {
  event.preventDefault();
  const radioSize = document.querySelector("input[name='size']:checked").value;

  hideToppings();

  if (radioSize === "large") {
    document.getElementById("hidden-large").removeAttribute("class");
  } else if (radioSize === "medium") {
    document.getElementById("hidden-medium").removeAttribute("class");
  } else if (radioSize === "small") {
    document.getElementById("hidden-small").removeAttribute("class");
  } 
}

function calculatePrice(topping) {
  const toppingSelections = document.querySelectorAll("input[name=topping-option]:checked");
  if (toppingSelections === "")
}


function handleFormSubmission(event) {
  event.preventDefault();


}

window.addEventListener("load", function() {
  document.querySelector("#size-select").addEventListener("click",handleRadio);
  document.querySelector("#pizza-submit").addEventListener("click",handleFormSubmission); 
})