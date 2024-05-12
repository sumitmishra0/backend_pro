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

// Sort function

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
 */
 
 let b = [1,10, 9, 100, 1000, 11, 12, 13, 14, 2, 3];
 
//  sort b in increasing order

b.sort(function (a,b){
     // if a < b -> a-b will be negative -> if comparator function gives negative value then a is placed before b (a < b).
    // if a > b -> a-b will be positive -> if comparator function gives positive value then b is placed before a (a > b).
    return a -b; 
   
    
}); // sort function is a HOF function , the sort function takes a comparator function as argument.

console.log(b);

/**
 *  Filter function : It is also higher order function
 * Filter also loops over the array element
 * there is one special thing about filter, i.e, the argument function f which we have to pass inside 
 * Filter should always return a boolean , otherwise output will be converted to a boolean 
 * Filter loops over every element, passess that elemement in the argument function and then if the output of this function call is true, then it stores the original element in a new array  otherwise doesn't add this element element to the array.
 * 
 * */
 
 function oddOrEven(x){
     return (x %  2 == 0);  // return a boolean
 }
 
 let arr = [1,2,3,4,5,6,7,8,9];
 
 const result = arr.filter(oddOrEven);
 
 console.log(result);
 
 
 
 /**
  * Reduce function
  * Reduce is a higher order function available for arrays
  * Reduce also takes a function f as an argument
  * what reduce does is, it one by one goes to every element of the array,
  * say the current element is arr[0].
  * reduce will pass this element to the function f, and accumulate the result of further function calls with this particular result
  */
  
  const arr1 = [1,2,3,4,5,6];
  
  function sum(prevResult, currValue) {
      return prevResult + currValue;
  }
  
  const result1 = arr1.reduce(sum);
  
  console.log(result1);
  
  
  /**
   * Use of Reduce function
   * Cart -> [ { price : 100000, name : "iPhone"}, { price : 500, name : "backcover",}, { price : 300, name : "tempered glass",},]
  */
  
  function addPrices(prevResult, currValue){
      let newPrice = prevResult.price + currValue.price;
      return { price : newPrice };
  }
  
  let cart = [ { price : 100000, name : "iPhone"}, { price : 500, name : "backcover",}, { price : 300, name : "tempered glass",},];
  
  const totalPrice = cart.reduce(addPrices);
  console.log(totalPrice.price);
  
  
  
 
