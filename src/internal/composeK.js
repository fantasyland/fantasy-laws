'use strict';

var chain = require ('./chain');
var curry3 = require ('./curry3');

//  composeK :: Chain m => (b -> m c) -> (a -> m b) -> a -> m c
//
//  Right-to-left Kleisli composition. Equivalent to Haskell's (<=<) function.
module.exports = curry3 (function(f, g, x) { return chain (f) (g (x)); });
