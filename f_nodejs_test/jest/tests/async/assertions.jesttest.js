
/*
1.expect.assertions is important when testing the 
error scenarios of asynchronous code
2.To ensure that the assertions in the catch block of an
async/await test are adequately tested, 
expect.assertions(n) must be declared . 
3.Such declaration is unnecessary for async/await tests without the catch block.

4.expect.assertions(3) is simply saying ...

I expected 3 expect statements to be called before the test times out. e.g.

expect(actual1).toEqual(expected1);
expect(actual2).toEqual(expected2);
expect(actual3).toEqual(expected3);

*/

const fetchData = async () => {
    return "peanut butter"
}

const fetchData2 = async () => {
    /*Throws an error with message "error" */
    throw new Error("error")
}
test('the data is peanut butter', async () => {
    /*expect.assertions not required as there is no catch block */
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

test('the fetch passes  with out an error', async () => {
    expect.assertions(0);
    try {
        await fetchData();
    } catch (error) {
        /*In this case expect(error).toMatch('error')
        won't be called because catch block won't execute
        */
       /*That is why we gave  expect.assertions to 0 */
        expect(error).toMatch('error');
    }
});

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await fetchData2();
    } catch (error) {
        expect(error.message).toMatch('error');
    }
});

test('test fails:Actual assertions=1 but expected are 2', async () => {
    expect.assertions(2);
    try {
        await fetchData2();
    } catch (error) {
        expect(error.message).toMatch('error');
    }
});