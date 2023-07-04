const sinon = require('sinon');
/*To run
mocha spies_calledOnce.js
*/

function myCallBackTest (x, y, callbackFunc) {
  callbackFunc(x, y)
}

// eslint-disable-next-line no-undef
describe('Spy :', function () {
    // eslint-disable-next-line no-undef
    it('Spy :Called once Success case', function () {
      const spy = sinon.spy()
      myCallBackTest(2, 3,spy)
      sinon.assert.calledOnce(spy)
    })
  })

  // eslint-disable-next-line no-undef
describe('Spy :', function () {
  // eslint-disable-next-line no-undef
  it('Spy :Called once Fail case', function () {
    const spy = sinon.spy()
    myCallBackTest(2, 3,spy)
    myCallBackTest(2, 3,spy)
    sinon.assert.calledOnce(spy)
  })
})

describe('Spy :', function () {
  // eslint-disable-next-line no-undef
  it('Spy :Called twice Success case', function () {
    const spy = sinon.spy()
    myCallBackTest(2, 3,spy)
    myCallBackTest(2, 3,spy)
    sinon.assert.calledTwice(spy)
  })
})