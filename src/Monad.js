'use strict';

var Z = require('sanctuary-type-classes');

var assert = require('./internal/assert');
var chain = require('./internal/chain');
var of = require('./internal/of');


module.exports = function(equals, M) {
  var pure = of(M);
  return {

    //  pure x >>= f = f x
    leftIdentity: assert.forall2(function(f, x) {
      return equals(chain(f)(pure(x)),
                    f(x));
    }),

    //  m >>= pure = m
    rightIdentity: assert.forall1(function(m) {
      return Z.Monad.test(m) &&
             equals(chain(pure)(m),
                    m);
    })

  };
};
