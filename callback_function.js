/**
 * fun -> HOF ? -> it takes fn(which is a function) as argument
 * x -> number
 * fn -> function 
 */
 
 function fun(x, fn){
     for(let i = 0; i < x; i++){
         console.log(i);
     }
     
     fn();
 }
 
fun(10, function exec(){  // this exec is a callback function 
    console.log("I am also executed");
})

/** 
 * Higher order function consume some functions as an argument and the function that you pass as an argument while calling the Higher order function is called as callback function
 * 
 */
 
//  Settimeout function is also an HOF

setTimeout(function exec(){
    console.log('Running after sometime');
}, 4000);


/** What are the Problems with callbacks
 * Callback hell - Generally a lots of people thinks that problem with callback is callback hell but this can be a small problem with callback hell and when we ask how to improve it then people generally says by using promises it can be improved, but technically we can't improved it by using promises, But in the concept of promises , promises hell also exist. Then people says that async and await can solve this issue but then there is async and await hell.
 * Technically this callback hell is , what callback  it is , this or more or less like  a readibility problem.
 * There exist a bigger problem in callback which is technically called as inversion of control.
 */
 
 
 /**. Disadvantages of callback function :- 
  * 1. Inversion of control - Biggest Problem
  * 2. Callback hell - Second level problem -> Readibility problem
  * 
  * 
  * What is callback hell ?
  * Due to syntax of callback sometimes what can happens is you pass a callback into a function, inside a callback function you pass another callback, then inside that callback you pass another callback and so on and so for. It becomes a very nested structure in your code and your code like a pyramid structure or orientation. so it becomes a readibility problem and it very hard to read and understand what it actually wants to do, it doen't hamper the flow anyhow, it is not going to hamper your logic , it is a readibility problem that it becomes very hard to read and debug the code. But if we have written it , it will work properly . There is no issue in work execution or business logic that you have written.
  * 
  * 
  * What is Inversion of control ?
  * The control of your exec (self defined function in example) function, it was your implementation, you have passed the 
  * control of how this function is called to someone else is called Inversion of control.
  */
  
  function doTask(fn, x){
    //   whole implementation is done by team A
    
    fn(x*x);  // calling my callback with square of a
    fn(x*x);
  }. // team A
  
  
//   here team B tries to use it
doTask(function exec(num){ // due to callback, I am passing control of how exec should be called to do task , this is inversion of control. Like somebody is no calling properly doTask function and that causes may be some big loses can occurr, may be in this doTask function some services is calling, but you call the callback function twice, or even you didn't call the function single time then can be a big losses can affect your organization, then you will debug it you found your mistakes.
    console.log("Woh number is", num); 
},9);

/**
 * Fpr example;- 
 * In swiggy we are using some razorpay services to make the payment, in the razorpay they made this kind of mistakes then swiggy and their customers will suffer may be their customer will charged twice for a single order. It is very extremely problem that can be occur due to callback function.
  */

  
