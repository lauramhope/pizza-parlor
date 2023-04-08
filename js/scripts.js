// Business Logic

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [toppings];
}

Pizza.prototype.sizeCostCalculate = function(sizeCost) {
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

let newPizza = new Pizza();

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
  let inputToppingsArray = []
  const inputToppings = document.querySelectorAll("input[name='topping-option']:checked");
  for (let i = 0; i < inputToppings.length; i++) {
    if (inputToppings[i].checked) {
      inputToppingsArray.push(inputToppings[i].id)
    }
  };

  let pizzaTotal = newPizza.sizeCostCalculate();
  let displayTotalDiv = document.querySelector("#hidden-total");
  let displaySize = document.querySelector("span#size-display");
  let displayToppings = document.getElementById("toppings-display");
  let displayPrice = document.querySelector("span#total");
  displayTotalDiv.removeAttribute("class","hidden");
  displaySize.innerText = newPizza.size; 
  displayToppings.innerText = newPizza.toppings;
  console.log(inputToppingsArray);
  displayPrice.innerText = pizzaTotal; 
}

window.addEventListener("load", function() {
  document.querySelector("#pizza-submit").addEventListener("click",handleFormSubmission); 
})