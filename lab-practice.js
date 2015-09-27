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
  this.language   = language;
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function(sb) {
  console.log(hello.this.homePlanet);
  if (sb !== 'klingon' && sb !== 'romulan') {
    return 'This sentient being is not on record.'; 
  } else {
    console.log(hello.sb);
    return hello.sb;
  }
  // TODO: say hello prints out (console.log's) hello in the
  // language of the speaker, but returns it in the language
  // of the listener (the sb parameter above).
  // use the 'hello' object at the beginning of this exercise
  // to do the translating

  //TODO: put this on the SentientBeing prototype
}
SentientBeing.sayHello();