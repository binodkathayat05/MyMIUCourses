console.log(printName("John"));
var printName=function printName(name){
    return "hello" +name;
}

const tripleEyeFuncs=[];
for(let i=0;i<5;i++)
{
    tripleEyeFuncs[i]=function(){
        return i*3;
    }
}
console.log(tripleEyeFuncs[0]());
console.log(tripleEyeFuncs[1]());
console.log(tripleEyeFuncs[2]());
console.log(tripleEyeFuncs[3]());
console.log(tripleEyeFuncs[4]());
console.log(tripleEyeFuncs[5]());



function main() {
    x = 1;
    var a = 5;
    var b = 10;
    var d = 111;
    var c = function (a, b, c) {
        console.log(x);
        console.log(a);
        var f = function (a, b, c) {
            b = a;
            console.log(b);
            b = 5;
            d = 18;
            var x = 5;
        }
        f(a, b, c);
        console.log(b);
        console.log(`hello ${d}`);
        var x = 10;
    }
    c(8, 9, 10);
    console.log(b);
    console.log(d);
    console.log(x);
}
main();


function actualexam() {
    x = 17;
    var a = 50;
    var b = 100;
    var c = function (a, b, c) {
        console.log(x);
        console.log(a);
        var f = function (a, b, c) {
            b = a;
            console.log(b);
            b = c;
            var x = 15;
        }
        f(a, b, c);
        console.log(b);
        var x = 100;
    }
    c(18, 19, 100);
    console.log(b);
    console.log(x);
}
actualexam();
// udefined 18

//shift+option+f for formating
function f() {
    var a = 1, b = 20, c;
    console.log(a + " " + b + " " + c);
    function g() {
        var b = 300, c = 4000;
        console.log(a + " " + b + " " + c);
        a = a + b + c;
        console.log(a + " " + b + " " + c);
    }
    console.log(a + " " + b + " " + c);
    g();
    console.log(a + " " + b + " " + c);
}
f();


const tripleEyeFuncss=[];
for(var i=0;i<5;i++)
{
    tripleEyeFuncss[i]=function(){
        return i;
    }
}
console.log(tripleEyeFuncss[0]());
console.log(tripleEyeFuncss[1]());
console.log(tripleEyeFuncss[2]());
console.log(tripleEyeFuncss[3]());
console.log(tripleEyeFuncss[4]());

/*3.	(6 points)
By applying the Modules Pattern, implement code for a module named, arrayUtils. 
In your arrayUtils module, implement the following 2 utility functions: 

3.1 Function named, multiplesCount, that takes as input, an array of numbers, nums, and a base number, b, and returns how many of those numbers contained in the array, nums, are multiples of b. 

For example: 
multiplesCount([1,2,3,4,5,6], 3) should return 2; multiplesCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5) should return 3; 
and so on. 

Implement this multiplesCount function using JavaScript functional programming style and arrow functions, only. So, no use of ‘for…loop’ or ‘while…loop’ or ‘if’ statements allowed].
*/

function multiplesCount1(arrays,b)
{
   return arrays.reduce((accm,nm)=>accm+1,0)/b;
}
console.log(multiplesCount1([1,2,3,4,5,6], 3));
console.log(multiplesCount1([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5));

function multiplesCount1(arrays,b)
{
   return (arrays.reduce((accm,nm)=>accm+1,0)-arrays.reduce((accm,nm)=>accm+1,0)%b)/b;
}
console.log(multiplesCount1([1,2,3,4,5,6,7,8], 3));
console.log(multiplesCount1([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5));

function multiplesCount2(arrays,b)
{
   return arrays.filter(nm=>nm%b==0).length;
}
console.log(multiplesCount2([1,2,3,4,5,6], 3));
console.log(multiplesCount2([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5));



/*
3.2 Function named, reverseInPlace, that takes as input an array of numbers, nums, and it reverses the order of the elements in the array, in-place, without declaring/creating a new empty array and pushing the elements into it, in reverse order. 

For example: 
reverseInPlace ([1,2,3,4,5,6]) should return [6,5,4,3,2,1];
*/

function reverseInPlace(arraysss)
{
    let temp;
    let j=arraysss.length-1;
    for(let i=0;i<j;i++)
    {
        if(i<j)
        {
            temp=arraysss[i]
            arraysss[i]=arraysss[j];
            arraysss[j]=temp;
            j--;
        }
    }
    return arraysss;
}
console.log(reverseInPlace ([1,2,3,4,5,6]));






