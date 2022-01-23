'use strict';

const Z = require ('sanctuary-type-classes');

const assert = require ('./internal/assert');
const chain = require ('./internal/chain');
const composeK = require ('./internal/composeK');


module.exports = equals => ({

  //  (m >>= f) >>= g = m >>= (f >=> g)
  associativity: assert.forall3 (m => f => g =>
    Z.Chain.test (m) &&
    equals (chain (g) (chain (f) (m)),
            chain (composeK (g) (f)) (m))
  ),

});
