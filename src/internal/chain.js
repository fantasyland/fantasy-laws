import Z from 'sanctuary-type-classes';

import curry2 from './curry2.js';

//  chain :: Chain m => (a -> m b) -> m a -> m b
export default curry2 (Z.chain);
