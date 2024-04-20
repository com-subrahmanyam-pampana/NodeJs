
# mock function
With a mock function we can know the number of times the function was called, the arguments it was called with, the result it returned, and more. This ability to "spy" on function calls is why mock functions are also called spies.

# The Mock Function provides features to:

    Capture calls
    Set return values
    Change the implementation
# jest.fn() implementation:
If an implementation is provided, calling the mock function will call the implementation and return it's return value.

If no implementation is provided, calling the mock returns undefined because the return value is not defined.
// Without implementation, this mock returns `undefined`.
const mockUndefined = jest.fn();

// With implementation, this mock returns `true`.
const mockTrue = jest.fn(() => true).
