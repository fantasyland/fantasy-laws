import Z from 'sanctuary-type-classes';

import assert from './internal/assert.js';
import bimap from './internal/bimap.js';
import compose from './internal/compose_.js';
import identity from './internal/identity.js';


export default equals => ({

  //  bimap identity identity p = p
  identity: assert.forall1 (p =>
    Z.Bifunctor.test (p) &&
    equals (bimap (identity) (identity) (p),
            p)
  ),

  //  bimap (f . g) (h . i) p = (bimap f h . bimap g i) p
  composition: assert.forall5 (p => f => g => h => i =>
    Z.Bifunctor.test (p) &&
    equals (bimap (compose (f) (g)) (compose (h) (i)) (p),
            compose (bimap (f) (h)) (bimap (g) (i)) (p))
  ),

});
