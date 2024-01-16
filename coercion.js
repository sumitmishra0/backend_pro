// Coercion (Type Inconversion)

// 10 && 6 = 6
// 6 && 10 = 10

// In a AND gate, if the first input is false, then it doesn't evaluate the second input and immediately return the first input
// As well as if first input is true, then second input has to be evaluated(calculated) and return the second input

// (10 > 6) && (6 > 7)

// In a OR gate, if the first input is true, then it doesn't evaluate the second input and immediately return the first input
// As well as if first input is false, then second input has to be evaluated(calculated) and return the second input

console.log( 10 || 0)
console.log(6 || 19);
console.log(0 || -0);