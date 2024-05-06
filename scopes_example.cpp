

// function fun(){ // fun -> global scope
//     var x = 10; // x -> fun scope
//     function gun() {  // gun  -> fun scope
//         var y = 20;  // y -> gun scope
//         console.log(x);  // 10
//         console.log(y); // 20
//     }
//     console.log(x); // 10
//     console.log(y); // 20
// }

// fun();



function fun(){
    var x = 10;
    function gun() {
        var y = 20;
        console.log(x);
        console.log(y);
    }
    gun();
    console.log(x);
    console.log(y);
}

fun();
