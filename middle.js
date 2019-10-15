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

const assertArrayEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`😀 😀 😀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 🚫 🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(arr){
  let answer = []
  if(arr.length <= 2){
    return answer
  }
  if((arr.length % 2) !== 0 ){
    const midIndex = Math.floor(arr.length/2);
    answer.push(arr[midIndex]);
    return answer
  }
  if((arr.length % 2) === 0 ){
    const midIndex = Math.floor(arr.length/2);
    answer.push(arr[midIndex-1])
    answer.push(arr[midIndex]);
    return answer
  }
};

assertArrayEqual(middle([1]),[]);
assertArrayEqual(middle([1,2]),[]);
assertArrayEqual(middle([1,2,3]),[]);
assertArrayEqual(middle([1,2,3]),[2]);
assertArrayEqual(middle([1,2,3,4]),[2]);
assertArrayEqual(middle([1,2,3,4]),[2,3]);








