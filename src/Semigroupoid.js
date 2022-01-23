import Z from 'sanctuary-type-classes';

import assert from './internal/assert.js';
import compose from './internal/compose_.js';


export default equals => ({

  //  (x `compose` y) `compose` z = x `compose` (y `compose` z)
  associativity: assert.forall3 (x => y => z =>
    Z.Semigroupoid.test (x) &&
    Z.Semigroupoid.test (y) &&
    Z.Semigroupoid.test (z) &&
    equals (compose (compose (x) (y)) (z),
            compose (x) (compose (y) (z)))
  ),

});
