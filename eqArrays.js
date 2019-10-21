const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true
};

module.exports = eqArrays;

// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);
// assertEqual(eqArrays([1, 2, "Serge"], [1, 2, "serge"]), false);
// assertEqual(eqArrays(["1", "2", false], ["1", "2", NaN]), false);
// assertEqual(eqArrays([1, 2, false], [1, 2, undefined]), false);
// assertEqual(eqArrays([1, 2, false], [1, 2, 0]), false);
// assertEqual(eqArrays([1, 2, false], [1, 2, null]), false);
// assertEqual(eqArrays([1, 2, false], [1, 2, ""]), false);






