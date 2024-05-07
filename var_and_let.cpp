var teacher = "Sanket"; // global
function fun() { // global
    console.log(teacher); // no error will be thrown and it gives undefined
    // console.log(content); // ReferenceError: Cannot access 'content' before  initialization
    // This concept is called temperal dead zone ( TDZ ). The reason before the declaration of a variable which is having a block scope made by let is called as temperal dead  zone.
    // That means you can't access the variable that is having block wcope before it has been declared.
    // 
    
    var teacher = "Pulkit"; // scope of fun
    let content = "JS"; // content will be access only post declaration
    if(content == "JS"){
        let hours = "120+"; 
        console.log(content,hours);
    }
    //  console.log(hours);  // This hours variable is only accessible inside this block scope because the variable declared with the help of let follows the block scope. Error: ReferenceError: hours is not defined
    console.log(teacher, content);
}

fun();
console.log(teacher);

// Difference between function scope and block scope
// If a variable having function scope it is available everywhere in the function.
// For example var is having a function scope so it is available everywhere inside the function even before the declaration of the variable
// But block scope variables are not allowed to do that so if a variable is having a block scope then n that block only it is accessible and it is accessible post declaration only so content will only be accessible inside that block only and it will be available post declaration only.
// For4 example if we want to access hours outside the block it will throw an Error: ReferenceError: hours is not defined 



// Wrap up
// Function scope --> If a variable is available in function scope then is available throughout the function anywhere even before its declaration, so var gives function scope, so it will not give any error in the function even before its declaration, if we used the variable before declaration then it will give undefined

// Block Scope --> if we have anywhere pairs of curly braces it technically defines a block. so if you allow a variable to get a block scope then it will be only available in that block., it won't be available outside the that block and it will be available post declaration only. You can't access it before declarption.
// For example content is only post declaration it..
// So block scope gives the access the variable to a particular block and everything inside that block.and it doesn't give access outside the block.and it will give you access post declaration that is the basic difference between var and let.
// var gives you functional scope and let gives you block scope

