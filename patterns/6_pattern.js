
let n = 5;
function upperTriangle(n){
    for(let row = 1; row <= n; row++){
        let str = "";
        for(let j = n - row; j> 0; j--){
           str += " ";
        }
        for(let j = 1; j <= 2*row - 1; j++ ){
            str += "*";
        }
        console.log(str);
    }
} 

// n = n-1;

function lowerTriangle(n){
    for(let row = 1; row <= n-1; row++){
        let str = "";
        let spaces = row;
        for(let j = 1; j <= spaces; j++){
            str += " ";
        }
        for(let j = 1; j <= 2*(n-row)-1; j++){
            str += "*";
        }
        console.log(str);
    }
}

function pattern(n){
    upperTriangle(n);
    lowerTriangle(n);
}

pattern(n);

//   *
//  ***
// *****
//  ***
//   *