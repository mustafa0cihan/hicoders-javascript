// Algorithm steps
// 1-Start
// 2-Request three numbers from the user.
// 3-If the 1st number is bigger than the 2nd number and the 3rd number, print "1st number is the biggest".
// 4-if not, compare the 2nd number with the 3rd number.
// If the 2nd number is bigger than the 3rd number, print "2nd number is the biggest". Otherwise, print "3rd number is biggest".
// 5-Finish


// As the first step, the "find" function, which will perform the operation, is defined.

function find (firstNumber, secondNumber, thirdNumber) {
  let max;
  if ((firstNumber > secondNumber) && (firstNumber > thirdNumber)) {
    max = firstNumber;
  }
  else if (secondNumber > thirdNumber) {
    max = secondNumber;
  }
  else max = thirdNumber;
  return max;
}

// In the function, two values taken from the user were assigned to the variables named "firstNumber", "secondNumber" and "thirdNumber".
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

let thirdNumber = prompt("Please write 3. number");
document.getElementById("third-number").innerHTML = thirdNumber;
alert("Your third number is " + thirdNumber);
console.log("Your third number is " + thirdNumber);

// Finally, the max value obtained as a result of the "find" function is assigned to the "result" variable.
// The result of the operation is printed both on the screen and on the console.

result = find(firstNumber, secondNumber, thirdNumber);
alert(result + " is the biggest number");
console.log(result + " is the biggest number");
