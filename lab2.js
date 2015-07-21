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

 TODO: First, make a constructor function, called Blob, that makes blobs. */

function Blob(consumptionRate) {
  this.consumptionRate = consumptionRate;
}

/* TODO: Next, create an instance of Blob named blob. */

var blob = new Blob();

/*
 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/
var dowingtonPopulation = 1000;
var peoplePerHour = 1;
var hours = 0;

while (dowingtonPopulation > 0) {

  dowingtonPopulation = dowingtonPopulation - peoplePerHour;
  peoplePerHour++;
  hours++;

  if (dowingtonPopulation <= 0) {
    break;
  }
}

var hoursSpentInDowington = hours;// TODO: assign me the value of the
                                  // above calculation (how long it took
                                  // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function hoursToOoze(population, peoplePerHour) {
  // TODO: implement me based on the instructions above.
  var hoursToConsume = 0;
  if (population === 0) {
    return hoursToConsume;
  }
  while (population > 0) {
    population = population - peoplePerHour;
    hoursToConsume++;

    if (population <= 0) {
      return hoursToConsume;
    }

    peoplePerHour++;
    // Be sure to then assign me to the Blob's prototype.
  }
};

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

assert(blob.hoursToOoze(10, 1) === 4, 'this should take 4 hours.');
assert(blob.hoursToOoze(55, 1) === 10, 'this should take 10 hours');
assert(blob.hoursToOoze(20, 2) ===  5, 'this should take 5 hours');
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
SentientBeing.prototype.sayHello = function sayHello(sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    console.log(hello[this.language]);

    return (hello[sb.language]);

    //TODO: put this on the SentientBeing prototype
  };

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).
function Klingon() {
  this.being = 'Klingon';
}

Klingon.prototype = new SentientBeing('Qo\'noS', 'klingon');

function Human() {
  this.being = 'Human';
}

Human.prototype = new SentientBeing('Earth', 'federation standard');

function Romulan() {
  this.being = 'Romulan';
}

Romulan.prototype = new SentientBeing('Romulus', 'romulan');

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the Klingon should hear nuqneH');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the Romulan should hear Jolantru');

assert((new Klingon()).sayHello(new Human()) === 'hello',
  'the Human should hear hello');

assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the Romulan should hear Jolan\'tru');

assert((new Romulan()).sayHello(new Human()) === 'hello',
  'the Human should hear hello');

assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH',
  'the Klingon should hear nuqneH');

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
    var lastLetterA = a.charAt(a.length - 1);
    var lastLetterB = b.charAt(b.length - 1);

    if (lastLetterA > lastLetterB) {
      return 1;
    }
    if (lastLetterA < lastLetterB) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }
  stringArray.sort(byLastLetter);
}

var stringArr = ['two', 'one', 'six', 'four'];
lastLetterSort(stringArr);

function letterAssertTest(a, b) {
  //get value for the last letter of first element in array
  //get value for the last letter of the second element in array
  var lastLetterA = a.charAt(a.length - 1);
  var lastLetterB = b.charAt(b.length - 1);

  // if the lasat letter of the first element in array > second elememnt
  if (lastLetterA < lastLetterB || lastLetterA === lastLetterB) {
    return true;
  }
  //else
  return false;
}

assert(letterAssertTest(stringArr[1], stringArr[2]) === true, 'This should pass');
assert(letterAssertTest(stringArr[2], stringArr[1]) === false, 'This should pass');

function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  numberArray.forEach(function addNumber(number) {
    sum += number;
  });
  return sum;
}

assert(sumArray([1, 3, 2]) === 6, 'This Should equal 6');
assert(sumArray([4, 1, 5, 3, 2]) === 15, 'This Should equal 15');

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a, b) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
    var sumOne = sumArray(a);
    var sumTwo = sumArray(b);

    if (sumOne  > sumTwo) {
      return 1;
    }
    if (sumOne < sumTwo) {
      return -1;
    }
    return 0;
  });
}

var arrOne = [2, 3, 6, 8]; //19
var arrTwo = [1, 2, 4, 5]; //12
var arrThree = [0, 1, 3, 5]; //9
var testArrayOfArrays = [arrOne, arrTwo, arrThree];
var anotherTestArrayofArrays = [arrThree, arrTwo, arrOne];
var yetAnotherTestArrayofArrays = [arrOne, arrThree, arrTwo];

sumSort(testArrayOfArrays);
sumSort(anotherTestArrayofArrays);
sumSort(yetAnotherTestArrayofArrays);

function sumTest(a, b) {
  if (sumArray(a) < sumArray(b) || sumArray(a) === sumArray(b)) {
    return true;
  }
  return false;
}

assert(sumTest(testArrayOfArrays[1], testArrayOfArrays[2]) === true, 'This should work');
assert(sumTest(testArrayOfArrays[2], testArrayOfArrays[1]) === false, 'This should work as well');

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
