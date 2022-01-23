import Z from 'sanctuary-type-classes';

import assert from './internal/assert.js';
import concat from './internal/concat.js';


export default equals => ({

  //  (x <> y) <> z = x <> (y <> z)
  associativity: assert.forall3 (x => y => z =>
    Z.Semigroup.test (x) &&
    Z.Semigroup.test (y) &&
    Z.Semigroup.test (z) &&
    equals (concat (concat (x) (y)) (z),
            concat (x) (concat (y) (z)))
  ),

});
