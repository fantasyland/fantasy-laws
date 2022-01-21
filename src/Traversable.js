'use strict';

const Z = require ('sanctuary-type-classes');

const Compose = require ('./internal/Compose');
const assert = require ('./internal/assert');
const identity = require ('./internal/identity');
const map = require ('./internal/map');
const of = require ('./internal/of');
const traverse = require ('./internal/traverse');


module.exports = equals => ({

  //  t (traverse F identity u) = traverse G t u
  naturality: assert.forall4 (F => G => t => u =>
    Z.Traversable.test (u) &&
    equals (t (traverse (F) (identity) (u)),
            traverse (G) (t) (u))
  ),

  //  traverse F pure u = pure u
  identity: assert.forall2 (F => u => {
    const pure = of (F);
    return Z.Traversable.test (u) &&
           equals (traverse (F) (pure) (u),
                   pure (u));
  }),

  //  traverse C C u = C (traverse G identity <$> traverse F identity u)
  composition: assert.forall3 (F => G => u => {
    const C = Compose (F) (G);
    return Z.Traversable.test (u) &&
           equals (traverse (C) (C) (u),
                   C (map (traverse (G) (identity))
                          (traverse (F) (identity) (u))));
  }),

});
