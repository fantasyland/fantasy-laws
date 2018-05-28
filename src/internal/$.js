'use strict';

var curry2 = require ('./curry2');

//  $ :: a -> (a -> b) -> b
module.exports = curry2 (function(x, f) { return f (x); });
