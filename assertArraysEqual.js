//const assertArrayEqual = function(arr1, arr2) {
//
//  console.log(`The arrays are identical : ${eqArrays(arr1,arr2)}`);
//};

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

const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`😀 😀 😀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 🚫 🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArrayEqual([1,2,3], [1,2,"3"]);

