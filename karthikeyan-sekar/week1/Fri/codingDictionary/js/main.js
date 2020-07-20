console.log('Coding Dictionary');

const dictionary = {
  // This nested object stores our actual terms and their definitions
  // as nested key:value pairs
  definitions: {
    'method': 'a function which is defined inside an object (i.e. the value of a key)',
    'scope': 'the visibility or lifetime of a variable within a program',
    'variadic function': 'a function which accepts a variable number of arguments'
  },

lookupTerm: function(term){
  term = term.toLowerCase();

  if(term in this.definitions){
    console.log(`%c${term}: ${this.definitions[term]}`,'color:orange');

  }
  else {
    console.log(`sorry..${term} is not in the dictionary`);
  }
},
  printallDefinitions: function () {
    for(const key in this.definitions) {
    //console.log(`${key}: ${this.definitions[key]}`);
    this.lookupTerm(key);
    definitionCount++;
    }
  },
addDefinition: function( term, definition) {
  if( term in this.definitions){
    console.log(`This term is already defined:`);
  } else {
    this.definition[term] = definition;
    console.log('term added:');
  }
  this.lookupTerm(term);
}
removeDefinition: function(term) {

},
};

dictionary.lookupTerm('method');
