// Strict mode is a restricted in which we run javascript 
// In strict mode lots of features that support in non-strict mode is not supported in strict mode
// autoglobals variable don't support here  like content = "js" does not support here
// so by using strict mode we can make autoglobals disabled 
// we can use "use strict" in file or in function also , like if we want to enable strict mode in file then we can write it globally, else if we want strict mode only in any particular function then we also can do this



// "use strict";

var teacher = "Sanket";

 function fun() {
   var teacher = "Pulkit";
   content = "JS";
   console.log(teacher);
 }

 function gun() {
   var student = "Sarthak";
   console.log(student);
 }

fun();
gun();
console.log(teacher);
console.log(content);



// Strict mode defined in only function example

 // function fun() {
 //     "use strict";
 //   var teacher = "Pulkit";
 //   content = "JS";
 //   console.log(teacher);
 // }
