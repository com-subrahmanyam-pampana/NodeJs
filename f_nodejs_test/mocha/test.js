var assert = require('assert');


describe('Array', function () {
  /*Test 1 */
  describe('array_length_test', function () {
    it('should return 3:the length of tghe array', function () {
      assert.equal([1, 2, 3].length, 3);
    });
  });
  
  /*Test 2 */
  describe('array_index_test', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
