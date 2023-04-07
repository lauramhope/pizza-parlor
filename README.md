```
Describe: Pizza()

Test: "It will create a pizza object with keys for size and toppings."
Code: let testPizza = new Pizza("medium", "pepperoni");
Expected Output: (size: "medium", toppings: "pepperoni");

Test: "It will create a pizza with an array for multiple toppings chosen."
Code: let testPizza = new Pizza("medium",['pepperoni','olives']);
Expected Output: (size: "medium", toppings: ['pepperoni', 'olives']); 

Pizza.prototype.addToppings()

Test: "It will create a function that will push new toppings chosen into the Pizza toppings array."
Code: testPizza.addToppings('peppers');
Expected Output: (size: "medium", toppings: ['pepperoni', 'olives','peppers']); 

Pizza.prototype.fullPizza()

Test: "It will return a string to display the size and toppings chosen."
Code: testPizza.fullPizza();
Expected Output: 'medium: peppers,sausage,olives'





```

