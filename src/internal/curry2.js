//  curry2 :: ((a, b) -> c) -> a -> b -> c
export default f => x => y => f (x, y);
