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
var pplDigested = 0;
var hoursPassed = 0;
function Blob() {}
var blob = new Blob();
while (pplDigested < 1000) {
  hoursPassed++;
  pplDigested += hoursPassed;
}
var hoursSpentInDowington = hoursPassed; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.
  var pplAbsorbed = 0;
  var hoursAttacking = 0;
  while (pplAbsorbed < population) {
    pplAbsorbed += peoplePerHour;
    peoplePerHour++;
    hoursAttacking++;
  }
  return hoursAttacking;
};
assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');
assert(blob.hoursToOoze(1000000, 1000000) === 1, 'this should only take one hour');
assert(blob.hoursToOoze(2, 1) === 2, 'this should take 2 hours');
assert(blob.hoursToOoze(100, 1) < 24, 'this should take less than a day');
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

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

function SentientBeing(home, language) {
  this.home = home;
  this.language = language;
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function(sb) {
  console.log(hello[this.language]);
  switch (sb.home) {
    case 'Qo\'nos':
      return hello.klingon;
    case 'Romulus':
      return hello.romulan;
    default:
      return hello['federation standard'];
  }
};
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
    //TODO: put this on the SentientBeing prototype
function Human() {}
Human.prototype = new SentientBeing('Earth', 'federation standard');
function Klingon() {}
Klingon.prototype = new SentientBeing('Qo\'nos', 'klingon');
function Romulan() {}
Romulan.prototype = new SentientBeing('Romulus', 'romulan');
// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

assert((new Human()).sayHello(new Klingon()) === 'nuqneH', 'the klingon should hear nuqneH');
assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru', 'the romulan should hear Jolan\'tru');
assert((new Human()).sayHello(new Human()) === 'hello', 'the human should hear hello');
assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru', 'the romulan should hear Jolan\'tru');
assert((new Klingon()).sayHello(new Human()) === 'hello', 'the human should hear hello');
assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH', 'the klingon should hear nunqneH');
assert((new Romulan()).sayHello(new Human()) === 'hello', 'the human should hear hello');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************

function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a 'compare function'
    // And check out the 'comparing strings' section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    var underA = a.toLowerCase();
    var underB = b.toLowerCase();
    if (underA.charAt(underA.length - 1) < underB.charAt(underB.length - 1)) {
      return -1;
    }
    if (underA.charAt(underA.length - 1) > underB.charAt(underB.length - 1)) {
      return 1;
    }
    return 0;
  }
  stringArray.sort(byLastLetter);
  return stringArray;
}
assert(lastLetterSort(['chad', 'bob', 'Chester', 'frank', 'dave', 'Dave']).toString() === 'bob,chad,dave,Dave,frank,Chester', "The array should have been [ 'bob', 'chad', 'dave', 'Dave', 'frank', 'Chester' ]");
assert(lastLetterSort(['chaD', 'chad', 'bob', 'yoshi']).toString() === 'bob,chaD,chad,yoshi', "The array should have been ['bob', 'chaD', 'chad', 'yoshi']");

function sumArray(numberArray) {
  var i = 0;
  var sum = 0;
  numberArray.forEach(function() {
    sum += numberArray[i];
    i++;
  });
  // TODO: implement me using forEach
  return sum;
}

assert(sumArray([5, 5, 5, 5, 5]) === 25, 'The sum of this array should be 25');
assert(sumArray([0, 0, 0, 0]) === 0, 'The sum of this array should add up to zero.');

function sumSort(arrayOfArrays) {
  function sortArray(a, b) {
    if (sumArray(a) < sumArray(b)) {
      return -1;
    }
    if (sumArray(a) > sumArray(b)) {
      return 1;
    }
    return 0;
  }
  arrayOfArrays.sort(sortArray);
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
  return arrayOfArrays;
}

assert(sumSort([[4, 2], [8, 8], [2]]).toString() === '2,4,2,8,8', 'The new array should have been [[2],[4,2],[8,8]]');
assert(sumSort([[0], [8, 12], [1, 1, 1, 1, 1, 1, 1], [3, 3, 3, 3]]).toString() === '0,1,1,1,1,1,1,1,3,3,3,3,8,12', 'The new array should have been [[0],[1,1,1,1,1,1,1],[3,3,3,3],[8,12]]');

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
