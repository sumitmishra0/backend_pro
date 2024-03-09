 // Abstract(==) and Strict(===) equality operator both of these comparison check the types what they actually do with that type is different. Both of them might do different thing after checking types and evaluating types.
// So, if both of them check the type then what is the difference ?
// The difference is Abstract Equality operator does coercion.

// 7.2.14Abstract Equality Comparison
// The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:

// 1. If Type(x) is the same as Type(y), then
// Return the result of performing Strict Equality Comparison x === y.
// 2. If x is null and y is undefined, return true.
// 3. If x is undefined and y is null, return true.
// 4. If Type(x) is Number and Type(y) is String, return the result of the comparison x == ! ToNumber(y).
// 5. If Type(x) is String and Type(y) is Number, return the result of the comparison ! ToNumber(x) == y.
// 6. If Type(x) is Boolean, return the result of the comparison ! ToNumber(x) == y.
// 7. If Type(y) is Boolean, return the result of the comparison x == ! ToNumber(y).
// 8. If Type(x) is either String, Number, or Symbol and Type(y) is Object, return the result of the comparison x == ToPrimitive(y).
// 9. If Type(x) is Object and Type(y) is either String, Number, or Symbol, return the result of the comparison ToPrimitive(x) == y.
// 10. Return false.

// console.log(12 == "12") -> 12 == ToNumber("12") -> 12 == 12 -> true
// console.log( false == "0") -> ToNumber(false) == "0" -> 0 == "0" -> 0 == ToNumber("0") -> 0 == 0 -> true
// console.log(null == false) -> null == ToNumber(false) -> null == 0 -> (No condition matched) -> return false
// Point no. 8 -> If Type(x) is either String, Number, or Symbol and Type(y) is Object, return the result of the comparison x == ToPrimitive(y).
// let obj = { x: 10, valueOf() {return 100;} }
// console.log(99 == obj); -> false
// console.log(100 == obj); -> true


// 7.2.15Strict Equality Comparison
// The comparison x === y, where x and y are values, produces true or false. Such a comparison is performed as follows:

// If Type(x) is different from Type(y), return false.
// If Type(x) is Number, then
// If x is NaN, return false.
// If y is NaN, return false.
// If x is the same Number value as y, return true.
// If x is +0 and y is -0, return true.
// If x is -0 and y is +0, return true.
// Return false.
// Return SameValueNonNumber(x, y).
