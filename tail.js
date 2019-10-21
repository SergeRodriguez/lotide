const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😀 😀 😀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☢ ☢ ☢ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (arr) {
  return arr.slice(1);
};


// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: ...
const arr = ["Hello"];
let result2 = tail(arr);
assertEqual(arr.length, 1); // ensure we get back 3 elements
assertEqual(arr[0], "Hello"); // ensure first element is "Hello"
assertEqual(arr[1], undefined); // ensure second element is "Lighthouse"