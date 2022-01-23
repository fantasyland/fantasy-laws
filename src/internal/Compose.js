import * as FL from 'fantasy-land';
import show from 'sanctuary-show';
import Z from 'sanctuary-type-classes';

import ap from './ap.js';
import map from './map.js';
import of from './of.js';


//  Compose :: (Apply f, Apply g) => TypeRep f -> TypeRep g -> f (g a) -> Compose f g a
export default F => G => {
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
