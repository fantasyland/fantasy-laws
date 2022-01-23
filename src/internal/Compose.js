'use strict';

const FL = require ('fantasy-land');
const show = require ('sanctuary-show');
const Z = require ('sanctuary-type-classes');

const ap = require ('./ap');
const map = require ('./map');
const of = require ('./of');


//  Compose :: (Apply f, Apply g) => TypeRep f -> TypeRep g -> f (g a) -> Compose f g a
module.exports = F => G => {
  function Compose(value) {
    if (!(this instanceof Compose)) return new Compose (value);
    this.value = value;
  }

  Compose['@@type'] = 'fantasy-laws/Compose';

  Compose[FL.of] = x => (
    Compose (of (F) (of (G) (x)))
  );

  Compose.prototype[FL.equals] = function(other) {
    return Z.equals (this.value, other.value);
  };

  Compose.prototype[FL.map] = function(f) {
    return Compose (map (map (f)) (this.value));
  };

  Compose.prototype[FL.ap] = function(other) {
    return Compose (ap (map (ap) (other.value)) (this.value));
  };

  //  name :: TypeRep a -> String
  const name = typeRep => (
    typeof typeRep['@@type'] === 'string'
    ? typeRep['@@type'].replace (/^[^/]*[/]/, '')
    : typeRep.name
  );

  Compose.prototype[Symbol.for ('nodejs.util.inspect.custom')] =
  Compose.prototype['@@show'] = function() {
    return 'Compose (' + name (F) + ')' +
                  ' (' + name (G) + ')' +
                  ' (' + show (this.value) + ')';
  };

  return Compose;
};
