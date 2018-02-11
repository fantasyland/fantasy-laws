'use strict';

var Z = require('sanctuary-type-classes');

var Compose = require('./internal/Compose');
var assert = require('./internal/assert');
var identity = require('./internal/identity');
var map = require('./internal/map');
var of = require('./internal/of');
var traverse = require('./internal/traverse');


module.exports = function(equals) {
  return {

    //  t (traverse F identity u) = traverse G t u
    naturality: assert.forall4(function(F, G, t, u) {
      return Z.Traversable.test(u) &&
             equals(t(traverse(F)(identity)(u)),
                    traverse(G)(t)(u));
    }),

    //  traverse F F u = of F u
    identity: assert.forall2(function(F, u) {
      return Z.Traversable.test(u) &&
             equals(traverse(F)(F)(u),
                    of(F)(u));
    }),

    //  traverse C C u = C (traverse G identity <$> traverse F identity u)
    composition: assert.forall3(function(F, G, u) {
      var C = Compose(F)(G);
      return Z.Traversable.test(u) &&
             equals(traverse(C)(C)(u),
                    C(map(traverse(G)(identity))(traverse(F)(identity)(u))));
    })

  };
};
