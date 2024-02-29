
const assert=require("node:assert");

console.log("Start of Assert Testing..........")

function myfunc(a, b)
{
     let assertresult=assert(a <= 100 && b >= 35, "A value should be less that 100 and B should be >35");
     return assertresult;
}

//console.log(myfunc(90,45));
console.log(myfunc(900,45));

console.log("End of Assert Testing..........")

/*
If you use node a_assert.js you will get 
1.AssertionError for wrong data and process exites
2.Output is  undefined for correct data(because compailer goes to next line)
*/