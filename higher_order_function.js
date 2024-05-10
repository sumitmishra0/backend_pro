// Higher Order Functions - There are functions which takes another function as an arguments, these are called higher order functions

function f(x, fn) {
  // x -> number
  // fn -> function 

  console.log(x);
  fn();
}

f(10, function exec() {
  console.log("Hi, I am an expression passed to a Higher order function (HOF) ");
});
