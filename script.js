//comments in js

/* or this multiple line comment */

console.log("Hello world!"); //in-line comment

var myName = "Philip";

myName = 8;

//let is only used in the scope of where you declare variable
let ourName = "freeCodeCamp";

//const is used in a variable that will never change. if you change, you get an error
const pi = 3.14;

var a;
var b = 2;

//you can use console.log to know value of variables at various points in your code
console.log(a);

a = 7;

b = a;

console.log(a);

var a = 5;
var b = 10;
b += 5; // or b = b + 5;
var c = "I am a";
var product = 8 * 0;
var remainder;

console.log(b);
console.log(c);

a = a + 1;
c = c + " String!";
remainder = 11 % 3;

console.log(c);
console.log(product);
console.log(remainder);

var myStr = 'I am a "double quoted" string inside "double quotes"';
console.log(myStr);

var myStr2 = '<a href="http://www.google.com" target="_blank">Link</a>';
console.log(myStr2);

/*****

\\      backslash
\n      newline
\r      carriage return
\t      tab
\b      backspace
\f      formfeed

*****/

var myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr3);

var ourStr = "I come first. " + "I come second";
console.log(ourStr);

var firstNameLength = 0;
var firstName = "Ada";

firstName = firstName.length;

console.log(firstName);

var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

console.log(firstLetterOfFirstName);

var firstName = "Devin";

var thirdLetterOfFirstName = firstName[firstName.length - 3];
var lastLetterOfFirstName = firstName[firstName.length - 1];

console.log(thirdLetterOfFirstName);
console.log(lastLetterOfFirstName);

//passing in the words myNoun etc to the function wordBlanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result += "The" + myAdjective + myNoun + myVerb + " to the store " + myAdverb;

  return result;
}

console.log(wordBlanks(" dog", " big", " ran", "quickly"));

//modifying data in array using indexes
var myArray = [50, 60, 70];

var myData = myArray[0];
console.log(myData);

var ourArray = [18, 64, 99];
ourArray[1] = 65;

console.log(ourArray);

//Accessing multi-dimensional arrays with indexes

var myArray2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

//trying to access 8
var myData = myArray2[2][1];
console.log(myData);

//manipulating arrays with push()
//push() function is for appending data to arrays

var ourArray3 = ["Stimson", "J", "cat", 5];
ourArray3.push(["happy", "joy"]);

console.log(ourArray3);
