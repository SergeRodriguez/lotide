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



const without = function (sourceArray, itemsToRemove) {
  let filteredArray = []

  if (itemsToRemove.length === 0) {
    return sourceArray;
  }

  for (let i = 0; i < sourceArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {

      if (sourceArray[i] !== itemsToRemove[j] && filteredArray.indexOf(sourceArray[i]) === -1 && ((j + 1) === itemsToRemove.length)) {
        filteredArray.push(sourceArray[i]);
      }
    }
  }
  // for(let i = 0; i < itemsToRemove.length; i++){
  //   let targetIndex = sourceArray.indexOf(itemsToRemove[i])
  //   if( targetIndex >= 0){
  //     filteredArray.splice(targetIndex,1)
  //   }
  // }
  return filteredArray
}

// console.log(without([1, 2, 3], [1])) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
// console.log(without(["lucas", "serge", "grant", "jeff"], ["serge"]))
// console.log(without([1, 2, 3], [])) // => [2, 3]


assertArraysEqual(without(["lucas", "serge", "grant", "jeff"], ["serge"]), ["lucas", "grant", "jeff"]);
assertArraysEqual(without([1, 2], []), [1, 2]);
assertArraysEqual(without([1, 2, 3], []), [1,2,3]);
//assertArraysEqual(without([1, 2, 3]), [2]);
//assertArraysEqual(without([1, 2, 3, 4]), [2]);
//assertArraysEqual(without([1, 2, 3, 4]), [2, 3])