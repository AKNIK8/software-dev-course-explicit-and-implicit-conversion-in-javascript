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


let result = "5" - 2;
console.log("The result is: " + result);        // This is an example of an implict conversion where the string "5" is converted to a number when the subtraction is taking place.

let isValid = Boolean("false");                 // I don't beleive this has any errors or if it does I am not sure what the code is attempting to accomplish. 
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5;                 // I added Number(age) to convert the string "25" to a number in order for it to add 25 + 5 to equal 30
console.log("Total Age: " + totalAge)

let statement = "The customer total due is:" + 75         // This string statement with an addition operation converts the number to a string. 
console.log(statement);
console.log(typeof statement);

let greeting = "Good afternoon!";
console.log(Boolean(greeting));                     //A string is true and that is what the result of the console.log operation says. 
console.log(typeof statement);