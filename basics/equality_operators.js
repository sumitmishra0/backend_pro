// ==, ===

// == -> abstract equality operators
// === -> strict equality operators

// == -> It checks the type of both operands ( or values),
    // -> if the type is same, then it calls === 
    // -> if types are not same then type conversion occurs ( coercion ) & then comparison is done

// === -> it checks types of both the operands
    // -> if type are different then it returns false
    // -> if type is same then value comparison occurs

    if(5 > 4){
        console.log('value is greater than and');
        console.log("");
    }