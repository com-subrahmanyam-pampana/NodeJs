Sometimes you only want to watch a method be called, but keep the original implementation. Other times you may want to mock the implementation, but restore the original later in the suite.

In these cases, you can use jest.spyOn.

Here we simply “spy” calls to the math function, but leave the original implementation in place