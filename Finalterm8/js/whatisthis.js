"use strict";
console.log(`what is this???`);

//Gloabal environment
console.log(this) // points to the window object

// Function environment
function foo(){
// Points to the window object when executing without strict  mode
// points to undefined when executing in strict mode
console.log(this);
}
foo();

// "this" in an object literal
const bob={
    firstName: "Bob",
    lastName: "Jones",
    printThis: function(){
        console.log(this);
    }
}
bob.printThis();