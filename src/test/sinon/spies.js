const assert = require('assert')
const sinon = require('sinon')

function myCallBackTest (x, y, callbackFunc) {
  callbackFunc(x, y)
  // callbackFunc(x, y) If you uncomment this ,it throws erroe as it called twice
}

// eslint-disable-next-line no-undef
describe('Spy types:Anonymous Method', function () {
  // eslint-disable-next-line no-undef
  it('Spy types:Anonymous Method', function () {
    const spy = sinon.spy()
    myCallBackTest(2, 3, spy)
    sinon.assert.calledOnce(spy)
    const output = spy.calledWithExactly(2, 3)
    assert.equal(output, true)
  })
})

/*To run
mocha spies.js
*/

function sumTwoNumbers (x, y) {
    return x + y
}

// eslint-disable-next-line no-undef
describe('Spy types:Wraping the  Method', function () {
    // eslint-disable-next-line no-undef
    it('Spy types:Wraping the  Method', function () {
      const spy = sinon.spy(sumTwoNumbers)
      sumTwoNumbers(2, 3)
      sinon.assert.calledOnce(spy)
     
      assert.equal(spy.calledWithExactly(2, 3), true)
    })
  })