
Often while writing tests you have some setup work that needs to happen before tests run, and you have some finishing work that needs to happen after tests run. 

Jest provides helper functions to handle this.

beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});