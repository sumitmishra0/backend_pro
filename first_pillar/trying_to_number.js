console.log(2 - 9);  // -7
console.log(2 - null) // => 2 - 0 => 2
console.log(2 - undefined) // => 2 - NaN => NaN
console.log(1 - "224"); // 1 - 224 => -223
console.log(1 - "224ab34"); // 1 - NaN => NaN

// you can't use abstract operation but internally eventually they use.