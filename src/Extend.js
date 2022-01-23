'use strict';

const Z = require ('sanctuary-type-classes');

const assert = require ('./internal/assert');
const compose = require ('./internal/compose_');
const extend = require ('./internal/extend');


module.exports = equals => ({

  //  (extend f . extend g) w = extend (f . extend g) w
  associativity: assert.forall3 (w => f => g =>
    Z.Extend.test (w) &&
    equals (compose (extend (f)) (extend (g)) (w),
            extend (compose (f) (extend (g))) (w))
  ),

});
