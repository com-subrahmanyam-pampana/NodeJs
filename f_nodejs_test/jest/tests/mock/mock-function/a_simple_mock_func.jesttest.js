

const myMockfunction = jest.fn();

const typeOfMyMockfunction=typeof myMockfunction;
console.log(myMockfunction)
console.log(typeOfMyMockfunction) //function

/*All mock functions have this special .mock property */
const typeOfMock=typeof myMockfunction.mock;
console.log(typeOfMock) //object
const numberofInstances=myMockfunction.mock.instances;
console.log(numberofInstances);