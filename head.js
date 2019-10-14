const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😀 😀 😀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☢ ☢ ☢ Assertion Failed: ${actual} !== ${expected}`);
  }
};

function head(array) {
  return array[0];
}
// TEST CODE
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");