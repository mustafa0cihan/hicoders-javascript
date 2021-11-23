// Algorithm steps
// 1-Start
// 2-Request two numbers from the user.
// 3-If the first number received from the user is greater than the second number; output "first number is the largest number" to the screen.
// 4-If not, output "second number is the largest number".
// 5-Finish


// As the first step, the "find" function, which will perform the operation, is defined.

function find(firstNumber, secondNumber) {
  let max;
  if (firstNumber > secondNumber) {
    max = firstNumber;
  } else {
    max = secondNumber;
  }

  return max;
}

// In the function, two values taken from the user were assigned to the variables named "firstNumber" and "secondNumber".
// At the same time, changes were made in Html codes with the "inner HTML" method. 
// After these assignments, the status of the variables was reported to the user and also printed to the console.

let firstNumber = prompt("Please write 1. number");
document.getElementById("first-number").innerHTML = firstNumber;
alert("Your first number is " + firstNumber);
console.log("Your first number is " + firstNumber);

let secondNumber = prompt("Please write 2. number");
document.getElementById("second-number").innerHTML = secondNumber;
alert("Your second number is " + secondNumber);
console.log("Your second number is " + secondNumber);


// Finally, the max value obtained as a result of the "find" function is assigned to the "result" variable.
// The result of the operation is printed both on the screen and on the console.

result = find(firstNumber, secondNumber);
document.write(result + " is the biggest number");
alert(result + " is the biggest number");
console.log(result + " is the biggest number");
