"use strict"
const add=function(num1,num2){
    return num1+num2;
}

const sum= add(3,5);// literal function incocation
console.log(`The sum of 3 and 5 is ${sum}`);

const sum2= add.call(null,3,5);
console.log(`The sum, using call() method, of 3 and 5 ${sum2}`);

const sum3= add.apply(null,[3,5]);
console.log(`The sum, using apply() method, of 3 and 5 ${sum3}`);

const newSumFunction=add.bind(null,3);
console.log(`the sum using bind, of 3 and 5 ${newSumFunction(5)}`);
