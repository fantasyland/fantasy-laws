'use strict';

var FL = require('fantasy-land');
var Z = require('sanctuary-type-classes');

var ap = require('./ap');
var curry2 = require('./curry2');
var map = require('./map');
var of = require('./of');


//  Compose :: (Apply f, Apply g) => TypeRep f -> TypeRep g -> f (g a) -> Compose f g a
module.exports = curry2(function(F, G) {
  function Compose(value) {
    if (!(this instanceof Compose)) return new Compose(value);
    this.value = value;
  }

  Compose['@@type'] = 'fantasy-laws/Compose';

  Compose[FL.of] = function(x) {
    return Compose(of(F)(of(G)(x)));
  };

  Compose.prototype[FL.equals] = function(other) {
    return Z.equals(this.value, other.value);
  };

  Compose.prototype[FL.map] = function(f) {
    return Compose(map(map(f))(this.value));
  };

  Compose.prototype[FL.ap] = function(other) {
    return Compose(ap(map(ap)(other.value))(this.value));
  };

  //  name :: TypeRep a -> String
  function name(typeRep) {
    return typeof typeRep['@@type'] === 'string' ?
             typeRep['@@type'].replace(/^[^/]*[/]/, '') :
             typeRep.name;
  }

  Compose.prototype.inspect =
  Compose.prototype.toString = function() {
    return 'Compose(' + name(F) + ')' +
                  '(' + name(G) + ')' +
                  '(' + Z.toString(this.value) + ')';
  };

  return Compose;
});
