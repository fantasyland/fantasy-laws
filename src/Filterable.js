'use strict';

var Z = require ('sanctuary-type-classes');

var K = require ('./internal/K');
var assert = require ('./internal/assert');
var filter = require ('./internal/filter');


module.exports = function(equals) {
  return {

    //  filter (\x -> p x && q x) v = filter q (filter p v)
    distributivity: assert.forall3 (function(v, p, q) {
      return Z.Filterable.test (v) &&
             equals (filter (function(x) { return p (x) && q (x); }) (v),
                     filter (q) (filter (p) (v)));
    }),

    //  filter (\x -> True) v = v
    identity: assert.forall1 (function(v) {
      return Z.Filterable.test (v) &&
             equals (filter (K (true)) (v),
                     v);
    }),

    //  filter (\x -> False) v = filter (\x -> False) w
    annihilation: assert.forall2 (function(v, w) {
      return Z.Filterable.test (v) &&
             Z.Filterable.test (w) &&
             equals (filter (K (false)) (v),
                     filter (K (false)) (w));
    })

  };
};
