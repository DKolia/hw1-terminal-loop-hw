//1: Interpolation is collecting information and inserting it at a later time using newer notation involving "${variable}
//Concatenation is a form of addition- but doesn't necessarily add values- it can add things together in sometimes unexpected ways. IE: 5 + '5' would equal 55 because you are putting a number, and a string together- rather than doing mathematic addition.
//DRY stands for "DONT REPEAT YOURSELF" and explains the importance of ensuring clean, tidy, and non-repetitive code. Using functions, loops, and objects, one can drastically cut down on the amount of work their code has to do. Plus, if something has to change, would you rather change one or two lines that are referenced and used over and over- or one or two thousand unique lines- each identical.


//2:
//    a < b;
//    c > d;
//    'Name' === 'Name';
//    a + b = c;
//    a * a = d;
//    e === 'Kevin';
//    48 == '48';

//3A: Strings evaluate to true, and while the console is logging such a string, it'll always be true, always and always.
//3B: This code will not infinite loop as the final line of the variable runProgram turns it false. It starts true! Runs once, then spits it out false...

// Reading Code: It looks like this code will count from 0 to 20. When I ran it, it actually just applied extra "A" characters to the variable letters, but it DID count to 21- so I got that part right.

// Section 4:
// A: For Loops vs While loops. While loops will run *while* a condition is met or if a condition is met. For loops usually rely on the 'i' variable and the logic within to operate. They have a lot of overlap but sometimes one may do better than the other given the goals.

//  B:
// console.log("Hello")
// for (var i = 0; i < 1000; i++) {
//   console.log(i);
// }

//  C:
//  The first section establishes the starting variable i which is traditionally used in for loops.
//  The second section establihses some sort of condition or logic. In this case, while i is less than 100...
//  The third section establishes the final logic that is to be performed while the second section is true. In this case, Add 1 to i.

//  For Loop In Reverse
// console.log("JS is working")
// for (var i = 999; i >= 0; i--) {
//   console.log(i);
// }


// More Counting
// for (var i = 1; i <= 10; i++) {
//   console.log("The value of i is: " + i + " of 10");
// }
