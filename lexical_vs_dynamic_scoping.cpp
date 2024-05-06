// Lexical scoping - Lexical comes from the word lex or lexer, it actually referred to compiler that the scoping of the variable is determined during compile time that when the parser reads your whole code then the scope of every variable, function is determined before the execution phase altogether.
  // Before the execution phase the scopes are determined

  // Dynamic Scoping - In dynamic scoping during run time you actually determined the code, when you actually run the code then you see a variable at that point of time you try to determined the corresponding scope of the variable.
//  In language like bash or bashscript, dynamic scoping exist


// Example of lexical scoping , javascript by default supports lexical scoping

var teacher = "Sanket"; // teacher -> global -> Sanket
function ask(question){ // ask -> global , question -> ask
    console.log(teacher, question);
}

function fun() { // fun -> global
    var teacher = "Pulkit"; // teacher -> fun -> pulkit
    ask("why?");
}

fun(); 
// Output -> Sanket why?





// Example of dynamic scoping , javascript does not supports dynamic scoping

var teacher = "Sanket"; 
function ask(question){ 
    console.log(teacher, question);
}

function fun() { 
    var teacher = "Pulkit"; 
    ask("why?");
}

fun(); 
// Output -> Pulkit why?
