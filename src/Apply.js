'use strict';

const Z = require ('sanctuary-type-classes');

const ap = require ('./internal/ap');
const assert = require ('./internal/assert');
const compose = require ('./internal/compose_');
const map = require ('./internal/map');


module.exports = equals => ({

  //  (.) <$> u <*> v <*> w = u <*> (v <*> w)
  composition: assert.forall3 (u => v => w =>
    Z.Apply.test (u) &&
    Z.Apply.test (v) &&
    Z.Apply.test (w) &&
    equals (ap (ap (map (compose) (u)) (v)) (w),
            ap (u) (ap (v) (w)))
  ),

});
