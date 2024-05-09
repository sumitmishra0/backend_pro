// function expressions

// whenever your function declaration starts with the function function like in the next line you have mentioned function , the first valid expression is the keyword function then that is called as function declaration
function fun() {  // function declaration
    // some implementation
}

// In the next line the first word is not function, it is let so it is called function expression
let f = function gun() {   // function expression
    // some implementation
}

// In the next line the first word is not function, it is let so it is called function expression
let a = function() {  // function expression
     // some implementation
}

// In the next line the first word is not function, it is paranthesis so it is called function expression
(function x() {
    // can you stop it?
    
})   // function expression


// IIFE - Immediately invoked function expression
// the moment we define it then only we call it, like we are calling this function immediately
(function x() {
    // can you stop it?
    
})();   // function expression

// In the next line the first word is not function, it is paranthesis so it is called function expression
(function (){
    // i am done
    
})   // function expression


// In the next line the first word is not function, it is let so it is called function expression
// This is called some special functions where you don't see the word function, this is called fat arrow function or arrow function
let y = () => {   // function expression
    
}




const f = function fun() {
    console.log("How much fun????");
}

f();

// What happens with function expression is,  function expression gets scopes of their corresponding variables in which they are assigned, this function is only accessible by f(), not accessible by fun(), it is going to be bound , technically we can say it doesn't get block, function, or global scope. it is technically having a tight boundation with f (f -> f() ), now we only talk about the scope of function f rather than talking about fun() because function fun is only just accessible via f 
fun(); // ReferenceError: fun is not defined


// You might feel now that function expression is only accessible by their variables, so why do you want to giva a name to the function expression, what is the use cases of it.
// There are the certain use cases of this named function expression , that makes it higher order priority or something that we can choose then compare to anonymous function.
// 1. By using named function the readibility of code increases
// 2. For recursive cases named function expression are also helpful.
// 3. It helps in tracing the logs when we get any error, we can easily trace the errors with the help of named function, but if we don't use it then we might not know which function is calling, we can't trace the error by just logging, we have to manually check code line by line.




// So technically function expression are of two types anonymous function expression and named function expression


let g = function gun() {   // named function expression
    // some implementation
}


let a = function() {  // anonymous function expression
     // some implementation
}




// Ex:1

function fun(fn){
    console.log("Welcome to fun");
}

// By using anonymous function expression, we don't know that the function do, we have to read the code to know the what the function do
fun(function (){
    console.log("Wow so much fun");
    console.trace(); // To trace the stack 
})

// By using named function expression, the readibility of the code increases
fun(function askingAboutFun(){
    console.log("Wow so much fun")
})


// Ex:2

function factorial(n){
    return n<= 1 ? 1 : factorial(n-1) * n;
}

let arr = [1,2,3,4,5].map(factorial);

console.log(arr);

let arr2 = [1,2,3,4,5].map(function(n){
    return n<= 1 ? 1 : arguments.callee(n-1) * n;  // arguments.callee might not support by many browser now, it is depreceated, so for recercusive calling we have to named function only
});
console.log(arr2);

let arr3 = [1,2,3,4,5].map(function fact(n){
    return n<= 1 ? 1 : fact(n-1) * n;  
});
console.log(arr3);



// What is the use of IIFE (Immediately invoked function expression) function ?
// Like we have 5000 line of code in a single file and we want to write a new function for some functionality but we don't know whether the same named function already exist or not, so we just write an IIFE function so that even the same named function already exist, it might not affect the code and do not throw any error, because IIFE function can't accessible outside.

// so in order to avoid naming collision, we can simply use IIFE 

function x(){
    console.log("Wow");
}

(function x(y) {
    console.log("Hi", y);
})("Sanket");

x();


// One more use case of IIFE function 

function even(){
    return 0;
}

function odd(){
    return 1;
}

var i = 10;

// if(i %2 == 0){
//     var res = even();
// } else {
//     var res = odd();
// }


// So Instead of writting if and else condition for assigning value to res, we can use IIFE function

var res = (function evaluate(i) {
    if(i %2 == 0) return even();
    else return odd();
})(i);

console.log(res);


