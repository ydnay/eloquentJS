// 1-) Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

// It may be useful to know that you can find the length of a string by writing .length after it.

// let abc = "abc";
// console.log(abc.length);
// → 3

function printTriangle() {
  let hash = '';
  while(hash.length <= 7) {
    console.log(hash);
    hash += '#';
  }
};

// printTriangle();

// 2-) FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 
// (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 
// 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// (This is actually an interview question that has been claimed to weed out a significant percentage of programmer 
// candidates. So if you solved it, your labor market value just went up.)

function printFizzBuzz() {
  for(let i = 1; i <= 100; i++) {
    if(isDivBy3(i) && isDivBy5(i)) {
      console.log('FizzBuzz');
    } else if(isDivBy3(i)) {
      console.log('Fizz');
    } else if(isDivBy5(i)) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

function isDivBy3(n) { return n % 3 === 0 }

function isDivBy5(n) { return n % 5 === 0 }

// printFizzBuzz();

// 3-) Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
// At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a binding size = 8 and change the program so that 
// it works for any size, outputting a grid of the given width and height.

function printChessboard(rows, columns) {
  let board = '';
  while(board.length < rows * columns) {
    if (board.length % 9 === 0) {
      // console.log(board.length);
      board += '\n';
      // console.log(board.length);
    } else if (board.length % 2 === 0) {
      board += '#';
    } else {
      board += ' ';
    }
  }

  console.log(board, board.length);
}

printChessboard(8, 8);
printChessboard(4, 4);

