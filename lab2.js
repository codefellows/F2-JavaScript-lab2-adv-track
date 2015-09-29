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

// //*********************************************************
// // PROBLEM 1: The Blob. 20 points
// //*********************************************************

// /* Dowington, PA had 1000 citizens on the night the blob escaped
//  its meteorite. At first, the blob could only find and consume
//  Pennsylvanians at a rate of 1/hour. However, each time it digested
//  someone, it became faster and stronger: adding to its consumption
//  rate by 1 person/hour.

//     for the...      | starting rate of | persons consumed |
//                     |  consumption     |    that hour     |
// --------------------|------------------|------------------|
//     first hour      |    1/hour        |        1         |
//     second hour     |    2/hour        |        2         |
//     third hour      |    3/hour        |        3         |
//     fourth hour     |    4/hour        |        4         |
/*
 TODO: First, make a constructor function, called Blob, that makes blobs.

 */
function Blob() {

  this.peopleConsumed = 0;
  this.hoursAlive = 1;

}

/*
 TODO: Next, create an instance of Blob named blob.
*/
var blob = new Blob();

 /*

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/
var dowingtonPopulation = 1000;

while (dowingtonPopulation > 0) {
  var peopleThisHour = blob.hoursAlive;
  if (dowingtonPopulation < peopleThisHour) {
    peopleThisHour = dowingtonPopulation;
    blob.peopleConsumed += peopleThisHour;
    dowingtonPopulation -= peopleThisHour;
    break;
  }
  blob.peopleConsumed += peopleThisHour;
  dowingtonPopulation -= peopleThisHour;

  blob.hoursAlive++;
}
console.log(blob.hoursAlive, dowingtonPopulation, blob.peopleConsumed);

var hoursSpentInDowington = blob.hoursAlive;
// TODO: assign me the value of the
// above calculation (how long it took
// the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {

  this.population = population;
  this.peoplePerHour = peoplePerHour;
  this.hour = 0;

  while (this.population > 0) {

    if (this.population <= this.peoplePerHour) {
      this.peoplePerHour = this.population;
      this.peopleConsumed += this.peoplePerHour;
      this.population -= this.peoplePerHour;
      console.log('BURRRRRRP. I think I will take a nap after eating ' + this.peopleConsumed + ' people');
      this.hour++;
      break;
    } else {

      this.peopleConsumed += this.peoplePerHour;
      this.population -= this.peoplePerHour;
      this.hour++;
      this.peoplePerHour++;
    }
    // TODO: implement me based on the instructions above.
    // Be sure to then assign me to the Blob's prototype.
  }
  return this.hour;
};

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');
assert(blob.hoursToOoze(-1000, 1) === 0, 'You cannot have a negative population');
assert(blob.hoursToOoze(1000, 1000) === 1, 'All people should be devoured after the first hour');
assert(blob.hoursToOoze(1001, 1) === hoursSpentInDowington,
 'blob should still have room in his belly for one more person when eating Dowington');

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

function SentientBeing(homePlanet, language) {
  this.homePlanet = homePlanet;
  this.language = language;
  this.universe = 'Star Trek';
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
}
SentientBeing.prototype = {};

// sb is a SentientBeing object

SentientBeing.prototype.sayHello = function(sb) {

    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
  console.log(hello[this.language]);
  return hello[sb.language];

    //TODO: put this on the SentientBeing prototype
};

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

function Klingon() {

}

Klingon.prototype = new SentientBeing('Qo\'noS', 'klingon');

function Human() {

}

Human.prototype = new SentientBeing('Earth', 'federation standard');

function Romulan() {

}

Romulan.prototype = new SentientBeing('Romulus', 'romulan');

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');
assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the romulan should hear nuqneH');
assert((new Klingon()).sayHello(new Human()) === 'hello',
  'the human should hear nuqneH');
assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the romulan should hear nuqneH');
assert((new Romulan()).sayHello(new Human()) === 'hello',
  'the human should hear nuqneH');
assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

// //*********************************************************
// // PROBLEM 3: Sorting. 20 points.
// //
// // Implement the following functions. Write at least 2
// // assertions for each one (the assertions are how you
// // will test your code)
// //*********************************************************

var string = 'how much wood could a wood chuck chuck if a wood chuck could chuck wood'.split(' ');

function lastLetterSort(stringArray) {

  function byLastLetter(a, b) {

    if (a.slice(-1) < b.slice(-1)) {
      return -1;

    } else if (a.slice(-1) > b.slice(-1)) {
      return 1;

    } else if ((a.slice(-1) === b.slice(-1)) && a !== b) {
      if (a < b) {
        return -1;
      } else {
        return 1;
      }
    }
    else {
      return 0;

    }
  }
  stringArray.sort(byLastLetter);
}
lastLetterSort(string);

var number1 = [4, 8, 15, 16, 23, 42];
function sumArray(numberArray) {
  var sum = 0;
  function totalSum(index) {
    sum += index;
    return index;

  }
  numberArray.forEach(totalSum);
  return sum;
}

sumArray(number1);
var number2 = [1, 2, 3, 4, 5, 6];
var number3 = [33, 10, 100];
var lotsOfNumbers = [number1, number2, number3];

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(item1, item2) {

    if (sumArray(item1) < sumArray(item2)) {
      return -1;

    } else if (sumArray(item1) > sumArray(item2)) {
      return 1;

    } else {
      return 0;

    }

  });
  return arrayOfArrays;
}
sumSort(lotsOfNumbers);

assert(string[0] === 'a', '\'a\' should be the first index in the string after being ordered');
assert(string[14] === 'how', '\'how\' should be the last index in the string');
assert(sumArray([1, 1]) === 2, '1 + 1 should = 2');
assert(sumArray(number1) === 108, 'Your function is wrong, and I would advise against using these' +
' numbers as they are bad luck and cause Hurley to crash land on a mysterious island in Lost');
assert(lotsOfNumbers[0] === number2, '22 > 108 > 143');
assert(lotsOfNumbers[2] === number3, '22 > 108 > 143');

// // *********************************************************
// // PROBLEM 4: Cleanup: 10 points
// // Makes sure this file passes jshint and jscs

// // ./node_modules/.bin/grunt jshint
// // ./node_modules/.bin/grunt jscs
// // *********************************************************
