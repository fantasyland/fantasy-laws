'use strict';

var Z = require ('sanctuary-type-classes');

var ap = require ('./internal/ap');
var assert = require ('./internal/assert');
var compose = require ('./internal/compose_');
var map = require ('./internal/map');


module.exports = function(equals) {
  return {

    //  (.) <$> u <*> v <*> w = u <*> (v <*> w)
    composition: assert.forall3 (function(u, v, w) {
      return Z.Apply.test (u) &&
             Z.Apply.test (v) &&
             Z.Apply.test (w) &&
             equals (ap (ap (map (compose) (u)) (v)) (w),
                     ap (u) (ap (v) (w)));
    })

  };
};
