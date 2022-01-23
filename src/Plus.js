'use strict';

const Z = require ('sanctuary-type-classes');

const alt = require ('./internal/alt');
const assert = require ('./internal/assert');
const map = require ('./internal/map');


module.exports = (equals, P) => {
  const zero = Z.zero (P);
  return {

    //  zero <|> x = x
    leftIdentity: assert.forall1 (x =>
      Z.Plus.test (x) &&
      Z.Plus.test (zero) &&
      equals (alt (zero) (x),
              x)
    ),

    //  x <|> zero = x
    rightIdentity: assert.forall1 (x =>
      Z.Plus.test (x) &&
      Z.Plus.test (zero) &&
      equals (alt (x) (zero),
              x)
    ),

    //  f <$> zero = zero
    annihilation: assert.forall1 (f =>
      Z.Plus.test (zero) &&
      equals (map (f) (zero),
              zero)
    ),

  };
};
