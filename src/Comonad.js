'use strict';

const Z = require ('sanctuary-type-classes');

const assert = require ('./internal/assert');
const compose = require ('./internal/compose_');
const extend = require ('./internal/extend');
const extract = require ('./internal/extract');


module.exports = equals => ({

  //  extend extract w = w
  leftIdentity: assert.forall1 (w =>
    Z.Comonad.test (w) &&
    equals (extend (extract) (w),
            w)
  ),

  //  (extract . extend f) w = f w
  rightIdentity: assert.forall2 (w => f =>
    Z.Comonad.test (w) &&
    equals (compose (extract) (extend (f)) (w),
            f (w))
  ),

});
