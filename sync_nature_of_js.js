
/**.  Async programming with JS
 * JS is sync in nature
 * JS is single threaded
 * 
 *  * JS is sync in nature
 * What is mean by JS is sync in nature?
 * If we have a peice of valid javascript code and you start executing it let say there is some peice of code which is very time consuming then it's not that the javascript will just jump out of that code. Let say you have 5 line of code, and let say you are on first line, till the time first line is getting executed or processed javascript is going to wait here, once this is done then only javascript will go to next line. so the default nature of javascript is it behaves synchronously. It is not asynchronous in nature. This is clearly you have to feed in your mind that Javascript is not asynchronous in nature, Javascript is synchronous in nature that means it is going to execute the code line ny line and if there is some peice of code that is going to take some time then it is going to stop there give that peice of code whatever amount of time is required and then only move forward. But all of this is only applicable, if we execute valid ecmascript code which is given by the standards. so this situation having thing synchronous in nature is only valid for peice of code that is given in the ecmascript documentation.
 * For ex- for loop , if you open the ecmascript documentation you will find for loop there , so this code will be synchronous in nature.
 */
 
 console.log("Hi we are starting");
 for(let i=0; i < 10000000000; i++){
    //  do some task
 }
  console.log("Done");
  
/** 
 * if we notice first it will print , Hi we are starting then we stuck at for loop
 * then it will wait till the for loop is executing and when the for loop executed completely, then it moves to last line and prints Done.
 * Javascript is similiar like C++ becuase both are synchronous in nature.
 */
 
 
 /**
  * JS is single threaded :- 
  * For example if you consider language like java so if you prepare an android app, and inside that android app you have a button, this button is going to let say, like a post and the movement when you clicks a like button, that button is going to make a request to the server that this person has liked this post. To persist this data immediately 
 
 
