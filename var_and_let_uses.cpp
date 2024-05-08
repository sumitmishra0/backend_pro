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
function fun(x) {
    let i;   // the variable i that is declared using let is accesible post declaration
    if(x % 2 == 0){
        i = 0;
    } else {
        i = 1;
    }
    console.log(i);
}

fun(10);


// Use of var
function fun(x) {
    if(x % 2 == 0){
       var i = 0; // even var is declared inside block scope still it is accessible outside the block in case of var because var does not follow block scope
    } else {
       var i = 1; // even var is declared inside block scope still it is accessible outside the block in case of var because var does not follow block scope
    }
    console.log(i);
}

fun(10);


