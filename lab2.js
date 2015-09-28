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

var Blob = function() {
};

var blob = new Blob();

var peopleInDownington = 1000;
var consumptionRate = 1;
var hours = 0;

while (peopleInDownington > 0) {
  peopleInDownington = peopleInDownington - consumptionRate;
  consumptionRate++;
  hours++;
}

var hoursSpentInDowington = hours; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

function hoursToOoze(population, peoplePerHour) {
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.
  var arbitraryPopulation = population;
  var currentConsumptionRate = peoplePerHour;

  var hours = 0;

  while (arbitraryPopulation > 0) {
    arbitraryPopulation = arbitraryPopulation - currentConsumptionRate;
    currentConsumptionRate++;
    hours++;
  }
  return hours;
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

function SentientBeing(homePlanet, tounge) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.homePlanet = homePlanet;
  this.tounge = tounge;
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function(sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
    var speakerHello = hello[this.tounge];
    var listenerHello = hello[sb.tounge];
    console.log(speakerHello);
    return listenerHello;
    //TODO: put this on the SentientBeing prototype
  };

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

function Human() {}
Human.prototype = new SentientBeing('Earth', 'federation standard');

function Klingon() {}
Klingon.prototype = new SentientBeing('Klingon', 'klingon');

function Romulan() {}
Romulan.prototype = new SentientBeing('Romulus', 'romulan');

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');
assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the klingon should hear nuqneH');
assert((new Klingon()).sayHello(new Human()) === 'hello',
  'the klingon should hear nuqneH');
assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the klingon should hear nuqneH');
assert((new Romulan()).sayHello(new Human()) === 'hello',
  'the klingon should hear nuqneH');
assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH',
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

var compareNestedArrays = function(arr1, arr2) {
  if (arr1.length != arr2.length) {
    console.log('The arrays have different lengths.');
    return false;
  }
  for (var i = 0; i < arr1.length; i++)
  {
    for (var j = 0; j < arr1[i].length; j++)
    {
      if (arr1[i][j] != arr2[i][j])
      {
        console.log('The array elements are not the same, or are not in the same order');
        return false;
      }
    }
  }
  return true;
};

function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a 'compare function'
    // And check out the 'comparing strings' section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
     //a.charAt(a.length-1) - b.charAt(b.length-1);
    if (a.charAt(a.length - 1) > b.charAt(b.length - 1))
    {
      return 1;
    }
    else if (a.charAt(a.length - 1) < b.charAt(b.length - 1))
    {
      return -1;
    }
    else
    {
      return 0;
    }
  }
  return stringArray.sort(byLastLetter);
}
var testArray = ['dog', 'cat', 'lizard', 'toad', 'owl', 'koala', 'greeb', 'unicorn'];

assert(compareNestedArrays(lastLetterSort(testArray), ['koala', 'greeb', 'lizard', 'toad', 'dog', 'owl', 'unicorn', 'cat']), 'koala should come first!');
assert(compareNestedArrays(lastLetterSort(['z', 'y', 'x']), ['x', 'y', 'z']), 'wrong order!');

function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  function addToSum(element) {
    sum = sum + element;
  }
  numberArray.forEach(addToSum);
  return sum;
}

assert(sumArray([0]) === 0, 'The sum of [0] should be 0!');
assert(sumArray([1, 2, 3, 4]) == 10, 'The sum of this array should be 10!');

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a, b) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
    return sumArray(a) - sumArray(b);
  });
  return arrayOfArrays;
}

assert(compareNestedArrays(sumSort([[4], [2], [3], [1]]), [[1], [2], [3], [4]]), 'incorrect!');
assert(compareNestedArrays(sumSort([[1, 100], [2, 95], [3, 4]]), [[3, 4], [2, 95], [1, 100]]), 'wrong!');
//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
