var num1 = window.prompt("Please enter a number: ");
num1 = parseFloat(num1);

var num2 = window.prompt("Please enter a second number: ");
num2 = parseFloat(num2)

var operator = window.prompt("Please enter any of the following operators: +, -, *, /");

if (operator == "+") {
  sum = num1 + num2;
  console.log("The sum of num1 and num2 is" + sum);
} else if (operator == "-") {
  difference = num1 - num2;
  console.log("The difference between num1 and num2 is " + difference);
} else if (operator == "*") {
  product = num1 * num2;
  console.log("The product of num1 and num2 is " + product);
} else if (operator == "/") {
  quotient = num1 / num2;
  console.log("The quotient of num1 and num2 is " + quotient);
}else{
  console.log("Please enter a valid operator");
}