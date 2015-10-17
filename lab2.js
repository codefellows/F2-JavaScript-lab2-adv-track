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

assuming that it only increments by 1 per hour?
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

function Blob(population, peoplePerHour) {
  this.population = population;
  this.peoplePerHour = peoplePerHour;
  this.hoursToOoze = function(population, peoplePerHour) {
    //console.log("enter hoursToOoze(" + population + ", " + peoplePerHour + ")");
    var hours = 0;
    if (population === 0) {
      return hours;
    }
    while (population >= 0) {
      population -= (peoplePerHour + hours);
      hours++;
      //console.log(hours);
    }
    return hours;
  };
}

var dowingtonCitizens = 1000;
var hoursSpentInDowington = 0; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)
var blob = new Blob(dowingtonCitizens, hoursSpentInDowington);

while (dowingtonCitizens >= 0) {
  hoursSpentInDowington++;
  dowingtonCitizens -= hoursSpentInDowington;
}
//as hours increments, more people gets eaten, so reduce that from population
//console.log('hours spent ' +  hoursSpentInDowington + ' while eating ' + dowingtonCitizens);

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
var seattleBlob = new Blob(seattlePopulation, seattleConsumptionRate);

var tokyoPopulation = 1000000000;
var tokyoConsRate = 100;
var tokyoBlob = new Blob(tokyoPopulation, tokyoConsRate);
var hoursSpentInTokyo = 44622;
//console.log(hoursSpentInTokyo);

var portlandPopulation = 583776;
var portlandConsRate = 4;
var portlandBlob = new Blob(portlandPopulation, portlandConsRate);
var hoursSpentInPortland = 1078;
//console.log(hoursSpentInPortland);

//console.log("blob function gives me: " + blob.hoursToOoze(seattlePopulation, seattleConsumptionRate));
assert(seattleBlob.hoursToOoze(seattlePopulation, seattleConsumptionRate) === hoursSpentInSeattle,
  hoursSpentInSeattle + ' should equal ' + blob.hoursToOoze(seattlePopulation, seattleConsumptionRate));
assert(tokyoBlob.hoursToOoze(tokyoPopulation, tokyoConsRate) === hoursSpentInTokyo,
  'Hours Spent In Tokyo should match hoursToOoze\'s result for ' + tokyoPopulation);
assert(portlandBlob.hoursToOoze(portlandPopulation, portlandConsRate) === hoursSpentInPortland,
  'hoursSpentInPortland should match hoursToOoze\'s result for ' + portlandPopulation);
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

function SentientBeing(planet, language) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.planet = planet;
  this.language = language;
  this.sayHello = function(sb) {
    console.log(hello[this.language]);
    return hello[sb.language];
  }.bind(this);
}
//REF: http://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/
/*
// sb is a SentientBeing object
function sayHello (sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype
  }
 */
//SentientBeing.prototype.sayHello = sayHello;

//var prometheus = new SentientBeing('Romulus', 'romulan');
//var mySb = new SentientBeing("earth","klingon");
//console.log('When prometheus says hi to another sentient being: ' + prometheus.sayHello(mySb));

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).
// REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
function Human() {
  SentientBeing.call(this, 'earth', 'federation standard'); //federation standard or hello
  //this needs "this" + whatever is affiliated with earth in key:value of hello variable
}
Human.prototype = Object.create(SentientBeing.prototype); //hooks this to subclass

function Klingon() {
  SentientBeing.call(this, 'Qo"noS', 'klingon');
}
Klingon.prototype = Object.create(SentientBeing.prototype);
  //Klingon.prototype.sayHello = sayHello;

function Romulan() {
  SentientBeing.call(this, 'Romulus', 'romulan');
}
Romulan.prototype = Object.create(SentientBeing.prototype);
  //Romulan.prototype.sayHello = sayHello;

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert((new Romulan()).sayHello(new Human()) === 'hello',
  'the human should hear hello');
assert((new Klingon()).sayHello(new Human()) === 'hello',
  'the human should hear hello');
assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');
assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');
assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the klingon should hear Jolan\'tru');

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************
var classmatesArray = ['johnson', 'carr', 'fallisgaard', 'tello', 'pham', 'dang', 'kitchell'];
// should give you opposite order of Fallisgaard, Dang, Kitchell, Pham, Johnson, Tello, Carr

var localAcronym = ['jesus', 'christ', 'made', 'seattle', 'under', 'protest'];

function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

    // get the last letter of each String & compare it
    if (a[a.length - 1] > b[b.length - 1]) {
      return -1;
    }
    if (a[a.length - 1] < b[b.length - 1]) {
      return 1;
    }
    // if a = b, then
    return 0;
  }
  stringArray.sort(byLastLetter);
  console.log(stringArray.sort(byLastLetter));
}
assert(lastLetterSort(classmatesArray) === ['carr', 'tello', 'johnson', 'pham', 'dang', 'fallisgaard'],
  'Classmates last names not sorted');
assert(lastLetterSort(localAcronym) === ['christ', 'protest', 'jesus', 'under', 'made', 'seattle'],
  'Acronym was not properly sorted');
  //not sure why these aren't passing even though the results are what's expected

var numbers = [1, 2, 4, 8, 16, 32, 64, 128, 1024 ]; //should equal 1279
var moreNumbers = [12, 63, 34, 72, 81, 19, 1]; //should equal 282

function sumArray(numberArray) {
  var sum = 0;
  numberArray.forEach(function(number){
    sum += number;
    //sconsole.log(sum);
  });
  // TODO: implement me using forEach
  return sum;
}
assert(sumArray(numbers) === 1279, 'sum of numbers array did not match');
assert(sumArray(numbers) === 282, 'sum of 2nd numbers array did not match');
/*
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
