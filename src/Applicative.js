'use strict';

var Z = require('sanctuary-type-classes');

var $ = require('./internal/$');
var ap = require('./internal/ap');
var assert = require('./internal/assert');
var identity = require('./internal/identity');
var of = require('./internal/of');


module.exports = function(equals, A) {
  var pure = of(A);
  return {

    //  pure identity <*> v = v
    identity: assert.forall1(function(v) {
      return Z.Applicative.test(v) &&
             equals(ap(pure(identity))(v),
                    v);
    }),

    //  pure f <*> pure x = pure (f x)
    homomorphism: assert.forall2(function(f, x) {
      return equals(ap(pure(f))(pure(x)),
                    pure(f(x)));
    }),

    //  u <*> pure y = pure ($ y) <*> u
    interchange: assert.forall2(function(u, y) {
      return Z.Applicative.test(u) &&
             equals(ap(u)(pure(y)),
                    ap(pure($(y)))(u));
    })

  };
};
