
const jest =require("jest")
const fetchData=(callback)=>{

    setTimeout(()=>{
        callback(false,"subbu")
    },1000)
   
}

test("Wrong way of using callback",()=>{
    function callback(error,data){
        if(error){
            throw error;
        }
        expect(data).toBe("subbu")
    }
    fetchData(callback);

    /*The problem is that the test will complete as 
    soon as fetchData completes, before ever 
    calling the callback. */
});

test("Correct way of using callback",()=>{
    /*Jest will wait until the done callback is called 
    before finishing the test. */
    function callback(error,data){
        if(error){
            jest.done(error);
            return
        }
        try{
            expect(data).toBe("subbu");
            jest.done()
        }catch(error){
            jest.done(error)
        }
    }
    fetchData(callback);
});