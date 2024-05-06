
  var teacher = "Sanket";

 function fun() {
   var teacher = "Pulkit";
   content = "JS";
   console.log(teacher);
 }

 function gun() {
   var student = "Sarthak";
   console.log(student);
 }

fun();
gun();
console.log(teacher);
console.log(content);

// 1. Parsing phase
// 2. Execution phase

// Parsing - In parsing javascript reads the whole code one by one and start allocating the variables (not their values) their corresponding scope.
//   so there is a scope manager which tells javascript that you are inside new scope. So javascript goes to line no. 1 and see (var teacher = "Sanket") , so what is the current scope it is global scope so we will fast ask hey the scope manager is the variable teacher already 
// declared in global scope (because there might be a case I am trying to initialize a variable and it is already present inside global scope) . if no, we will allocate this variable teacher in a global scope .

// Now we move to second line it is a function fun (formal declaration fun).
// Everytime we see a formal declarartion we think about the scope in parsing phase.
// Now this function fun is the formal declaration of fun. this type you are declaring fun and defining all of its properties. Is fun already available in the global scope ? Answer is no, so this fun is also given a global scope.
// Now you go inside function fun(), what are the formal declarations,  this is the formal declaration (var teacher = "Pulkit"; ) , but now you are inside a function scope, previously you were in the global scope. and function  creates a new scope.
// so it creates a new scope and we have a brand new one scope itself, so we are in scope of fun. Hey scope manager do you have a variable teacher in the scope of fun? Answer is no, there is no variable teacher in the scope of fun.
// because the variable var allows us to have a function scope and we are inside function fun(), so this is the first time we are defining a variable teacher. so we will say this variable teacher inside the scope of function fun(). 
// so there is two bucket , first one is the global bucket where the initially the teacher variable is declared and now we have a another bucket of fun() and inside this a new variable teacher is declared and the console object is declared globally and now when you move down then you will move out of the function fun scope and now you again the global scope.
// now you will see another function gun() , and now again you will ask do you have declaration about any variable gun in the global scope, so this gun also gets a global scope. 
// Now you go inside gun which technically initializes a scope of gun and then you have a formal declaration var student , when you see var student then you will ask do you have already a var student inside scope of gun, answer is no, so this variable student assign the scope of gun. This actually happened during parsing phase.
// So technically, what we saw is after parsing phase all of the variables gets allocated to a corresponding scope.

// So during the phase of parsing we only look at formal declaration and assign them corresponding scopes. Formal declaration means something that is actually declared using var, let , const, or functions something like this.
// you don't care about the places where variable is used. because this is also not a formal declaration. when you are outside of all of the functions , you are in global scope, but when you go inside the function , a new scope is created and you are in function scope.
// 


// Execution phase

// Now let discuss about the content ( content = "JS" ) how it will execute 
// content = "js" used in function fun so when the parsing of the code is going on it will go to function fun and we define a variable teacher and now move to next line and we ignore content = "js" because we are not creating a variable content we are just assigning value to it.
// so now move out from function fun and same is going on in function gun.
// WHEN parsing phase is done, and executing phase is begin, we check , Hey scope manager do you have variable teacher in global scope . Answer is yes so it will assign the "Sanket" to teacher, now we move to line where we are calling function fun()
// Again we ask to Scope manager , do you have formal declaration of fun, answer is yes , so we will call fun(), Now we see a variable teacher so we ask to Scope Manager do you have a variable teacher in scope of fun, answer is yes.
// so we assign the "Pulkit" to teacher . Now we see content = "js" so we ask to scope manager  do you have variable content in scope of fun , answer is no, so we go one scope out, so you are in global scope, then again ask do you have variable content in globsl scope, answer is no.
// so neither we found the content in scope of fun nor we found the content in global scope, (we did this finding, finding can be done when two places, one is when value are allocating to you then you are finding content or when you are using the value then you find teacher).
// so any variable can be used at two places only, when its gets the value or when value is used, so when you are trying to assign a value to content, and you didn't find it in function scope and inside global scope. so there is a concept of autoglobals.
// so this content during execution phase will become global variable, and inside the global scope it gets value "js". so rest of the execution is also going in a similar way.



