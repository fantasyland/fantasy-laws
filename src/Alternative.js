'use strict';

const Z = require ('sanctuary-type-classes');

const alt = require ('./internal/alt');
const ap = require ('./internal/ap');
const assert = require ('./internal/assert');


module.exports = (equals, A) => {
  const zero = Z.zero (A);
  return {

    //  (f <|> g) <*> x = (f <*> x) <|> (g <*> x)
    distributivity: assert.forall3 (x => f => g =>
      Z.Alternative.test (x) &&
      Z.Alternative.test (f) &&
      Z.Alternative.test (g) &&
      equals (ap (alt (f) (g)) (x),
              alt (ap (f) (x)) (ap (g) (x)))
    ),

    //  zero <*> x = zero
    annihilation: assert.forall1 (x =>
      Z.Alternative.test (x) &&
      Z.Alternative.test (zero) &&
      equals (ap (zero) (x),
              zero)
    ),

  };
};
