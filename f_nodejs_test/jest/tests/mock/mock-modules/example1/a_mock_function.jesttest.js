const app = require("./app");
const math = require("./math");

/*Mock a function with jest.fn */

/*The most basic strategy for mocking is to 
reassign a function to the Mock Function. 
Then, anywhere the reassigned functions are used, 
the mock will be called instead of the original 
function: */
math.add = jest.fn();
math.subtract = jest.fn();
//In the above "add" and "subtract" original functions 
//present in the "math" are reassigned with jest functions
//So mock functions  will be called instead of the original 
//function

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});