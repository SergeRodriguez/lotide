const tail = function (arr) {
  return arr.slice(1);
};

module.exports = tail;

// // Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test Case 2: ...
// const arr = ["Hello"];
// let result2 = tail(arr);
// assertEqual(arr.length, 1); // 
// assertEqual(arr[0], "Hello"); // ensure first element is "Hello"
// assertEqual(arr[1], undefined); // 

console.log(tail([]))