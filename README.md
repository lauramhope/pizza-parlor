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
Expected Output: testPizza = (size: "medium", topping: "pepperoni");

Describe: Pizza.prototype.costCalculate()

Test: "It will return a default cost of $100 for a default size pizza if size small, medium, or large is not selected."
Code: let testPizza = new Pizza ("", []);
testPizza.costCalculate();
Expected Output: testPizza = '100';

Test: "It will return the cost of the pizza (without toppings) based on the size 'small' selected."
Code: let testPizza = new Pizza("small", []);
testPizza.costCalculate();
Expected Output: testPizza = '15';

Test: "It will return the cost of the pizza (without toppings) based on the size 'medium' selected."
Code: let testPizza = new Pizza("medium", []);
testPizza.costCalculate();
Expected Output: testPizza = '18';

Test: "It will return the cost of the pizza (without toppings) based on the size 'large' selected."
Code: let testPizza = new Pizza("large", []);
testPizza.costCalculate();
Expected Output: testPizza = '20';

Test: "It will increase the total cost of the pizza by 1 dollar for 1 topping added."
Code: let testPizza = new Pizza("small", ['olives']);
testPizza.costCalculate();
Expected Output: testPizza = '16';

Test: "It will increase the total cost of the pizza by 1 dollar per topping for multiple toppings added."
Code: let testPizza = new Pizza("medium", ['olives','pepperoni'])
testPizza.costCalculate();
Expected Output: testPizza= '20';

```
## Known Bugs

* _No known bugs as of 4/13/23_

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

