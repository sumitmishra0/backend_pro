/* Simple Hello World in Node.js */
console.log((1).toString());
console.log(1.toString()); // throws an error because it treats 1 as a number and point as a decimal so if we perform directly an operation  on it so it will throws an error
console.log("abc".toString()); // javascript automatically converts string primitive type to Object primitive type 

// console.log(undefined.toString());   // Both  the line throws an error
// console.log((undefined).toString());

// What is Boxing?
// Boxing says that actually your primitive types gets converted to non-primitive types you try to apply the concept of boxing.

// (1).toString(); // This number 1 gets converted to Object Number(1) so when you explicitly coerce this Number(1)


// Primitive Types are Atomic
// In JavaScript, primitive types include numbers, strings, booleans, null, and undefined. When you work with primitive types in JavaScript, they are considered atomic, meaning they are immutable and do not have any methods or properties of their own.

// For example:

// javascript
// Copy code
// var num = 10;
// var str = "Hello";
// var bool = true;
// In the above code, num, str, and bool are all primitive types.

// Being atomic means that operations on primitive values do not affect the original value. For example:

// javascript
// Copy code
// var a = 5;
// var b = a;
// b = 10;
// console.log(a); // Output: 5
// console.log(b); // Output: 10
// Here, changing the value of b does not affect the value of a.

// Boxing in JavaScript
// When you perform operations on primitive values as if they were objects (like calling methods or accessing properties), JavaScript automatically "boxes" the primitive value into an object of the corresponding primitive wrapper type (Number, String, Boolean). This process is called "boxing."

// For example:

// javascript
// Copy code
// var num = 1;
// var str = num.toString();
// console.log(str); // Output: "1"
// In this example, num is a primitive number, but when toString() is called on it, JavaScript automatically converts it into a Number object temporarily to access the toString() method.

// Now, regarding your example 1.toString(), it throws an error because JavaScript's parser gets confused by the dot after 1, thinking it's a floating-point number. To avoid this confusion, you can use parentheses to clarify that 1 is an integer:

// javascript
// Copy code
// (1).toString();
// In this case, 1 is boxed into a Number object, and then the toString() method is called on it, resulting in "1".

// So, boxing in JavaScript is a mechanism where primitive values are temporarily converted into objects of their corresponding wrapper types to perform operations that require object-like behavior.

// User
// ok "abc" is also a string and we can directly use toString operation on it then why we can't do this with 1.toString() and even for undefined it is giving me error in both cases undefined.toString() and (undefined).toString() why ? if all are primitive then why they are showing differnt behaviours?
// ChatGPT
// You're absolutely right, let's delve deeper into that:

// Behavior of toString() on Primitive Types:
// Strings:
// Strings are primitive types, and you can directly call toString() on them without any issues. For example:
// javascript
// Copy code
// var str = "abc";
// console.log(str.toString()); // Output: "abc"
// Numbers:
// Numbers are also primitive types, but there's a subtle difference when it comes to calling methods on them directly. JavaScript's parser treats 1.toString() as a floating-point number due to the dot following 1, which leads to a syntax error. To resolve this ambiguity, you can wrap the number in parentheses to make it clear to the parser that you're calling a method on the number:
// javascript
// Copy code
// console.log((1).toString()); // Output: "1"
// Undefined:
// undefined is a primitive value in JavaScript, but unlike strings or numbers, it does not have any methods or properties associated with it. So, trying to call toString() directly on undefined or (undefined) will result in a TypeError because JavaScript can't convert undefined into an object to access the toString() method:
// javascript
// Copy code
// console.log(undefined.toString()); // TypeError: Cannot read property 'toString' of undefined
// console.log((undefined).toString()); // TypeError: Cannot read property 'toString' of undefined
// In summary, while strings and numbers are primitive types and can have methods called directly on them, undefined is also a primitive type but does not support method calls like toString() because it represents the absence of a value and does not have any associated methods or properties.



