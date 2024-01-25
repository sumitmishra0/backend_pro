let obj = {};
console.log(obj.toString());
console.log(typeof obj.toString());


let obj1 = {
    x : 20,

    // toString() {
    //     return "Let update toString method";
    // }

    toString() {
        // By default gives [Object Object] 
        return 10;
    },

    valueOf(){
        // By default it returns the same object
        return 30;
    }
};
console.log(obj1.toString());
console.log(typeof obj1.toString());

console.log(obj1.valueOf());
console.log(typeof obj1.valueOf());

obj1 = {x : 10};
console.log(obj1.valueOf());
console.log(typeof obj1.valueOf());