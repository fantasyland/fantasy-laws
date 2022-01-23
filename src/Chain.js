import Z from 'sanctuary-type-classes';

import assert from './internal/assert.js';
import chain from './internal/chain.js';
import composeK from './internal/composeK.js';


export default equals => ({

  //  (m >>= f) >>= g = m >>= (f >=> g)
  associativity: assert.forall3 (m => f => g =>
    Z.Chain.test (m) &&
    equals (chain (g) (chain (f) (m)),
            chain (composeK (g) (f)) (m))
  ),

});
