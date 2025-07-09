/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

//This works because implicit type conversion converts the string "5" into a number,
//because it is a string which has a number subtracted from it.
let result = "5" - 2;
console.log("The result is: " + result);

//This result does not work because the string "false" is truthy, and so when explicitly
//converted to boolean, returns true.
let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

//This implictly converted 5 into a string as a result of being added to a string. 
//Applying Number() to age fixes the problem.
let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);

//Part 2

//Implicit

let weeksInYear = "52"
let daysInWeek = 7;

console.log(weeksInYear);
console.log(daysInWeek);

console.log(weeksInYear * daysInWeek);

//Explict
let placeHolder;

console.log(placeHolder);

console.log(String(placeHolder));