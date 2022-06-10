/*1.Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else
 construct available in Javascript. */
"use strict";
function max(x, y) {

	if (x > y)
		return x;
	else return y;
	//return x>y ? x:y;
}
console.log(max(5, 2));
console.log(max(5, 11));

/*2.	Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.*/

function maxOfThree(x, y, z) {
	return x > y & x > z ? x : y > x & y > z ? y : z;
}
console.log(maxOfThree(5, 2, 7));
console.log(maxOfThree(22, 11, 1));
console.log(maxOfThree(22, 33, 1));



/*3.	Write a function isVowel() that takes a character 
(i.e. a string of length 1) and returns true if it is a vowel, false otherwise.*/

function isVowel(x) {
	if (x.length == 1 && (x.toLowerCase() == 'a' ||
		x.toLowerCase() == 'e' || x.toLowerCase() == 'i' || x.toLowerCase() == 'o' || x.toLowerCase() == 'u'))
		return true;
	return false;
}
console.log(isVowel('a'));
console.log(isVowel('ahkfhkfwe'));
console.log(isVowel('i'));

/*4.	Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an input array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. Note/Hint:
 Do these using Imperative programming approach (i.e. for…loop or while…loop) */



function sum(sumnum) {
	var sumofnums = 0;
	for (var i = 0; i < sumnum.length; i++) {
		sumofnums += sumnum[i]
	}
	return sumofnums;
}
console.log(sum([1, 2, 3, 4]));

function multiply(multarray) {
	var multnum = 1;
	for (var i = 0; i < multarray.length; i++) {
		multnum *= multarray[i]
	}
	return multnum;
}
console.log(multiply([1, 2, 3, 4]));

/*5.Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar")
 should return the string "ratset gaj". */

function reverse(stringValue) {
	var newString = '';
	for (let i = 0; i < stringValue.length; i++) {
		var newString = stringValue.charAt(i) + newString;
	}
	return newString;
}
console.log(reverse('jag testar'));

/*6.	Write a function findLongestWord() that takes an array of words and returns the length of the longest one. */

function findLongestWord(longword) {
	var logestword = longword[0];
	for (let i = 1; i < longword.length; i++) {
		if (longword[i].length > logestword.length) {
			logestword = longword[i];
		}
	}
	return logestword.length;
}
console.log(findLongestWord(['hello world', 'i love my country nepal', 'wap is interesting', 'i got best professor']));

function findLongestWord1(longword1) {
	const llen=longword1.map(nmss=>nmss.length);
	const malen=llen.reduce((acm,nmsss)=>Math.max(acm,nmsss),-Infinity);
	return malen;
}
console.log(findLongestWord1(['hello world', 'i love my country nepal', 'wap is interesting', 'i got best professor']));



/*7.	Write a function filterLongWords() that takes an array of words and an integer i
 and returns a new array containing only those words that were longer than i characters. */


function filterLongWords(arrayfull, longerint) {
	var newarray = [];
	arrayfull.forEach(element => {
		if (element.length > arrayfull[longerint].length) {
			newarray.push(element);
		}
	});
	return newarray;
}
console.log(filterLongWords(['hellpo', 'worlds top country', 'my nearest', 'a', 'abc'], 4));
console.log(filterLongWords(['hellpo', 'worlds top country', 'my nearest', 'a', 'abc'], 2));
//another method
function fiilterl(arrayl,intn){
	const newvalue=arrayl[intn].length;
	const fillw=arrayl.filter(xf=>xf.length>newvalue);
	return fillw;
}
console.log(fiilterl(['hellpo', 'worlds top country', 'my nearest', 'a', 'abc'], 4));
console.log(fiilterl(['hellpo', 'worlds top country', 'my nearest', 'a', 'abc'], 2));



/*8.	Write a function named, computeSumOfSquares, that takes as input,
 an array of numbers and calculates and returns the sum of the squares of each number in the input array.
  E.g. computeSumOfSquares([1,2,3]) should be computed as 12 + 22 +32 = 14. 
  Note: Write your Javascript code without using Imperative programming. i.e.
   Do NOT use any explicit looping construct; instead use functional programming style/approach. */

function computeSumOfSquares(multiplier) {
	var val = multiplier.reduce((accumulator, num) => accumulator + num * num, 0);
	return val;
}
var total = computeSumOfSquares([1, 2, 3,4]);
console.log(total);
console.log(computeSumOfSquares([5, 2]));

/*9.	Write a function named, printOddNumbersOnly, that takes as input, 
an array of integral numbers and it finds and prints only the numbers which are odd. */

function printOddNumbersOnly1(oddn) {
	var value1 = oddn.filter(oddss => oddss%2!=0);
	return value1;
}
console.log(printOddNumbersOnly1([1, 2, 4, 6, 7, 9, 3,11,1])); 


