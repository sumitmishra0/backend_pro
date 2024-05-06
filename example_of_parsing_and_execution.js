
// Throws error in execution phase

// Ex: 1
// console.log("Hello");
// console.lo("Hi"); 
// console.log("Bye")

// During parsing javascript thinks that might be you add a properties (lo) to console later, because console is an object so you can add some properties later as well



// Ex: 2
// console.log("Hello");
// console.system.log("Hi");
// console.log("Bye")


// Throws error in parsing phase
// console.log("Hello");
// console..log("Hi");
// console.log("Bye")

// because when it see console..log() , so it is a syntax error so its throws an error in parsing phase
