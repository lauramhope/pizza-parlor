// Business Logic

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.costCalculate = function() {
  if (this.size === "large") {
    sizeCost = 20;
  } else if (this.size === "medium") {
    sizeCost = 18; 
  } else if (this.size === "small") {
    sizeCost = 15; 
  }
  return sizeCost; 
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