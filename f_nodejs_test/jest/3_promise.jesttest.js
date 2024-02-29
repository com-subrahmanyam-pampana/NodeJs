
let fetchData = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("subbu") }, 2000)
});


test("This is a Peomise test", () => {
    fetchData.then(data => {
        expect(data).toBe("subbu")
    })
})