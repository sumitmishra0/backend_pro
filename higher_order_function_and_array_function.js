// arrays are also custom objects in js
// index of the element is the key and the element itself is the value
// [ "abc" , "def", "ghi"] = {0 : "abc" , 1 : "def" , 2 : "ghi" }

// Higher Order Function :- 
// These are functions that depends and operates on other functions. Higher Order function takes another function as an argument or returns a function and then execute their logic.
// For Ex:- 

function gun() {
    console.log("gun function is called");
}

function fun(fn){  // fun is higher order function 
    gun();
}

fun();

// Higher Order function - A function that returns a function or takes other functions as arguments is called Higher Order function.

// Map function - 
// Map is a higher order function as an argument
// it returns an array in which every value is actually populated by calling 
// function f with original array element as argument 

// Every element of the original array is passed one by one in the argument function f 
// whatever is the output for each individual element, we populate that output in an array
// map internally iterates/loops over every element of the given original array 
// pass that element in the argument function f and then store the returned value inside an array


function square(ele){
    return ele * ele;
}
function cube(ele){
    return ele * ele * ele;
}
function isEvenOrOdd(x){
    if(x % 2 == 0){
        return "Even";
    } else{
        return "Odd";
    }
}
const arr = [1,2,3,4,5];

const result = arr.map(square); // square is function passes as an argument, so it is Higher order function

console.log(result);

const cubeArray = arr.map(cube);
console.log(cubeArray);

const evenOdd = arr.map(isEvenOrOdd);
console.log(evenOdd);


let arr2 = [1,10, 9, 100, 1000, 11, 12, 13, 14, 2, 3];

arr2.sort(); // it sorts the given array // [expectation] -> this might arrange elements in inc order 
// default implementation of arr.sort() is going to sort an array in lexicographical order (alphabetical order)

/**
 * 0 -> A
 * 1 -> B
 * 2 -> C
 * 3 -> D
 * 4 -> E
 * 5 -> F
 * 6 -> G
 * 7 -> H
 * 8 -> I
 * 9 -> J
 * 10 -> K
 * ....
 * [B, BA, J, BAA, BAAA, BB, BC, DD, BE, C, D] // if we arrange according to dictonary
 * [B, BA, BAA, BAAA, BB, BC, BD, BE, C, D]
 * 
 *   **/
 
 
 /** When to use maps ?
  * In any situation when we have to do an operation on every element of the array
  * and store the result of each operation 
  * map can be a good option
  * 
  * For example: - 
  * Array of product objects 
  * Fetch name from each objects and store it in an array
  **/
  
  
  /** Getting index with maps
   * if the function that we are passing in map takes two arguments 
   * then first argument will be accessing the actual value 
   * second element will be accessing index of that value
   **/
   
   const newArr = [9, 8, 7, 6, 5]
   function print(element, idx){
       return `Element at index ${idx} is ${element} `;
   }
  
  /** 
   *  Here map is looping over every element
   * and then passing element, index in the function print
   */
   
   const result2 = newArr.map(print);
   
   console.log(result2);
   
   //   Created customMaper function same like a map function
   function customMapper(arr, fun) {
       let result = [];
       for(let i = 0; i < arr.length; i++){
           result.push(fun(arr[i], i));
       }
       return result;
   }
   
   const value = customMapper(newArr, print);
   console.log(value);

