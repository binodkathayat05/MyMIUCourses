// lab5.js

console.log("Hello Lab5 solutions");

// Q1:
function max(a, b) {
    if(a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(max(1,2));
// Alternative - use ternary
function max(a, b) {
    return (a > b ? a : b);
}

// Q2: 
function maxOfThree(a, b ,c) {
    let max = a;
    if(b > max) {
        max = b;
    }
    if(c > max) {
        max = c;
    }
    return max;
} 
console.log(maxOfThree(15,2,3));
// Alternative - use ternary
function maxOfThree(a, b ,c) {
    return (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
}

// Q3:
function isVowel(c) {
    let r = false;
    switch(c) {
        case "a": // "A"
        case "e": 
        case "i":
        case "o":
        case "u":
            r = true;
            break;
    }
    return r;
}

function isVowelIgnoreCase(c) {
    let r = false;
    const cLower = c.toLowerCase();
    switch(c) {
        case "a": // "A"
        case "e": 
        case "i":
        case "o":
        case "u":
            r = true;
            break;
    }
    return r;
}
// Alt
function isVowel(c) {
    return (c === "a" || c === "e");
}
// Alt2 -- using regex pattern matching/test
function isVowel(letter){
    const pattern = /[aeiou]/;
    return pattern.test(letter);
}

// Q4 - skipped

// Q5
function reverse(s) {
    let rev = "";
    for(let i = s.length - 1; i >= 0; i--) {
        // rev += s[i];
        rev += s.charAt(i);
    }
    return rev;
}
console.log(reverse("abc"));

// Q6:
// Q7:

// Q8:
function computeSumOfSquares(a) {
    return a.map(n => n * n).reduce((sum, n) => sum + n);
}
console.log(computeSumOfSquares([1,2,3]));
function computeSumOfSquares(a) {
    return a.reduce((sum, n) => sum + (n*n));
}
console.log(computeSumOfSquares([1,2,3]));

// Q9:
function printOddNumbersOnly(a) {
    a.filter(n => n%2 == 1).forEach(n => console.log(n));
}
printOddNumbersOnly([1,2,3]);

// Q10 - filter, map, reduce

// Q11: -- skipped

// Q12:
function findSecondBiggest(a) {
    if(a.length < 2)
        throw new Error("Invalid array. Must have at least 2 numbers");
    let b = (a[0] > a[1] ? a[0] : a[1]);
    let sb = ((a[0] === b) ? a[1] : a[0]);
    for(let i = 2; i < a.length; i++) {
        if(a[i] > b) {
            sb = b;
            b = a[i];
        } else if(a[i] > sb) {
            sb = a[i];
        }
    } 
    return sb;
}

// Alt: too expensive ; not performant - unnecessary multiple passes
function findSecondBiggest(numbers){
    const max =  numbers.reduce((a,b) => Math.max(a,b), -Infinity);
    const nums = numbers.filter(n => n!= max);
    return nums.reduce((a,b) => Math.max(a,b), -Infinity);
}

// Q13: // [0, 1, 1, 2, 3, 5, ...]
function printFibo(n, a, b) {
    if(n === 0) console.log("");
    if(n === 1) console.log(a);
    if(n === 2) console.log(a + ", " + b);
    if(n > 2) {
        let s = a + ", " + b;
        let currA = a;
        let currB = b;
        for(let i = 2; i < n; i++) {
            let nextFibo = currA + currB;
            currA = currB;
            currB = nextFibo;
            s += ", " + nextFibo;
        }
        console.log(s);
    }
}
printFibo(2, 0, 1);


function f() { 
	var a = 1, b = 20, c; 
	console.log(a + " " + b + " " + c); // 1 20 undefined 

	function g() { 
	   var b = 300, c = 4000; 
	   console.log(a + " " + b + " " + c); // 1 300 4000 		   
	   a = a + b + c; 
	   console.log(a + " " + b + " " + c); // 4301 300 4000 
	}
 	   
	console.log(a + " " + b + " " + c); // 1 20 undefined 
	g(); 
	console.log(a + " " + b + " " + c); // 4301 20 undefined 
} 
f();

var x = 10; 
function main() { 
	console.log("<br>x1 is " + x); 
	x = 20; 
	console.log("<br>x2 is " + x); 
	if (x > 0) { 
		var x = 30; // x=30; 
		console.log("<br>x3 is " + x); 
	} 
	console.log("<br>x4 is " + x); 
	var x = 40; // x=40; 
	var f = function(x) { 
			console.log("<br>x5 is " + x); 
		 } 
	f(50); 
	 console.log("<br>x6 is " + x); 
} 
main(); 
console.log("<br>x7 is " + x);


function check(){
if ("web dev is great") {  console.log("hell" )} 
if (false) {  console.log("world") }
}
check();





 function invokeMe(x) { 
     	x(); 
     } 
    
     invokeMe(function() { console.log('Hi');});

     const user = { id: 4201, name: "Bob", isGraduate: true};
const {id, name, isGraduate} = user;
console.log(id + ", " + name  + ","  + isGraduate);


const things = [97,98,99];
for (const i in things) {
console.log(things[i]);
}
    
let letters = ['x', 'y', 'z'];
for (let i in letters) {
console.log(i); } // "0", "1", "2",
for (let i of letters) {
console.log(i); } // “x", “y", “z"

function b() {
    function a() {
    console.log(x);
    }
    var x = 10;
    a();
    }
    var x = 20;
    b(); 


    function b() {
        function a() {
        console.log(x);
        }
        a();
        }
        var x = 20;
        b();


        var helper = function(n) {
            return function() {return n;}
            }
            var funcs = [];
            for (var i = 0; i < 5; i++) {
            funcs[i] = helper(i);
            };
            console.log(funcs[0]());
            console.log(funcs[1]());
            console.log(funcs[2]());
            console.log(funcs[3]());
            console.log(funcs[4]());

            var funcs = [];
for (var i = 0; i < 5; i++) {
funcs[i] = function() {
return i;
};
}
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
console.log(funcs[3]());
console.log(funcs[4]());