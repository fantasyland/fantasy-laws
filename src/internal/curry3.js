//  curry3 :: ((a, b, c) -> d) -> a -> b -> c -> d
export default f => x => y => z => f (x, y, z);
