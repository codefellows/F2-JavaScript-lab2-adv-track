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

function Blob() {
}

var dowingtonPop = 1000;
var blob = new Blob();
var peopleEaten = 0;
for (var hours = 1 ; hours < dowingtonPop; hours++) {
  peopleEaten += hours;
  // console.log(peopleEaten + ' people eaten by hour ' + hours);
  if (peopleEaten > dowingtonPop) {
    // console.log ('In the ' + hours + 'th hour all are dead in Dowington.');
    hoursSpentInDowington = hours;
    break;
  }
}

var hoursSpentInDowington; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  var peopleEaten = 0;
  var hours = 0;
  if (population === 0) {
    return 0;
  } else if (population <= peoplePerHour) {
    return 1;
  } else {
    while (population >= peopleEaten) {
      peopleEaten += peoplePerHour;
      hours++;
      peoplePerHour++;
    }
    return hours;
  }
};

  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
// var blob = new Blob();
assert(blob.hoursToOoze(8, 4) === 2, ' at rate of 4 ppl in the first hour, and 5 the second it should only take two hours.');
// var blob = new Blob();
assert(blob.hoursToOoze(150000, 1) === 548, 'starting at a base rate of one an hour, it would take our friend Blobbie 548 hours.');
assert(blob.hoursToOoze(100, 100) === 1, 'at rate of 100 ppl an hour, a population of 100 should be eaten in first hour');

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

function SentientBeing(homePlanet, homeLang) {
  this.homePlanet = homePlanet;
  this.homeLang = homeLang;
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
}

// sb is a SentientBeing object
// function sayHello (sb) {
SentientBeing.prototype.sayHello = function(sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype
    console.log(hello[this.homeLang]);
    return hello[sb.homeLang];
  };

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

function Klingon() {}
Klingon.prototype = new SentientBeing('Qo\'noS', 'klingon');
function Human() {}
Human.prototype = new SentientBeing('Earth', 'federation standard');
function Romulan() {}
Romulan.prototype = new SentientBeing('Romulus', 'romulan');

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the Klingon should hear nuqneH');
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert((new Klingon()).sayHello(new Human()) === 'hello', 'the Human should hear hello');
assert((new Romulan()).sayHello(new Human()) === 'hello', 'the Human should hear hello');
assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru', 'the Romulan should hear Jolan\'tru');
assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru', 'the Romulan should hear Jolan\'tru');
assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH', 'the Klingon should hear nuqneH');

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************

function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    var lastLetterA = a.charAt(a.length - 1);
    var lastLetterB = b.charAt(b.length - 1);
    if (lastLetterA > lastLetterB) {
      return 1;
    } else {
      return -1;
    }
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
var randArray = ['soccer', 'Seattle', 'airplane', 'books', 'record'];
lastLetterSort (randArray);

assert(randArray[0] === 'record', 'the first item in the array should now be "record" as "d" is the earliest last letter, alphabetically');
assert(randArray[4] === 'books', 'the last item in the array should now be "books" as "s" is the latest last letter, alphabetically');

function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using
  numberArray.forEach(function(number) {
    sum += number;
  });
  return sum;
}
assert(sumArray([13, 44, 5, 26, 18]) === 106, 'the sum should equal 106');
assert(sumArray([7, 14, 21, 28]) === 70, 'the sum of the array should equal 70');

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a, b) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
    var sumOfA = sumArray(a);
    var sumOfB = sumArray(b);
    if (sumOfA > sumOfB) {
      return 1;
    } else {
      return -1;
    }
  });
}
var arrayArray = [[111, 222, 333], [7, 13, 22], [3, 5, 1], [11, 18, 22]];
sumSort(arrayArray);
assert(sumArray(arrayArray[1]) === 42, 'the second array should equal 42');
assert(sumArray(arrayArray[3]) === 666, 'the final array is the array of the beast');

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
