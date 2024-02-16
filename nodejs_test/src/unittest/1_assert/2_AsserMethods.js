


const {assert,deepEqual,deepStrictEqual,equal,strictEqual}=require("node:assert");




function assertMethod(){
    let a1=90;
let a2="90";
let b1=35;
let b2="35";
let c1=150;
    /*Assert():This methods Checks if a value is true. */
console.log("assert().......")
//assert(a1 <= 100 && b1 >= 35, "A value should be less that 100 and B should be >35");
assert(a2 <= 100 && b1 >= 35, "A value should be less that 100 and B should be >35");
//This method won't check the data type
}

function deepStrictEqualMethod(){
    /*It checks  two objects, or their child objects also.
     If asserion fails an error is thrown and the program will  terminat. */
    var x = { subbu : { age: 10 } };
    var y = { subbu : { age: 10 } };
    var z = { subbu : { age: "10" } };
    deepStrictEqual(x, y); //OK
    //deepEqual(x, z); /*AssertionError*/
}

function deepStrictEqualMethod(){
    /*It checks  two objects, or their child objects also.
     If asserion fails an error is thrown and the program will  terminat. */
    var x = { subbu : { age: 10 } };
    var y = { subbu : { age: 10 } };
    var z = { subbu : { age: 28 } };
    //deepEqual(x, y); //OK
    deepEqual(x, z); /*AssertionError*/
}

function equalAndStrictEqual(){
    //equal
    let a=2;
    let b=2;
    let c="2";
    equal(a,b);
    equal(a,c);
    strictEqual(a,b);
    strictEqual(a,c);
}

//assertMethod();
//deepEqualMethod()
//deepStrictEqualMethod();
equalAndStrictEqual()

console.log("End of Assert Methods Testing..........")

