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

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    10/hour       |        10        |
    second hour     |    11/hour       |        11        |
    third hour      |    12/hour       |        12        |
    fourth hour     |    13/hour       |        13        |

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

function Blob() {
  this.hoursToOoze = function(population, peoplePerHour) {
    //console.log("enter hoursToOoze(" + population + ", " + peoplePerHour + ")");
    var hours = 0;
    if(population === 0) {
      return hours;
    }
    while(population >= 0) {
      population -= (peoplePerHour + hours);
      hours++;
      //console.log(hours);
    }
    return hours;
  };
}

var blob = new Blob();

var dowingtonCitizens = 1000;
var hoursSpentInDowington = 0; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

while(dowingtonCitizens >= 0) {
   hoursSpentInDowington++;
   dowingtonCitizens -= hoursSpentInDowington; //as hours increments, more people gets eaten, so reduce that from population
   //console.log('hours spent ' +  hoursSpentInDowington + ' while eating ' + dowingtonCitizens);
}
// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

//console.log ('Blob enters town of 1500 and takes ' + hoursToOoze(1500, 5) + ' hours to eat 10peeps/hr rate!');


assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
var hoursSpentInSeattle = 1142; //found this out from code written above
var seattlePopulation = 662400;
var seattleConsumptionRate = 10;

var hoursSpentInTokyo = 0;
var hoursSpentInPortland = 0;


//console.log("blob function gives me: " + blob.hoursToOoze(seattlePopulation, seattleConsumptionRate));
assert(blob.hoursToOoze(seattlePopulation, seattleConsumptionRate) === hoursSpentInSeattle,
  hoursSpentInSeattle + ' should equal ' + blob.hoursToOoze(seattlePopulation, seattleConsumptionRate));

assert(blob.hoursToOoze(1000000000, 100) === hoursSpentInTokyo,
  'hoursSpentInTokyo should match hoursToOoze\'s result for 1000000000');
assert(blob.hoursToOoze(5000000, 15) === hoursSpentInPortland,
  'hoursSpentInPortland should match hoursToOoze\'s result for 5000000');


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

function SentientBeing (planet, language) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.planet = planet;
  this.language = language;
}

// sb is a SentientBeing object
function sayHello (sb) {
  console.log(hello[this.language]);
  return hello[sb.language];
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype
  }
  SentientBeing.prototype.sayHello = sayHello;

  var prometheus = new SentientBeing('Romulus', 'romulan');
  //var mySb = new SentientBeing("earth","klingon");
  //mySb.sayHello();
/*

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');

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
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
  }
  stringArray.sort(byLastLetter);
}

function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  return sum;
}

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(item) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
  });
}

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
*/
