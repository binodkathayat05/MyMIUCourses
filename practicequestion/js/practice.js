/*
Practice JS Coding Question 1:
Write a function named, findSmallest, that will take any number of arguments of data-type, number, and it returns the smallest of the arguments. 
For example:	
when you call, findSmallest(2, 1, 3), it should return 1
	
when you call, findSmallest(9, 6, 10, 21, 18, 34), it should return 6
	
when you call, findSmallest(8.75, 3.33, 1.05, 19.24, 25.1, 0.25, 7.32), it should return 0.25
	
when you call, findSmallest(), it should return null (i.e. when no argument is passed, then the smallest is null (meaning no result or smallest)

Make sure to test-run your function by invoking it and passing (testing with) each of the above example input arguments, printing-out the result to the console and verifying its correctness. Print out the result formatted like this:
[The smallest number in the set of numbers, [2,1,3] is 1]
[The smallest number in the set of numbers, [9, 6, 10, 21, 18, 34] is 6]
[The smallest number in the set of numbers, [8.75, 3.33, 1.05, 19.24, 25.1, 0.25, 7.32] is 0.25]
[The smallest number in the set of numbers, [ ] is null]
HINTS/GUIDE:	
Use the arguments object to obtain the input arguments in the function
Use String interpolation via the Template literal syntax to format/print the result/output as required/shown in the examples above.

*/



function findSmallest() {
    let smallnumber = Infinity;
    let args=[];
    if(arguments.length==0)
    {
        console.log(null);
    }else
    {
    for (let i = 0; i < arguments.length; i++) {
        if (smallnumber > arguments[i]) {
            smallnumber = arguments[i];

        }
        args[i]=arguments[i];
    }
    
    console.log(`[when you call, findSmallest[${args}] is ${smallnumber}]`);
}
}
findSmallest(12, 3, 4, 5, 6, 1234);
findSmallest();
findSmallest(8.75, 3.33, 1.05, 19.24, 25.1, 0.25, 7.32);


/*
Implement code for a function named, findFirstN, which takes two parameters; an array of numbers, nums and a number, n. And it will find and return the first n numbers in the given array, nums. 

If the input argument, n, is more than the number of items in the array, then the findFirstN method should print an error message, "Error: Insufficient items". Otherwise, it should extract and return the first n numbers in the array.

For example, your invocation of the method by executing the following run(...) function, should print the output as shown below: 

function run(nums, n) {
    console.log("Start");
    console.log(`Finding first ${n}. Please wait...`);
    const result = findFirstN(nums, n);
    console.log(result);
    console.log("Finish");
}

const nums = [1, 3, 6, 2];
const n = 3;
run(nums, n);
 
Output:

Start
Finding first 3. Please wait...
[ 1, 3, 6 ]
Finish

And if the run(...) function is executed as,

const n = 5;
run(nums, n);

The output should be:

Start
Finding first 5. Please wait...
Error: Insufficient items
Finish

Note: Code/add the above run(...) function, as given above, to your code file. You MUST not change the code in this run(...) function! Therefore, carefully read its code, understand and use it, as is.
 
After finished implementing your solution, execute your JavaScript code in a web browser and take a screenshot of your computer screen, showing your full Visual Studio Code window, and showing the printed output in browser console (i.e. results of the execution), side-by-side.

You are welcome to post your screenshots here as reply to this post, if you like me to review it and comment OR chat it to me, if you prefer that. Enjoy!

/// ------------------------- ///

*/

function findFirstN(nums, n){
    if(nums.length<n)
    {
      return "Error: Insufficient items";
    }
    else{
      const returnvalue=nums.filter(nm=>nums.indexOf(nm)<n);
      return returnvalue;
    }
  }
  
  function run(nums, n) {
    console.log("Start");
    console.log(`Finding first ${n}. Please wait...`);
    const result = findFirstN(nums, n);
    console.log(result);
    console.log("Finish");
  }
  
//   const nums = [1, 3, 6, 2];
//   const n = 5;
//   run(nums, n);


function findFirstN(nums, n){
    let newarray=[]
    if(nums.length<n)
    {
        return `Error: Insufficient items`;
    }else
    {
        for(let i=0;i<n;i++){
            newarray[i]=nums[i];
        }
        return newarray;
    }
}

function run(nums, n) {
    console.log("Start");
    console.log(`Finding first ${n}. Please wait...`);
    const result = findFirstN(nums, n);
    console.log(result);
    console.log("Finish");
}

const nums = [1, 3, 6, 2];
const n = 3;
run(nums, n);

const nums1 = [1, 3, 6, 2];
const n1 = 5;
run(nums1, n1);