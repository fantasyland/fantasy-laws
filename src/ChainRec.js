'use strict';

const assert = require ('./internal/assert');
const chain = require ('./internal/chain');
const chainRec = require ('./internal/chainRec');
const map = require ('./internal/map');


module.exports = (equals, CR) => ({

  equivalence: assert.forall4 (p => n => d => i =>
    equals (chainRec (CR) ((next, done, v) => p (v) ? map (done) (d (v)) : map (next) (n (v))) (i),
            (function step(v) { return p (v) ? d (v) : chain (step) (n (v)); } (i)))
  ),

});
