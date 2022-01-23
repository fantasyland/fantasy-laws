import Z from 'sanctuary-type-classes';

import alt from './internal/alt.js';
import ap from './internal/ap.js';
import assert from './internal/assert.js';


export default (equals, A) => {
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
