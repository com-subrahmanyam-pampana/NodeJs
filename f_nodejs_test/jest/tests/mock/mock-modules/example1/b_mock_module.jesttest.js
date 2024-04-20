/*
A more common approach is to use jest.mock to 
automatically set all exports of a module to 
the Mock Function.
 So, calling jest.mock('./math.js'); essentially sets
  math.js to:
export const add      = jest.fn();
export const subtract = jest.fn();
export const multiply = jest.fn();
export const divide   = jest.fn();
*/


const app = require("./app");
const math = require("./math");


// Set all module functions to jest.fn
jest.mock("./math.js");

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});