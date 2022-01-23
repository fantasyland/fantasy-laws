import Z from 'sanctuary-type-classes';

import assert from './internal/assert.js';
import compose from './internal/compose_.js';
import identity from './internal/identity.js';
import promap from './internal/promap.js';


export default equals => ({

  //  promap identity identity p = p
  identity: assert.forall1 (p =>
    Z.Profunctor.test (p) &&
    equals (promap (identity) (identity) (p),
            p)
  ),

  //  promap (f . g) (h . i) p = (promap g h . promap f i) p
  composition: assert.forall5 (p => f => g => h => i =>
    Z.Profunctor.test (p) &&
    equals (promap (compose (f) (g)) (compose (h) (i)) (p),
            compose (promap (g) (h)) (promap (f) (i)) (p))
  ),

});
