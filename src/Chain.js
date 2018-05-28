'use strict';

var Z = require ('sanctuary-type-classes');

var assert = require ('./internal/assert');
var chain = require ('./internal/chain');
var composeK = require ('./internal/composeK');


module.exports = function(equals) {
  return {

    //  (m >>= f) >>= g = m >>= (f >=> g)
    associativity: assert.forall3 (function(m, f, g) {
      return Z.Chain.test (m) &&
             equals (chain (g) (chain (f) (m)),
                     chain (composeK (g) (f)) (m));
    })

  };
};
