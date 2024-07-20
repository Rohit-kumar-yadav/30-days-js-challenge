// Activity 1 : Arithmetic operators

// task 1: write a program to add two numbers and log the result to the console 

let num1 = 23;
let num2 = 45;

// console.log(num1+num2);

// task 2: write a program to subtract two numbers and log the result to the console

let sub1 = 23;
let sub2 = 24;

// console.log(sub1-sub2);

// task 3: write a program to multiply two numbers and log the result to the console

let mul1 = 30;
let mul2 = 4.5;

// console.log(mul1*mul2);

// task 4: write a program to divide two numbers and log the result to the console

let div1 = 23;
let div2 = 24;

// console.log(div1/div2)

// task 5: write a program to find remainder when one number is divided by another and log the result

let a = 45;
let b = 29;

// console.log(a%b);



// ## Assignment Operator

// Task 1: Use the += operator to add a number to variable
let n1 = 23;
n1 += 2;

// console.log(n1);

// Task 2: Use the -= operator to subtract a number to variable

let n2 = 15;
n2 -= 5;

// console.log(n2);

// ### Comparison Operators

// Task 1: write a program to compare to numbers using > and < ;

let c1 = 23;
let c2 = 24;
// console.log(num1<num2);
// console.log(num1>num2);

// Task 2: write a program to compare to numbers using >= and =< ;

let comp1 = 23;
let comp2 = 12;

// console.log(comp1>=comp2);
// console.log(comp1<=comp2);

// Task 3: write a program to compare to numbers using == and === ;

// console.log('12'==12); // true
// console.log('12'===12); // false


// ### Logical operators

// Task 1: write a program that uses the && operators to combine two conditions
// Task 2: write a program that uses the || operators to combine two conditions
// Task 3: write a program that uses the ! operators to combine two conditions

// console.log(('12' && 12)===12); // true
// console.log(('12' || 12)===12); // false
// console.log((!(12>14))); // true

// [!NOTE] check truthy and falsy value for better understanding

// ### Activity 5 : Ternary operator(cpnditional)
   // syntax: condition ? exprIfTrue : exprIfFalse

// Task 1: write a program that uses the ternary operator to check if a number is positive or negative.

let n = 2;

let res = (n>0)?"positive":"negative";
console.log(res);