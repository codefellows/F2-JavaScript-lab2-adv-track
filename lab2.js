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

function Blob(remainingPopulation, rateConsumption, hours) {
  this.remainingPopulation = remainingPopulation;
  this.rateConsumption = rateConsumption;
  this.hours = hours;
}

var blob = new Blob(1000, 1, 0);

while (blob.remainingPopulation > 0) {
  blob.hours++;
  blob.rateConsumption++;
  blob.remainingPopulation = blob.remainingPopulation - blob.rateConsumption;
}

var hoursSpentInDowington = blob.hours;

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

// TODO: implement me based on the instructions above.
// Be sure to then assign me to the Blob's prototype.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  var hours = 0;
  while (population > 0) {
    hours++ ;
    peoplePerHour++ ;
    population = population - peoplePerHour;
  }
  return hours;
};

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

assert(blob.hoursToOoze(500, 500) === 1,
  'people equals rate means one hour only needed.');
assert(blob.hoursToOoze(662400, 1) === 1150,
  'Seattle should have a over a 1000 hours of life left.');
assert(blob.hoursToOoze(320090000, 1) === 25301,
  'The USA should have a litle over 1000 days or more than 25000 hours.');

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

function SentientBeing(homePlanet, language) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor

  this.homePlanet = homePlanet;
  this.language = language;
}

// sb is a SentientBeing object

SentientBeing.prototype.sayHello = function(sb) {

    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    console.log(hello[this.language]);
    return hello[sb.language];
  };

    //TODO: put this on the SentientBeing prototype - See above code for
    // function (sb)

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

function Klingon() {}
function Human() {}
function Romulan() {}

Klingon.prototype = new SentientBeing('Qo\'noS', 'klingon');
Human.prototype = new SentientBeing('Earth', 'federation standard');
Romulan.prototype = new SentientBeing('Romulus', 'romulan');

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the romulan should hear nuqneH');
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

function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    return a.charAt(a.length - 1) > b.charAt(b.length - 1);
  }
  return stringArray.sort(byLastLetter);
}

var arrayTest = ['apple', 'berry', 'pear'];

assert(lastLetterSort(arrayTest)[1] === 'pear', 'your fruits are a bit jumbled');
assert(lastLetterSort(arrayTest)[2] === 'berry', 'your fruits are a bit jumbled');

function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach

  numberArray.forEach(function addNumber(value) {
    sum += value;
  });
  return sum;
}

assert(sumArray([1, 2, 3]) === 6, 'the math is not adding up for 1,2,3');
assert(sumArray([5, 10, 20]) === 35, 'the math is not adding up for 5,10,20');

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a, b) {
    return sumArray(a) - sumArray(b);
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
  });
  return arrayOfArrays;
}

var numArr2 = [[3, 4], [10, 5], [0, 6]];

console.log(numArr2);
console.log(sumSort(numArr2));

assert(sumArray(numArr2[0]) === 6, 'the math is not adding up');
assert(sumArray(numArr2[1]) === 7, 'the math is not adding up');

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
