
var chai = require('chai'); 
const  assert = chai.assert; 

console.log("Start of Chai Assert Testing..........")
function myfunc(a, b)
{
     let assertresult=assert(a <= 100 && b >= 35, "A value should be less that 100 and B should be >35");
     return assertresult;
}

console.log(myfunc(90,45));
//console.log(myfunc(900,45));

console.log("End of Chai Assert Testing..........")

/*
If you use node 1_Assert.js you will get 
1.AssertionError for wrong data and process exites
2.Output is  undefined for correct data(because compailer goes to next line)
*/