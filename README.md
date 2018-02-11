# fantasy-laws

Property-based tests to verify the lawfulness of [Fantasy Land][1] -compliant
algebraic data types.

## Installation

Add `fantasy-laws`, [`jsverify`][2], and [`sanctuary-type-classes`][3] to
`"devDependencies"` in __package.json__, then run `npm install`.

## Usage

Usage is best explained by example. The following code defines a Sum type which
is intended to satisfy Setoid, Semigroup, Monoid, and Group:

```javascript
function Sum(value) {
  if (!(this instanceof Sum)) return new Sum(value);
  this.value = value;
}

//  Sum.fantasy-land/empty :: () -> Sum
Sum['fantasy-land/empty'] = function() { return Sum(0); };

//  Sum#fantasy-land/equals :: Sum ~> Sum -> Boolean
Sum.prototype['fantasy-land/equals'] = function(other) {
  return Z.equals(this.value, other.value);
};

//  Sum#fantasy-land/concat :: Sum ~> Sum -> Sum
Sum.prototype['fantasy-land/concat'] = function(other) {
  return Sum(this.value + other.value);
};

//  Sum#fantasy-land/invert :: Sum ~> () -> Sum
Sum.prototype['fantasy-land/invert'] = function() {
  return Sum(-this.value);
};
```

The following steps demonstrate how to test the Group laws:

1.  Require `fantasy-laws`, `jsverify`, and `sanctuary-type-classes`:

    ```javascript
    const laws = require('fantasy-laws');
    const jsc = require('jsverify');
    const Z = require('sanctuary-type-classes');
    ```

2.  Require the type to be tested:

    ```javascript
    const Sum = require('../Sum');
    ```

3.  Define an ["arbitrary"][4] for the type:

    ```javascript
    //    SumArb :: Arbitrary Sum
    const SumArb = jsc.number.smap(Sum, sum => sum.value, Z.toString);
    ```

4.  Provide the fixed parameters to `laws.Group`:

    ```javascript
    const {leftInverse, rightInverse} = laws.Group(Z.equals, Sum);
    ```

5.  Provide the appropriate number of arbitraries to the function associated
    with a particular law to produce a thunk:

    ```javascript
    //    testLeftInverse :: () -> Undefined !
    const testLeftInverse = leftInverse(SumArb);

    //    testRightInverse :: () -> Undefined !
    const testRightInverse = rightInverse(SumArb);
    ```

6.  To run the tests, invoke the thunk or use a test runner such as Mocha:

    ```javascript
    suite('Group laws', () => {
      test('left inverse', testLeftInverse);
      test('right inverse', testRightInverse);
    });
    ```


[1]: https://github.com/fantasyland/fantasy-land
[2]: https://github.com/jsverify/jsverify
[3]: https://github.com/sanctuary-js/sanctuary-type-classes
[4]: https://github.com/jsverify/jsverify#arbitrary-data
