
/*The top level before* and after* hooks 
apply to every test in a file. The hooks
 declared inside a describe block apply only 
to the tests within that describe block. */

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

beforeEach(() => {
    data.event="se connecter"
    //se connecter is the french word for the login
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
