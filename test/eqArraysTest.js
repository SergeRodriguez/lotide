const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);
assertEqual(eqArrays([1, 2, "Serge"], [1, 2, "serge"]), false);
assertEqual(eqArrays(["1", "2", false], ["1", "2", NaN]), false);
assertEqual(eqArrays([1, 2, false], [1, 2, undefined]), false);
assertEqual(eqArrays([1, 2, false], [1, 2, 0]), false);
assertEqual(eqArrays([1, 2, false], [1, 2, null]), false);
assertEqual(eqArrays([1, 2, false], [1, 2, ""]), false);
