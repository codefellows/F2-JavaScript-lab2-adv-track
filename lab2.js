'use strict';

// LAB 2: SORTING AND CAMPY SCI-FI

// Welcome to Lab 2 =)

// Be sure to read all the comments!

// All of the instructions are inline with the assignment below.
// Look for the word TODO in comments.  Each TODO will have a
// description of what is required.

// To run this file (in the terminal) use: node lab2.js

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/
function Blob() {}

var blob = new Blob();
var hoursSpentInDowington = 0;

function eatDow() {
  var i = 0;
  var rate = 1;
  var pop = 1000;
  while (i < pop) {
    rate = i + 1;
    pop -= rate;
    i++;
  }
  hoursSpentInDowington = i;
}
eatDow();
 // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, rate) {
  var i = 0;
  while (i < population) {
    rate = i + 1;
    population -= rate;
    i++;
  }
  hoursSpentInDowington = i;
  return i;
};
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.
assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(blob.hoursToOoze(3, 1) === 2, 'three people should be eaten in 2 hours.');
assert(blob.hoursToOoze(6, 1) === 3, 'six people should be eaten in 3 hours');
assert(blob.hoursToOoze(14, 2) === 4, 'at this faster rate 14 people shold be eaten in 4 hours');
//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};
// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

function SentientBeing(home, lang) {
  this.home = home;
  this.lang = lang;
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function(sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
    //TODO: put this on the SentientBeing prototype
    console.log(hello[this.lang]);
    return hello[sb.lang];
  };

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).
function Klingon() {
  // TODO: add new properties specific to klingons
}

Klingon.prototype = new SentientBeing("Qo'noS", 'klingon');

function Human() {
}

Human.prototype = new SentientBeing('Earth', 'federation standard');

function Romulan() {
}

Romulan.prototype = new SentientBeing('Romulus', 'romulan');

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');
assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru',
  'romulan hears jolan tru');
assert((new Romulan()).sayHello(new Human()) === 'hello',
  'humans hear hello');
assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH',
  'klingons hear nuqneH');
assert((new Klingon()).sayHello(new Human()) === 'hello',
  'humans hear hello');
assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru',
  'ronulans hear jolan tru');
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************

var lastLetterTest = ['apple', 'orange', 'banana'];

function lastLetterSort(stringArray) {
  function byLastLetter(left, right) {
    var leftLast = left[left.length - 1];
    var rightLast = right[right.length - 1];
    if (leftLast < rightLast)
      return -1;
    else if (leftLast > rightLast)
      return 1;
    return 0;
    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
  }
  stringArray.sort(byLastLetter);
}

console.log(lastLetterSort(lastLetterTest));

var sumArrayTest = [1, 2, 3, 4, 5];

function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  numberArray.forEach(function(element) {
    sum += element;
  });
  return sum;
}

console.log(sumArray(sumArrayTest));

var sumSortTest =
[
  [1, 2, 3, 4, 5],
  [2, 3, 4, 5, 6, 7],
  [3, 4, 5, 6],
  [4, 5, 6, 7, 8, 9, 10]
];

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(left, right) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
    var leftSum = sumArray(left);
    var rightSum = sumArray(right);

    if (leftSum < rightSum)
      return -1;
    else if (leftSum > rightSum)
      return 1;
    return 0;
  });
}

console.log(sumSort(sumSortTest));

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
