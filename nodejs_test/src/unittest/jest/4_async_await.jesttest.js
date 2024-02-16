

console.log("Async Await testing...")
 let fetchData=()=>{
    setTimeout(()=>{return "subbu"},2000)
 }


 /*In order to write async test,use the async keyword
  in front of function passes to test */
 test("Astnc Await test",async ()=>{
    expect.assertions("subbu")
      try{
     await fetchData();
        
      }catch(e){
        expect(e).toMatch('error')
      }
 })