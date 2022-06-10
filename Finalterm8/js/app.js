/*
* app.js
*/

console.log("hello lesson8-Intro to OOP in JS");

//Object in Javascript
//Multiple forms/ways to define objects
//1: Object Literal

const adress={
    street: "north",
    city: "fairfield",
    state: "IA",
    zipCode: "52557-0001",
    "house number": 1000
};

console.log(`Street is ${adress.street}`);
console.log(`House Number is${adress["house number"]}`);

const person={
    firstName:"Anna",
    lastName:"Smith",
    home_address:{
        street:"court street",
        city: "fairfield"
    },
    work_address:adress,
    printFullName: function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }

}
console.log(`person is named ${person.firstName} ${person.lastName}`);
console.log(`she lives on a street name ${person.home_address.street}`);
console.log(`${person.firstName} works at ${person.work_address.street}`);
person.printFullName();

// Adding new property for person
person.dateOfBirth=new Date(1975,11,12);
console.log(`${person.firstName} was born on ${person.dateOfBirth}`);

// Constructor Function == we see this later