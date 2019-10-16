
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


const eqObjects = function (object1, object2) {

  if ((Object.keys(object1)).length !== (Object.keys(object2)).length) {
    return false
  }
  for (let keys of Object.keys(object1)) {
    if (!eqArrays(object1[keys], object2[keys])) {
      return false
    }
  }

  return true
}

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; // <= add this line

  if (eqObjects(actual, expected)) {
    console.log(`😀 😀 😀  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🚫 🚫 🚫 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


assertObjectsEqual(ab,ba);
assertObjectsEqual(ab,abc);
assertObjectsEqual(ba,abc);
assertObjectsEqual(cd,dc);
assertObjectsEqual(cd,cd2);

