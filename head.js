const assertEqual = require("./assertEqual")

const head = function (arr) {
  return arr[0];
};

// TEST CODE

// assertEqual(head([]), undefined);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;