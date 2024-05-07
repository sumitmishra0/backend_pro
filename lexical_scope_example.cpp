var teacher = "Sanket"; // teacher -> global -> Sanket
function ask(question){ // ask -> global , question -> ask
    console.log(teacher, question);
}

function fun() { // fun -> global
    var teacher = "Pulkit"; // teacher -> fun -> pulkit
    ask("why?");
}

fun();
