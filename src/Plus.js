import Z from 'sanctuary-type-classes';

import alt from './internal/alt.js';
import assert from './internal/assert.js';
import map from './internal/map.js';


export default (equals, P) => {
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
