# mock
mock=something made as an imitation

 1.An object under test may have dependencies on other (complex) objects. A dependency can be anything your subject depends on, but it is typically a module that the subject imports. 
 2.To isolate the behaviour of the object you want to test you replace the other objects by mocks that simulate the behaviour of the real objects. This is useful if the real objects are impractical to incorporate into the unit test.


 In short, mocking is creating objects that simulate the behaviour of real objects.

# Uses
1.Mocking is primarily used in unit testing. 
2.There are two ways to mock functions: 
(i).creating a mock function to use in test code, 
(ii).or writing a manual mock to override a module dependency.
2.There are three main types of module and function mocking in Jest:

    jest.fn: Mock a function
    jest.mock: Mock a module
    jest.spyOn: Spy or mock a function

# mock vs stub
A mock is like a stub but the test will also verify that the object under test calls the mock as expected. Part of the test is verifying that the mock was used correctly.

