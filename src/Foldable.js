'use strict';

var Z = require('sanctuary-type-classes');

var assert = require('./internal/assert');
var reduce = require('./internal/reduce');


module.exports = function(equals) {
  return {

    //  reduce f x u = reduce f x (reduce (\xs x -> xs ++ [x]) [] u)
    associativity: assert.forall3(function(f, x, u) {
      return Z.Foldable.test(u) &&
             equals(reduce(f)(x)(u),
                    reduce(f)(x)(reduce(function(xs, x) { return xs.concat([x]); })([])(u)));
    })

  };
};
