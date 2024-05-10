// Hoisting - This phenomena that we are able to execute a function before we declare it is called as Hoisting 
// It doesn't move everything up, it's a consequence of lexical scopping
// Hoisting is direct consquence or result of lexical scopping
// Hoisting in Javascript is a behaviour in which a function or a variable can be used 
// before declaration

// For Ex:- 


// console.log(x);  // ReferenceError: Cannot access 'x' before initialization
// when we are using const, const gets a block scoped, and in a block scope whereever you are actually initializing a variable below that line , only that particular variable is available.
// const x = 2;


//  but that does not case with function scope or global scope
// var does not find the function so it gives a global scope
// using test before declaring
console.log(test);  // undefined
var test;


gun();
function gun(){
    console.log("Shoot");
}
console.log(a);
let a = 20;


// Temperal Dead Zone (TDZ) : - The temperal dead zone is a unique feature introduced with let and const declarations in javascript. It's the period between entering a scope and the actual declarations of a variable within that scope. During this phase , the variable exists but is inaccessible . Accessing it before the declartions results in a Reference error.

// The variable declared with let, const or class is said to be in a "temporal dead zone" (TDZ) 
// While inside the TDZ, the variable has not been initialized with a value, and any attempt to access it will result in a Reference Error.

// Even the word hoisting does not exist as a concept (moving the variable var declarations to the top), it is a consequence of scoping, In scoping how scoping works for var, how scoping works for let and const.
