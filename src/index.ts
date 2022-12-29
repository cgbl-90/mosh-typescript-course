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

let numb: number = 5;
console.log(numb);

let numb2 = 5;
console.log(`Implicit type of ${numb} will be number`);

let numb3: number = 123_456_789; // Format for long numbers
console.log(numb3);

let numb4: number | string = "5"; // Asign two possible types or more to a var
console.log(numb4);
numb4 = 10;
console.log(numb4);

type measurement = "cm" | "mt" | "km"; // Literal type - means that you can only assign these values
let calcMe: string | measurement = "cm"; // Assign literal or smt else that is a string
console.log(calcMe);

// When different types are assign to a var, TS provides methods for both types
let calcDate: string | number;
// calcDate.slice(); Method for strings
// calcDate.toString(); Method for numbers

// ANY
// When value and type is not assigned, TS assigns type ANY
let anything;
console.log(anything.typeOf());

//ARRAYS

let comb: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(comb);

let comb2: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];
console.log(comb2);

let comb3: [number, string] = [132, "Mosh"];
console.log(comb3);

let comb4: [number, string, boolean] = [132, "Mosh", true];
console.log(comb4);

let comb5: number[] | string[] = [1, 2, 3, 4, 5];
console.log(comb5);
comb5 = ["1", "2", "3", "4", "5"];
console.log(comb5);

// ENUMS

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction);

enum UserResponse {
  No = 0,
  Yes = 1,
}
console.log(UserResponse);

enum Direction2 {
  dUp = "UP",
  dDown = "DOWN",
  dLeft = "LEFT",
  dRight = "RIGHT",
}
console.log(Direction2);

// ERRORS

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  kind: ShapeKind.Square, // Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
  radius: 100,
};

// DECORATIONS

function first() {
  console.log("first(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("first(): called");
  };
}

function second() {
  console.log("second(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("second(): called");
  };
}

class ExampleClass {
  @first()
  @second()
  method() {}
}

// ITERATIONS

let list = [4, 5, 6];
for (let i in list) {
  console.log(i); // "0", "1", "2",
}
for (let i of list) {
  console.log(i); // 4, 5, 6
}
