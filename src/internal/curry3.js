'use strict';

//  curry3 :: ((a, b, c) -> d) -> a -> b -> c -> d
module.exports = f => x => y => z => f (x, y, z);
