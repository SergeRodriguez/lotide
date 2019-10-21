const middle = require("../middle");
const assert = require('chai').assert;


describe("#middle", () => {
  it("returns [] when [1] is passed to middle()", () => {
    assert.deepEqual(middle([1]), []);
  })
  it("returns [] when [1,2] is passed to middle()", () => {
    assert.deepEqual(middle([1,2]), []);
  })
  it("returns [2] when [1,2] is passed to middle()", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  })
  it("returns [2,4] when [1,2,3,4] is passed to middle()", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  })
})



//assert.deepEqual(middle([1, 2, 3, 4]), [2]);
//assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);