import Z from 'sanctuary-type-classes';

import curry2 from './curry2.js';

//  extend :: Extend w => (w a -> b) -> w a -> w b
export default curry2 (Z.extend);
