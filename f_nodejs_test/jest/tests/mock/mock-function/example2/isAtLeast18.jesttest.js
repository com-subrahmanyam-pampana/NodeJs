

// isAtLeast18.spec.js
const isAtLeast18 = require("./isAtLeast18");
const isInteger = require("./isInteger");

// The mock factory returns a mocked function
jest.mock("./isInteger", () => jest.fn());
/*The import path of the mocked module must match the 
import path that is present in the module we're testing. 
The isAtLeast18.js module imports the isInteger.js module
 under the path "./isInteger". 
 This is why our mock import path is also "./isInteger". */
beforeEach(() => {
  isInteger.mockClear();
});

describe("isAtLeast18", () => {
  it("fails if value is not recognised as integer", () => {
    isInteger.mockImplementation(() => false);

    expect(isAtLeast18(123)).toBe(false);
    expect(isInteger).toHaveBeenCalledWith(123);
    expect(isInteger).toHaveBeenCalledTimes(1);
  });

  it("passes if value is recognised as integer and is at least 18", () => {
    isInteger.mockImplementation(() => true);

    expect(isAtLeast18(123)).toBe(true);
    expect(isInteger).toHaveBeenCalledWith(123);
    expect(isInteger).toHaveBeenCalledTimes(1);
  });
});
