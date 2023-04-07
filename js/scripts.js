// Business Logic

function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.addToppings = function (newTopping) {
  this.toppings.push(newTopping);
  let toppingsTotal = 0;
  let smallToppings = 1; 
  let mediumToppings = 2;
  let largeToppings = 3;
  let toppingsNum = this.toppings.length;
  
  if (this.size === "small") {
    toppingsTotal = (smallToppings * toppingsNum);
  } else if (this.size === "medium") {
    toppingsTotal = (mediumToppings * toppingsNum);
  } else if (this.size === "large") {
    toppingsTotal = (largeToppings * toppingsNum);
  }
  return toppingsTotal; 
};

Pizza.prototype.fullPizza = function () {
  return this.size + ": " + this.toppings; 
}

Pizza.prototype.sizeCostCalculate = function() {
  if (this.size === "large") {
    sizeCost = 12;
  } else if (this.size === "medium") {
    sizeCose = 10; 
  } else if (this.size === "small") {
    sizeCost = 8; 
  }
  return sizeCost; 
}

Pizza.prototype.totalCostCalculate = function() {
  this.totalCost = this.sizeCost + this.toppingsTotal; 
}

// Pizza.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }

// User Interface Logic

let pizza = new Pizza();

function hideToppings () {
  document.getElementById("hidden-large").setAttribute("class", "hidden");
  // document.getElementById("hidden-medium").setAttribute("class", "hidden");
  // document.getElementById("hidden-small").setAttribute("class", "hidden");
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

// function calculatePrice(topping) {
//   const toppingSelections = document.querySelectorAll("input[name=topping-option]:checked");


function handleFormSubmission(event) {
  event.preventDefault();


}

window.addEventListener("load", function() {
  document.querySelector("#size-select").addEventListener("click",handleRadio);
  document.querySelector("#pizza-submit").addEventListener("click",handleFormSubmission); 
})