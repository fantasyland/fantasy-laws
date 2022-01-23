import Z from 'sanctuary-type-classes';

import assert from './internal/assert.js';
import compose from './internal/compose_.js';
import contramap from './internal/contramap.js';
import identity from './internal/identity.js';


export default equals => ({

  //  contramap identity u = u
  identity: assert.forall1 (u =>
    Z.Contravariant.test (u) &&
    equals (contramap (identity) (u),
            u)
  ),

  //  contramap (f . g) u = (contramap g . contramap f) u
  composition: assert.forall3 (u => f => g =>
    Z.Contravariant.test (u) &&
    equals (contramap (compose (f) (g)) (u),
            compose (contramap (g)) (contramap (f)) (u))
  ),

});
