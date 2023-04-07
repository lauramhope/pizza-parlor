// Business Logic

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.sizeCostCalculate = function(sizeCost) {
  if (this.size === "large") {
    sizeCost = 15;
  } else if (this.size === "medium") {
    sizeCose = 18; 
  } else if (this.size === "small") {
    sizeCost = 20; 
  }
  return sizeCost; 
}

Pizza.prototype.fullPizza = function () {
  return this.size + ": " + this.toppings; 
}

// User Interface Logic

let newPizza = new Pizza()

function handleRadio() {
  const radioSize = document.querySelector("input[name='size']:checked").value;
  if (radioSize === "large") {
    newPizza.size = "large";
  } else if (radioSize === "medium") {
    newPizza.size = "medium";
  } else if (radioSize === "small") {
    newPizza.size = "small";
  };
  return newPizza.size; 
}

function handleFormSubmission(event) {
  event.preventDefault();
  handleRadio();
  const inputToppings = document.querySelectorAll("input[name='topping-option']:checked");
  const inputToppingsArray = Array.from(inputToppings);
  for (let i = 0; i < inputToppings.length; i++) {
    if (inputToppings[i].checked) {
      inputToppingsArray.push(inputToppings[i].id)
    }
  };

  let pizzaTotal = newPizza.sizeCostCalculate();
  let displayTotalDiv = document.querySelector("#hidden-total");
  displayTotalDiv.removeAttribute("class","hidden");
  let displaySize = document.querySelector("span#size-display");
  displaySize.innerText = newPizza.size; 
  let displayToppings = document.querySelector("span#toppings-display");
  displayToppings.innerText = newPizza.toppings; 
  let displayPrice = document.querySelector("span#total");
  displayPrice.innerText = pizzaTotal; 
}

window.addEventListener("load", function() {
  document.querySelector("#pizza-submit").addEventListener("click",handleFormSubmission); 
})