
/*In the  before* and after* hooks, the code is 
asyasynchronous then you can use 
a.)done parameter or (b).return a promise.
 */

const data = {
    "event": "login",
    "time": "5:30"
}



function getEuropeTimeStamp() {
    return "5:30"
}

function getUSATimeStamp() {
    return "1:00"
}

const delay = ms => new Promise(res => setTimeout(res, ms));
const convertEventNameToFrench=async()=>{
    await delay(2000);
    data.event="se connecter"
    //se connecter is the french word for the login
    return "";
}
beforeEach(() => {
      return convertEventNameToFrench()
});

afterEach(() => {
    data.event="login"
});

describe("event testing in the Europe timezone", () => {
    test("something I want to test", () => {
        expect(getEuropeTimeStamp()).toBe(data.time)
    })
});


describe("event type test", () => {
    test("something I want to test", () => {
        expect(data.event).toBe("se connecter")
    })
});
