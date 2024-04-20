

const data = {
    "event": "login",
    "time": "1:00"
}

function getISTTimeStamp(){
    return "5:30"
}

function getUSATimeStamp(){
    return "1:00"
}

/*One or several tests can be grouped with nested 
describe just to have their own afterEach, etc blocks */
describe("event testing in the IST timezone", () => {
    beforeEach(() => {
        data.time = "5:30"
    });
    test("something I want to test", () => {
        expect(getISTTimeStamp()).toBe(data.time)
    })
    afterEach(() => {
        data.time = "1:00"
    });
});


describe("event testing in the USA timezone", () => {
    test("something I want to test", () => {
        expect(getUSATimeStamp()).toBe(data.time)
    })
});
