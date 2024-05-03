// {
//     var x = 5;
// }

// console.log(x);

// var does not support block scope so a variable defined inside block scoped is same like a variable you declare the variable outside so this curly bracket has no meaning for the variables declared with the help of var


// let support block scope

// {
//     let y = 1;
// }
// console.log(y);



// function printZ(){
//     var z = 2;
// }

// console.log(z);

// var supports function scope


// function printA(){
//     let a = 2;
// }

// console.log(a);

// let also supports function scope

function fun() {
    console.log(x);
    var x = 10; // not accessible outside
}

fun();

function gun() {
    console.log(y);
    let y = 10;
}

gun();

// var creates a function scope and let creates a block scope and inside a block scope the most important things is that the variable created by let is only available on the position after getting initialized. so one rule of thumb is that whenever you declared with let it is only accessible below it in the corresponding scope. 








// Block Scope:
// Block scope refers to the visibility and accessibility of variables declared within a block of code, typically delimited by curly braces {}. Variables declared with let or const are block-scoped, meaning they exist only within the block they are defined in.
// javascript
// Copy code
// {
//     let y = 1;
// }
// console.log(y); // Throws ReferenceError: y is not defined
// In this example, y is declared using let within a block, so it's not accessible outside that block.Solution: If you need to access y outside the block, you need to declare it outside the block:
// javascript
// Copy code
// let y;
// {
//     y = 1;
// }
// console.log(y); // Output: 1
// Functional Scope:
// Functional scope refers to the visibility and accessibility of variables declared within a function. Variables declared with var are function-scoped, meaning they exist only within the function they are defined in.
// javascript
// Copy code
// function printA(){
//     let a = 2;
// }
// console.log(a); // Throws ReferenceError: a is not defined
// In this example, a is declared using let within a function, so it's not accessible outside that function.Solution: If you need to access a outside the function, you need to declare it outside the function or return it from the function:
// javascript
// Copy code
// let a;
// function printA(){
//     a = 2;
// }
// printA();
// console.log(a); // Output: 2
