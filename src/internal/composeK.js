'use strict';

const chain = require ('./chain');

//  composeK :: Chain m => (b -> m c) -> (a -> m b) -> a -> m c
//
//  Right-to-left Kleisli composition. Equivalent to Haskell's (<=<) function.
module.exports = f => g => x => chain (f) (g (x));
