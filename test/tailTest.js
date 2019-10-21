const tail = require("../tail");
const assert = require('chai').assert;

describe("#tail", () => {

  it("returns [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns 2 when function is passed an array of length 3 like [1,2,3]", () => {
    const inputName = [1, 2, 3]
    const expectedOutput = 2
    assert.deepEqual(tail(inputName).length, expectedOutput);
  });

  it("returns undfined for and empty array", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});


// const assertEqual = require("../assertEqual")

// // Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test Case 2: ...
// const arr = ["Hello"];
// let result2 = tail(arr);
// assertEqual(arr.length, 1); // ensure we get back 3 elements
// assertEqual(arr[0], "Hello"); // 
// assertEqual(arr[1], undefined); // 