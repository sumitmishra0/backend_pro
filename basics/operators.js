let a = 10;
let b = 3;
console.log(a + "+" + b + "=" + (a + b));
console.log(a + "-" + b + "=" + (a - b));
console.log(a + "*" + b + "=" + a * b);
console.log(a + "/" + b + "=" + a / b);
console.log(a + "%" + b + "=" + (a % b));
console.log(a + "**" + b + "=" + a ** b);

// Assignment 

let c = 10; // Assignment operators
// Here Just assignes value from RHS to LHS

c += 2; // c = c+2;
// take previous value of c, add 2 to it, then assign this new value back to c.
console.log('Value of c after addition 2  is', c);

c %= 5
// Take the remainder when dividing c by 5 and assign that value back to c.
console.log("Value of c after storing remainder is:", c);

c *= 5;
// Multiply current value of c with 5 and store the result in c.
console.log("Value of c after multi[plication is:", c);

c -= 3;
// Subtract 3 from the current value of c and store the result in c.
console.log("Value of c after subtraction : ", c);

c /= 3;
// Divide the current value of c by 3 and store the quotient in c.
console.log("The Value of c after division is:", c);

c **= 2;
// Raise the current value of c to the power of 2 and store the result in c
console.log("The Value of c after exponentiation is:", c);



