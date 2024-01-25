// To Primitive (input [, preferred type ]) // preferred type is optional

// What does to Primitive does, it tries to convert the input to non-object types 

// In case if input can be converted to multiple primitive types (type1, type2, type3), we take the decision using preferred type.


// To Primitive Cases

// Case 1 --> Preferred Type is not present
// hint <--  "default"
// After checking everything or we can say after performing some extra steps it will assign Number to hint.
// hint <--- Number

// Case 2 --> Preferred Type is a String
// hint <--  "String"

// Case 3 --> Preferred Type is a Number
// hint <--  "Number"

// when ToPrimitive is called with no hint, then it generally behaves as if the hint were Number.
// if default is set to hint then  at the end it will convert it to Number.

// These only cases can be possible 
