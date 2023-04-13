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

Describe: Pizza.prototype.costCalculate()

Test: "It will return the cost of the pizza (without toppings) based on the size 'small' selected."
Code: testPizza.costCalculate("small");
Expected Output: small: '15'

Test: "It will return the cost of the pizza (without toppings) based on the size 'medium' selected."
Code: testPizza.costCalculate("medium");
Expected Output: medium: '18'

Test: "It will return the cost of the pizza (without toppings) based on the size 'large' selected."
Code: testPizza.costCalculate("large");
Expected Output: large: '20'

Test: "It will determine the cost of the pizza based on the size 'small' selected and 1 topping added."
Code: testPizza.costCalculate("small", ["olives"]);
Expected Output: small: '16'

Test: "It will determine the cost of the pizza based on the size 'medium' selected and 2 toppings added."
Code: testPizza.costCalculate("medium", ["olives","pepperoni"]);
Expected Output: medium: '20'

Test: "It will determine the cost of the pizza based on the size 'large' selected and 3 toppings added."
Code: testPizza.costCalculate("large", ["olives","pepperoni","ham"]);
Expected Output: large: '23'

Describe: Pizza.prototype.addTopping()

Test: "It will create a pizza with an array for multiple toppings chosen."
Code: testPizza.addTopping("medium",['pepperoni','olives']);
Expected Output: (size: "medium", toppings: ['pepperoni', 'olives']); 

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

