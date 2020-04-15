/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

let line = '#';

for (let index = 0; index < line.length; index++) {
  if (index < 7) { // 7 was from number of '#' on last line
    console.log(line);
    line += '#';
  }
}

/* Solution:
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
*/


/*
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

// Fizz or Buzz
for (let num = 1; num <= 100; num++) {
  if (num % 5 == 0 && !num % 3 == 0) { // numbers divisible by 5, not by 3
    console.log("Buzz");
  } else if (num % 3 == 0) { // numbers divisible by 3
    console.log("Fizz");
  } else {
    console.log(num)
  }
}

// FizzBuzz
for (let num = 1; num <= 100; num++) {
  if (num % 3 == 0 && num % 5 == 0) { // numbers divisible by 3 & 5
    // Can also do if (num % 15 == 0)
    console.log("FizzBuzz");
  } else if (num % 3 == 0) { // numbers divisible by 3
    console.log("Fizz")
  } else if (num % 5 == 0) { // numbers divisible by 5
    console.log("Buzz");
  } else {
    console.log(num)
  }
}

/* Solution:
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
*/


/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

// Try print out a grid with the defined size first
let size = 8;
let chessboard = '';

for (let x = 0; x <= size; x++) {
  for (let y = 0; y <= size; y++) {
    chessboard += '#';
  }
  chessboard += '\n';
}
console.log(chessboard);

// Then try print out the board with the spaces
for (let x = 0; x <= size; x++) {
  for (let y = 0; y <= size; y++) {
    if ((x + y) % 2 == 0) { //only on even numbers
      chessboard += ' ';
    } else {
      chessboard += '#';
    }
  }
  chessboard += '\n';
}
console.log(chessboard);