import assert from './internal/assert.js';
import chain from './internal/chain.js';
import chainRec from './internal/chainRec.js';
import map from './internal/map.js';


export default (equals, CR) => ({

  equivalence: assert.forall4 (p => n => d => i =>
    equals (chainRec (CR) ((next, done, v) => p (v) ? map (done) (d (v)) : map (next) (n (v))) (i),
            (function step(v) { return p (v) ? d (v) : chain (step) (n (v)); } (i)))
  ),

});
