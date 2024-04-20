
test("returns undefined by default", () => {
    const myMockfunction = jest.fn();
    /*We created a function called myMockfunction
    but we didn't implemented it
    */
    let result = myMockfunction("foo");
    /*We are calling the function that we created */
    expect(result).toBeUndefined();
    expect(myMockfunction).toHaveBeenCalled();
    expect(myMockfunction).toHaveBeenCalledTimes(1);
    expect(myMockfunction).toHaveBeenCalledWith("foo");
  });

  /*we can change the return value, implementation,
   or promise resolution */
   test("mock implementation", () => {
    const myMockfunction = jest.fn(() => "bar");
    /*We created a function called myMockfunction
    also we  implemented it.Function will return "bar"
    */
    const result=myMockfunction("foo");
    expect(result).toBe("bar");
    expect(myMockfunction).toHaveBeenCalledWith("foo");
  });
  
  test("also mock implementation", () => {
    const myMockfunction = jest.fn().mockImplementation(() => "bar");
    /*Another way of implementing mock */
    expect(myMockfunction("foo")).toBe("bar");
    expect(myMockfunction).toHaveBeenCalledWith("foo");
  });
  
  test("mock implementation one time", () => {
    const myMockfunction = jest.fn().mockImplementationOnce(() => "bar");
    /*Accepts a function that will be used as an 
    implementation of the mock for one 
    call to the mocked function.  */
    expect(myMockfunction("foo")).toBe("bar");
    expect(myMockfunction).toHaveBeenCalledWith("foo");
  
    expect(myMockfunction("baz")).toBe(undefined);
    expect(myMockfunction).toHaveBeenCalledWith("baz");
  });
  
  test("mock return value", () => {
    const myMockfunction = jest.fn();
    myMockfunction.mockReturnValue("bar");
    /*You can retun your custome value */
    expect(myMockfunction("foo")).toBe("bar");
    expect(myMockfunction).toHaveBeenCalledWith("foo");
  });
  
  test("mock promise resolution", () => {
    const myMockfunction = jest.fn();
    myMockfunction.mockResolvedValue("bar");
  
    expect(myMockfunction("foo")).resolves.toBe("bar");
    expect(myMockfunction).toHaveBeenCalledWith("foo");
  });