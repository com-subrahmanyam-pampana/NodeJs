const sinon = require('sinon');
/*To run
mocha spies_before_andafter_each.js
*/

function myCallBackTest (x, y, callbackFunc) {
  callbackFunc(x, y)
}

// eslint-disable-next-line no-undef
describe('Spy :Without before each', function () {
    // eslint-disable-next-line no-undef
    it('Spy :Called once Success case', function () {
      const spy = sinon.spy()
      myCallBackTest(2, 3,spy)
      sinon.assert.calledOnce(spy)
    })
    it('Spy :Called twice Success case', function () {
      const spy = sinon.spy()
      myCallBackTest(2, 3,spy)
      myCallBackTest(2, 3,spy)
      sinon.assert.calledTwice(spy)
    })
  })

/*spy instance is used in 2 places.We can rewrite using beforeEach */
  // eslint-disable-next-line no-undef
describe('Spy :', function () {
  // eslint-disable-next-line no-undef
  let spy;
  beforeEach(()=>{
    spy=sinon.spy();
  })

  afterEach(()=>{
    // spy.reset();
  })
  it('Spy :Called once Success case', function () {
   
    myCallBackTest(2, 3,spy)
    sinon.assert.calledOnce(spy)
  })
  it('Spy :Called twice Success case', function () {
    myCallBackTest(2, 3,spy)
    myCallBackTest(2, 3,spy)
    sinon.assert.calledTwice(spy)
  })
})


