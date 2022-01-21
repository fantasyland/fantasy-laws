'use strict';

const Z = require ('sanctuary-type-classes');

const assert = require ('./internal/assert');
const reduce = require ('./internal/reduce');


module.exports = equals => ({

  //  reduce f x u = reduce f x (reduce (\xs x -> xs ++ [x]) [] u)
  associativity: assert.forall3 (f => x => u =>
    Z.Foldable.test (u) &&
    equals (reduce (f) (x) (u),
            reduce (f) (x) (reduce ((xs, x) => [...xs, x]) ([]) (u)))
  ),

});
