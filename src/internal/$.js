'use strict';

//  $ :: a -> (a -> b) -> b
module.exports = x => f => f (x);
