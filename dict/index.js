"use strict";
// Basic course notes - Programming with Mosh
/**
 * tsc --init creates config file
 *
 * Important properties
 *
 * target
 * module
 * rootDir
 * outDir
 * removeComments
 * noEmitonError
 * strict
 * noImplicitAny
 * noUnusedParameters
 * noImplicitReturns
 * noUnusedLocalArguments
 *
 */
let numb = 5;
console.log(numb);
let numb2 = 5;
console.log(`Implicit type of ${numb} will be number`);
let numb3 = 123456789; // Format for long numbers
console.log(numb3);
let numb4 = "5"; // Asign two possible types or more to a var
console.log(numb4);
numb4 = 10;
console.log(numb4);
let calcMe = "cm"; // Assign literal or smt else that is a string
console.log(calcMe);
// When different types are assign to a var, TS provides methods for both types
let calcDate;
// calcDate.slice(); Method for strings
// calcDate.toString(); Method for numbers
// ANY
// When value and type is not assigned, TS assigns type ANY
let anything;
console.log(anything.typeOf());
//ARRAYS
let comb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(comb);
let comb2 = ["a", "b", "c", "d", "e", "f", "g", "h"];
console.log(comb2);
let comb3 = [132, "Mosh"];
console.log(comb3);
let comb4 = [132, "Mosh", true];
console.log(comb4);
let comb5 = [1, 2, 3, 4, 5];
console.log(comb5);
comb5 = ["1", "2", "3", "4", "5"];
console.log(comb5);
// ENUMS
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
console.log(UserResponse);
var Direction2;
(function (Direction2) {
    Direction2["dUp"] = "UP";
    Direction2["dDown"] = "DOWN";
    Direction2["dLeft"] = "LEFT";
    Direction2["dRight"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
console.log(Direction2);
