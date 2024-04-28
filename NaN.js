console.log(Number("123"));
console.log(Number("abcd"));
console.log(Number("0xa"));

let x = NaN;

console.log(x == NaN);  // we can't check directly whether x is equal to NaN or not

console.log(isNaN(x));

console.log(isNaN("Sumit"));  // isNaN converts the incoming input to a number, so when it tries to convert "Sumit" to number it will get NaN in result, Number("Sumit") => NaN

console.log(Number.isNaN("Sumit"));  // Number.isNaN() function doesn't do any implicit type conversion so it directly checks whtether the input is NaN or not

console.log(Number.isNaN(x));

// But if you ask to don't use any inbuilt function then use the below method

if(typeof(x) == 'number' && x !== x){
   console.log('true');
}


// isNaN() function does coercion and converts the inputs to number
// Number.isNaN() function doesn't do coercion 
