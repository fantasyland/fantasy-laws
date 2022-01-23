import Z from 'sanctuary-type-classes';

import assert from './internal/assert.js';
import reduce from './internal/reduce.js';


export default equals => ({

  //  reduce f x u = reduce f x (reduce (\xs x -> xs ++ [x]) [] u)
  associativity: assert.forall3 (f => x => u =>
    Z.Foldable.test (u) &&
    equals (reduce (f) (x) (u),
            reduce (f) (x) (reduce ((xs, x) => [...xs, x]) ([]) (u)))
  ),

});
