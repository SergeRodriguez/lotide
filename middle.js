const assertArraysEqual = require("./assertArraysEqual");

const middle = function (arr) {
  let answer = []
  if (arr.length <= 2) {
    return answer
  }
  if ((arr.length % 2) !== 0) {
    const midIndex = Math.floor(arr.length / 2);
    answer.push(arr[midIndex]);
    return answer
  }
  if ((arr.length % 2) === 0) {
    const midIndex = Math.floor(arr.length / 2);
    answer.push(arr[midIndex - 1])
    answer.push(arr[midIndex]);
    return answer
  }
};

module.exports = middle;

// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);








