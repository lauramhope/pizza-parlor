# _Pizza-Parlor_

#### By **Laura Hope**

#### _Application demonstration user form submission with drop down boxes, checkboxes, and prototypes to generate output based on selections_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _Bootstrap_

## Description

_This application showcases intermediate-level JavaScript skills using constructor functions, cunstom prototypes, and input forms with checkboxes and drop down selection boxes. User can input a pizza size and selected toppings to generate an output for price based on selections._

## Setup/Installation Requirements

* _Clone “pizza-parlor“ from the repository to your desktop_
* _Open “pizza-parlor“ directory_
* _Open “index.html“ file in your browser_

## Tests
```
Describe: Pizza()

Test: "It will create a pizza object with keys for size and toppings."
Code: let testPizza = new Pizza("medium", "pepperoni");
Expected Output: (size: "medium", toppings: "pepperoni");

Test: "It will create a pizza with an array for multiple toppings chosen."
Code: let testPizza = new Pizza("medium",['pepperoni','olives']);
Expected Output: (size: "medium", toppings: ['pepperoni', 'olives']); 

Describe: Pizza.prototype.addToppings()

Test: "It will create a function that will push new toppings chosen into the Pizza toppings array."
Code: testPizza.addToppings('peppers');
Expected Output: (size: "medium", toppings: ['pepperoni', 'olives','peppers']); 

Describe: Pizza.prototype.fullPizza()

Test: "It will return a string to display the size and toppings chosen."
Code: testPizza.fullPizza();
Expected Output: 'medium: pepperoni, olives, peppers'

Describe: Pizza.prototype.sizeCostCalculate()

Test: "It will return the cost of the pizza (without toppings) based on the size selected."
Code: testPizza.sizeCostCalculate();
Expected Output: 'cost: 18'

```
## Known Bugs

* _No known bugs as of 4/7/23_

## License

MIT License

Copyright (c) [2023] [Laura Hope]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

_If you run into any issues or have questions, ideas or concerns, please reach out to me via email: lauramhope.dpt@gmail.com.  Contributions to the code are highly encouraged._

