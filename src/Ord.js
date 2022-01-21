'use strict';

const Z = require ('sanctuary-type-classes');

const assert = require ('./internal/assert');


module.exports = {

  //  a `lte` b || b `lte` a
  totality: assert.forall2 (a => b =>
    Z.Ord.test (a) &&
    Z.Ord.test (b) &&
    (Z.lte (a, b) || Z.lte (b, a))
  ),

  //  a `lte` b && b `lte` a => a `equals` b
  antisymmetry: assert.forall2 (a => b =>
    Z.Ord.test (a) &&
    Z.Ord.test (b) &&
    (Z.lte (a, b) && Z.lte (b, a) ? Z.equals (a, b) : true)
  ),

  //  a `lte` b && b `lte` c => a `lte` c
  transitivity: assert.forall3 (a => b => c =>
    Z.Ord.test (a) &&
    Z.Ord.test (b) &&
    Z.Ord.test (c) &&
    (Z.lte (a, b) && Z.lte (b, c) ? Z.lte (a, c) : true)
  ),

};
