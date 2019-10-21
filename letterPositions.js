const letterPositions = function (sentence) {
  const results = {};
  const allItems = sentence.split("")

  for (let i = 0; i < allItems.length; i++) {
    if (allItems[i] !== " ") {
      if (results[allItems[i]]) {
        results[allItems[i]].push(i)
      } else {
        results[allItems[i]] = [i]
      }
    }
  }
 
  return results;
};

const result1 = letterPositions("lighthouse in the house")
console.log(result1);

// { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }

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

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`😀 😀 😀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 🚫 🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual(letterPositions("hello")["h"], [0]);
assertArraysEqual(letterPositions("hello")["e"], [1]);
assertArraysEqual(letterPositions("hello")["l"], [2,3]);
assertArraysEqual(letterPositions("hello")["o"], [4]);

module.exports = letterPositions;