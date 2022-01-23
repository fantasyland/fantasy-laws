import Z from 'sanctuary-type-classes';

import assert from './internal/assert.js';
import compose from './internal/compose_.js';
import identity from './internal/identity.js';
import map from './internal/map.js';


export default equals => ({

  //  identity <$> u = u
  identity: assert.forall1 (u =>
    Z.Functor.test (u) &&
    equals (map (identity) (u),
            u)
  ),

  //  (f . g) <$> u = f <$> g <$> u
  composition: assert.forall3 (u => f => g =>
    Z.Functor.test (u) &&
    equals (map (compose (f) (g)) (u),
            compose (map (f)) (map (g)) (u))
  ),

});
