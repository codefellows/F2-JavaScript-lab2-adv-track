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
*/
  var Blob = function Blob() {
 this.peoplePerHour = 1;
};

// TODO: Next, create an instance of Blob named blob.

var blob = new Blob();

//TODO: Then, use a loop to calculate how long it took the blob to finish
// with Dowington.



var hoursSpentInDowington; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)
var hoursSpentInDowington = 0;
var population = 1000;
while (population > 0) {
  population -= blob.peoplePerHour;
  blob.peoplePerHour++;
  hoursSpentInDowington
}


// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

function hoursToOoze(population, peoplePerHour) {
  var numberOfHours = 0;
  while (population > 0) {
    population -= peoplePerHour;
    peoplePerHour++;
    numberOfHours++;
  }
  return numberOfHours;
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.
}
Blob.prototype.hoursToOoze = hoursToOoze;

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

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

function SentientBeing (home, language) {
  this.home = home;
  this.language = language;

  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
}

// sb is a SentientBeing object
function sayHello (sb) {
  if (hello[this.language]) {
    console.log(hello[this.language]);
  } else {
      console.log(hello['federation standard']);
  }

  if (hello[sb.language]) {
    return hello[sb.language];
  } else {
      return hello['federation standard'];
  }
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype
}
SentientBeing.prototype.sayHello = sayHello;

function Human() {
  return new SentientBeing('earth', 'federation standard');
}

function Klingon() {
  return new SentientBeing("qo'noS", 'klingon');
}

function Romulan() {
  return new SentientBeing('Romulus', 'romulan');
}
// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');

assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');

assert((new Klingon()).sayHello(new Human()) === 'hello',
  'the human should hear hello')
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
    var a = a[a.length - 1].toLowerCase(),
            b = b[b.length - 1].toLowerCase();
      if(a < b) {
          return -1;
        } else if(a > b) {
          return 1;
        }

        return 0;
    }
    stringArray.sort(byLastLetter);
  }

function sumArray(numberArray) {
  var sum = 0;
   numberArray.forEach(function(number) {
      sum += number;
    });
  return sum;
}

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a, b) {
    if(a < b) {
          return -1;
        } else if(a > b) {
          return 1;
        }

        return 0;
  });
}

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************

