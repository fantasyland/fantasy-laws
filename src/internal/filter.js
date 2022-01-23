import Z from 'sanctuary-type-classes';

import curry2 from './curry2.js';

//  filter :: Filterable f => (a -> Boolean) -> f a -> f a
export default curry2 (Z.filter);
