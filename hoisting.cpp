// Hoisting - This phenomena that we are able to execute a function before we declare it is called as Hoisting 
// It doesn't move everything up, it's a consequence of lexical scopping
// Hoisting is direct consquence or result of lexical scopping
gun();
function gun(){
    console.log("Shoot");
}
console.log(a);
let a = 20;
