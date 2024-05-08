// Uses of const

// The const declaration creates block-scoped constants, much like variables declared using the let keyword. The value of constant can't be changed through re-assignment (i.e by using the assignment operator), and it can't be redeclared.

// The const declaration declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator, but if a constant is an object or an array, its properties can be added, updated, or removed.

// const x = 10;
// x = 9; /// TypeError: Assignment to constant variable.

// const obj = {x:10};
// obj.x = 5;
// console.log(obj);

// obj = {x: 20};  /// TypeError: Assignment to constant variable.


function fun(){
    // console.log(x);  /// ReferenceError: Cannot access 'x' before initialization , because temperal dead zone exist in const also same like let
    const x =10;
    console.log(x);
}

fun();
