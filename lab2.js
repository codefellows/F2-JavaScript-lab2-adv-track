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

// Step 1:
function Blob() {}
// Step 2:
var blob = new Blob();
// Step 3:
function consumeDowington() {
  var citizens   = 1000;
  var rateOfCons = 1;
  for (var i = 1; i < citizens; i++) {
    rateOfCons = i + 1;
    citizens -= rateOfCons;
  }
  hoursSpentInDowington = i;
}
consumeDowington();

var hoursSpentInDowington; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  for (var i = 1; i < population; i++) {
    peoplePerHour = i + 1;
    population -= peoplePerHour;
  }
  if (population === 0) {
    return 0;
  } else {
    return i;
  }
};

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

assert(blob.hoursToOoze(100, 1) === hoursSpentInDowington,
  '100 people.');
assert(blob.hoursToOoze(500, 2) === hoursSpentInDowington,
  '500 people with a rate of consumption of 2.');
assert(blob.hoursToOoze(750, 1) === hoursSpentInDowington,
  '750 people with a rate of consumption of 1.');

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

function SentientBeing(homePlanet) {
  this.homePlanet = homePlanet;
  this.language = hello.language;
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function(sb) {
  console.log(this.language);
  return sb.language;
};

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).
function Human() {
  this.homePlanet = 'Earth';
  this.language = hello['federation standard'];
}

function Romulan() {
  this.homePlanet = 'Romulus';
  this.language = hello.romulan;
}

function Klingon() {
  this.homePlanet = "Qo'noS";
  this.language = hello.klingon;
}

Human.prototype = new SentientBeing();
Romulan.prototype = new SentientBeing();
Klingon.prototype = new SentientBeing();

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');
assert((new Klingon()).sayHello(new Human()) === 'hello',
  'the human should hear hello');
assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');
assert((new Romulan()).sayHello(new Human()) === 'hello',
  'the human should hear hello');
assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************

// Declaring variables/arrays to be used for assertions
var stringArr = ['blue', 'red', 'yellow', 'green'];
var stringArrTwo = ['black', 'purple', 'yellow', 'green'];
var numArr = [1, 2, 3, 4];
var numArrTwo = [1, 2, 3, 4, 5, 6];

var arrArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var arrArraysTwo = [[3, 4, 3], [4, 8, 6], [1, 3, 9]];

function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    var aString = a.length;
    var bString = b.length;
    if (a.charAt(aString - 1) < b.charAt(bString - 1)) {
      return -1;
    } else if (a.charAt(aString - 1) > b.charAt(bString - 1)) {
      return 1;
    } else {
      return 0;
    }
  }
  var newArr = stringArray.sort(byLastLetter);
  return newArr;
}

function sumArray(numberArray) {
  var sum = 0;
  numberArray.forEach(function(val) {
    sum += val;
  });
  return sum;
}

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a, b) {
    var x = sumArray(a);
    var y = sumArray(b);
    if (x > y) {
      return 1;
    } else {
      return -1;
    }
  });
  return arrayOfArrays;
}

// New array comparison function to allow assertion to work
// Returns true if arrays are same: length, type, matching items.
function deepEquals(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  if (arr1.typeof !== arr2.typeof) {
    return false;
  }
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      break;
    }
  }
  return true;
}

// lastLetterSort ASSERTIONS (using deepEquals to compare arrays)
assert(deepEquals(lastLetterSort(stringArr), ['red', 'blue', 'green', 'yellow']) === true, 'The array is still out of order.');
assert(deepEquals(lastLetterSort(stringArrTwo), ['purple', 'black', 'green', 'yellow']) === true, 'The array is still out of order.');

// sumArray ASSERTIONS
assert(sumArray(numArr) === 10, 'The sum of the array should equal 10.');
assert(sumArray(numArrTwo) === 21, 'The sum of the array should equal 21.');

// DEEP EQUALS on sumSort ASSERTIONS
assert(deepEquals(sumSort(arrArrays), [[1, 2, 3], [4, 5, 6], [7, 8, 9]]) === true, 'The arrays are not equal to one another.');
assert(deepEquals(sumSort(arrArraysTwo), [[3, 4, 3], [1, 3, 9], [4, 8, 6]]) === true, 'The arrays are not equal to one another.');

// Why are assertions failing if console.log spits out ordered array?
// Why is return spitting out array values without the array?

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