//another method
// function printOddNumbersOnly(x, y, ...more) {
// 	if (x % 2 != 0)
// 		console.log(x);
// 	if (y % 2 != 0)
// 		console.log(y);
// 	if (more.length > 0) {
// 		for (var i = 0; i < more.length; i++) {
// 			if (more[i] % 2 != 0)
// 				console.log(more[i]);
// 		}
// 	}
// }

// printOddNumbersOnly(1, 2, 4, 6, 7, 9, 3,11,1); 

/*10.	Write a function named, computeSumOfSquaresOfEvensOnly, 
that takes as input, an array of integral numbers and calculates and
 returns the sum of the squares of only the even numbers in the input array. E.g.
  computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22 +42 = 20.*/

  function computeSumOfSquaresOfEvensOnly(evens) {
	var evensum = evens.filter(evenss => evenss%2==0);
	var evensumtotal = evensum.reduce((accumulator, num) => accumulator + num * num, 0);
	return evensumtotal;
}
console.log(computeSumOfSquaresOfEvensOnly([2,1,4])); 


/*11.	Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) 
(defined in Problem 4 above) without using Imperative programming. 
i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach. */
function sumreduce(sumnumss) {
var sumtotal = sumnumss.reduce((accumulator, num) => accumulator + num, 0);
return sumtotal
}
console.log(sumreduce([1, 2, 3, 4]));

function multreduce(multss) {
	var multotal = multss.reduce((accumulator, num) => accumulator * num, 1);
	return multotal;
}
	console.log(multreduce([1, 2, 3, 4]));


	/*12.	Implement Javascript code for a function named, findSecondBiggest, 
	which takes as input, an array of numbers and finds and returns the second biggest of the numbers.
	 For example, findSecondBiggest([1,2,3,4,5]) should return 4. And findSecondBiggest([19,9,11,0,12]) 
	 should return 12. (Note: Do not use sorting!) */

	//  function findSecondBiggest(biggests){
	// 	let biggest;
	// 	 for(let i=0;i<2;i++)
	// 	 {
	// 		for(let j=1;j<biggests.length;j++)
	// 		{
	// 		   if(biggests[i]<biggests[j])
	// 		   {
	// 			biggest=biggests[j];
	// 			biggests[j]=biggests[i];
	// 			biggests[i]=biggest;
	// 		   }
	// 		}
	// 	 }
	// 	 return biggests[1];
	//  }

	function findSecondBiggest(nums) {
		let second = 0,
		  max = 0;
		max = nums.reduce((x, y) => {
		  if (x > y) {
			return x;
		  }
		  return y;
		});
		nums.filter((num) => {
		  if (num > second && second < max && num != max) {
			second = num;
		  }
		});
		return second;
	  }
	 console.log(findSecondBiggest([1,2,3,4,5]));
	 console.log(findSecondBiggest([19,9,11,0,12]));
//another method
	 function findsbg(arrsss)
	 {
		 const sbg=arrsss.reduce((sbgss,num)=>Math.max(sbgss,num),-Infinity);
		 const sbgfil=arrsss.filter(xssss=>xssss!=sbg);
		 const sbgfinal=sbgfil.reduce((sbgss,num)=>Math.max(sbgss,num),-Infinity);
		 return sbgfinal;
	 }
	 console.log(findsbg([1,2,3,4,5]));
	 console.log(findsbg([19,9,11,0,12]));



	 /*13.	Write a function named printFibo, that takes as input, a given length, n, 
	 and any two starting numbers a and b, and it prints-out the Fibonacci 
	 sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, 
	 beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", 
	 as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1),
	  prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", 
	  as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output). */

	  function printFibo(n,a,b){
		  for(let i=1;i<=n;i++)
		  {
			  console.log(a);
			  var c=b;
			  var b=a+b;
			  var a=c; 
		  }
	  }
	  printFibo(10,0,1);

/*14.	Refer to your work on Lab Assignment 4. Add Javascript code to work with your 2 HTML forms as follows:
a.	Login Form: Add code such that when the Submit button is clicked, the values entered in the input fields are printed to the Console.
b.	New Product Form: Add code such that when the Submit button is clicked, the values entered in the input fields are displayed in a pop-up window.
 */

// javascript and html page can be found inside the folder forms.

/*15.	Using JavaScript and HTML and CSS, implement a webpage that displays a working,
 ticking counter Clock, that counts/displays the current Date and time of the browser host,
  in the format: 2019-11-4 12:16:01   */

  function display_date_time() {
	var x = new Date();
	var x1 = x.getFullYear()  + "-" + x.getMonth() + "-" + x.getDay();
	x1 = x1 + " " + x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();
	document.getElementById("demo").innerHTML = x1;
	refreshDate();
  }
  
  function refreshDate() {
	var refresh = 1000; // Refresh rate in milli seconds
	var mytime = setTimeout("display_date_time()", refresh);
  }
  
  window.onload = () => {
	display_date_time();
  };