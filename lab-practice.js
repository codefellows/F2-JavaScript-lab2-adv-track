'use strict';

function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

function SentientBeing(homePlanet, language) {
  this.homePlanet = homePlanet;
  this.language   = hello.language;
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
}
// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function(sb) {
  console.log(this.language);
  return sb.language;
}

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).
function Human()   { this.homePlanet = 'Earth';
                     this.language   = hello.klingon;}
function Romulan() { this.homePlanet = 'Romulus';
                     this.language   = hello.klingon;}
function Klingon() { this.homePlanet = "Qo'noS";
                     this.language   = hello.klingon;}

Human.prototype   = new SentientBeing();
Romulan.prototype = new SentientBeing();
Klingon.prototype = new SentientBeing();

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');