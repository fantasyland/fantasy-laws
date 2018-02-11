'use strict';

var Z = require('sanctuary-type-classes');

var assert = require('./internal/assert');
var compose = require('./internal/compose_');
var contramap = require('./internal/contramap');
var identity = require('./internal/identity');


module.exports = function(equals) {
  return {

    //  contramap identity u = u
    identity: assert.forall1(function(u) {
      return Z.Contravariant.test(u) &&
             equals(contramap(identity)(u),
                    u);
    }),

    //  contramap (f . g) u = (contramap g . contramap f) u
    composition: assert.forall3(function(u, f, g) {
      return Z.Contravariant.test(u) &&
             equals(contramap(compose(f)(g))(u),
                    compose(contramap(g))(contramap(f))(u));
    })

  };
};
