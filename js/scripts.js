// Business Logic

function Pizza(size, topping) {
  this.size = size;
  this.toppings = topping;
  this.cost = 0; 
}

Pizza.prototype.addTopping = function(newTopping) {
  this.toppings.push(newTopping);
}

Pizza.prototype.costCalculate = function() {
  let numToppings = this.toppings.length;
  this.cost += (numToppings * 1);
  if (this.size === "large") {
    this.cost += 20;
  } else if (this.size === "medium") {
    this.cost += 18; 
  } else if (this.size === "small") {
    this.cost += 15; 
  }
  return this.cost; 
}
// User Interface Logic

function handleFormSubmission(event) {
  event.preventDefault();
  let inputToppingsArray = []
  const sizeSelect = document.querySelector("select#select-size").value;
  const inputToppings = document.querySelectorAll("input[name='topping-option']:checked");
  for (let i = 0; i < inputToppings.length; i++) {
    if (inputToppings[i].checked) {
      inputToppingsArray.push(inputToppings[i].id)
    }
  }
  let newPizza = new Pizza(sizeSelect, inputToppingsArray);
  let pizzaTotal = newPizza.costCalculate();
  let displayTotalDiv = document.querySelector("#hidden-total");
  let displaySize = document.querySelector("span#size-display");
  let displayToppings = document.getElementById("toppings-display");
  let displayPrice = document.querySelector("span#total");
  displayTotalDiv.removeAttribute("class","hidden");
  displaySize.innerText = newPizza.size; 
  displayToppings.innerText = newPizza.toppings.toString();
  displayPrice.innerText = pizzaTotal; 
}

window.addEventListener("load", function() {
  document.querySelector("#pizza-submit").addEventListener("click",handleFormSubmission); 
})