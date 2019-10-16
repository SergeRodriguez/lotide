const countLetters = function (str) {
  
  const results = {}
  const allItems = str.split("")

  for (const item of allItems) {
    if (item !== " ") {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
}


const result1 = countLetters("lighthouse in the house")
console.log(result1);


const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😀 😀 😀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 🚫 🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
}

assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1[" "], undefined);


//{
//  l: 1,i: 2,g: 1,h: 4,t: 2,o: 2,u: 2,s: 2,e: 3,n: 1,
//}
