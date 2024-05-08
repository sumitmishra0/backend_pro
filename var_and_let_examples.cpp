var x = 5; 

if(x == 5){
    var x = 10;
    console.log(x);
}

console.log(x);

// var only supports Global Scope and functional scope it does not support block scope


// But let supports all scopes including block scope
let y = 2;

if(y == 2){
    let y = 3;
    console.log(y);
}

console.log(y);


function changeX(){
    var x = 6;
    console.log(x);
}

function changeY(){
    let y = 6;
    console.log(y);
}

changeX();
console.log('x', x);

changeY();
console.log('y', y);



// Hoisting: Both var and let declarations are hoisted, but there's a difference in how they behave:
// javascript
// Copy code
// console.log(z); // Output: undefined
// var z = 5;
// console.log(z); // Output: 5
// In the above code, the var declaration is hoisted to the top of its scope (global or function), but its assignment isn't. So, console.log(z) doesn't throw an error, but it logs undefined.
// javascript
// Copy code
// console.log(w); // Throws ReferenceError: Cannot access 'w' before initialization
// let w = 5;
// console.log(w);
// In this example, the let declaration is also hoisted, but unlike var, it's not initialized. Accessing w before its declaration throws a ReferenceError.
// Re-declaration: var allows re-declaration within the same scope, whereas let doesn't:
// javascript
// Copy code
// var a = 5;
// var a = 10; // No error
// console.log(a); // Output: 10
// javascript
// Copy code
// let b = 5;
// let b = 10; // Throws SyntaxError: Identifier 'b' has already been declared
// console.log(b);
// Temporal Dead Zone (TDZ): Variables declared with let are subject to the temporal dead zone (TDZ), which means you can't access them before their declaration point:
// javascript
// Copy code
// console.log(c); // Throws ReferenceError: Cannot access 'c' before initialization
// let c = 5;
// While with var, the same code would log undefined.
// Global Object Property: Variables declared with var in the global scope become properties of the global object (window in browsers, global in Node.js), whereas variables declared with let do not:
// javascript
// Copy code
// var d = 5;
// console.log(window.d); // Output: 5

// let e = 10;
// console.log(window.e); // Output: undefined
// These differences highlight the benefits of using let over var in modern JavaScript code, especially when it comes to block scoping, avoiding hoisting-related issues, and preventing accidental re-declarations.








