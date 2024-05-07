// Features of strict mode


// {
//     function fun() {
//         return "123";
//     }
// }
// console.log(fun);

// If you have defined function inside block and you are accessing that function outside then the function doesn't care about the block, this function fun get the global scope not the block scope and it will also be accessible outside 




"use strict"

{
    function fun() {
        return "123";
    }
    console.log(fun);
}
console.log(fun);
// If we have used "use strict" then function fun will not be accessible outside the block
// If you are trying to defined function inside block and you are using strict mode then the function will only be accessible inside the block.
