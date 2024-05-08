// function fun() {
//     var i = 5;
//     while(i < 10){
//         var x = i;
//         i++;
//     }
//     console.log(x); // var doesn't follow block scope so it will be accessible even outside
// }

// fun();

// let i = 1;
// console.log(y);  // value has not been allocated
// while(i < 5){
//     var y = 10; 
//     i++;
// }
// console.log(y);  // value has been allocated



// After coming let people thinks that what is the use of var , because in most of the language like java shows similar kind of behaviour like let , post declaration variable can be accessed.
// But there are different uses of var and let

// Use of let
// function fun(x) {
//     let i;   // the variable i that is declared using let is accesible post declaration
//     if(x % 2 == 0){
//         i = 0;
//     } else {
//         i = 1;
//     }
//     console.log(i);
// }

// fun(10);


// // Use of var
// function gun(x) {
//     if(x % 2 == 0){
//       var i = 0; // even var is declared inside block scope still it is accessible outside the block in case of var because var does not follow block scope
//     } else {
//       var i = 1; // even var is declared inside block scope still it is accessible outside the block in case of var because var does not follow block scope
//     }
//     console.log(i);
// }

// gun(10);




// function fun(){
//     for(var i = 0; i < 10; i++){
//         // do something
//     }
//     console.log(i);  // Even though var is defined in block scope of for loop it is accessible outside the block scope, because var doesn't support block scope
// }

// fun();


// function gun(){
//     for(let i = 0; i < 10; i++){
//         // do something
//     }
//     console.log(i);  // let is defined in block scope of for loop , so it is not accessible outside the block scope, because let supports block scope, and it throws an error (ReferenceError: i is not defined)
// }

// gun();


// function process(x,y){
//     if(x > y){
//         // var temp = x;
//         let temp = x; // Here let make more sense because this temp has no use outside the block scope, we don't want this will be accessible outside so we use here let instead of var
//         x = y;
//         y = temp;
//     }
//     return y-x;
// }

// process(5,6);




// One more difference is between var and let, var allows you redeclaration.
var x = 10;
var x = 20;
console.log(x); 

// But let doesn't allow you to redeclaration, in the parsing phase it will throws an error

let y = 5;
let y = 10; // SyntaxError: Identifier 'y' has already been declared
console.log(y);

