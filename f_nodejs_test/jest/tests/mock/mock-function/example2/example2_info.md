When testing isAtLeast18() we have to keep in mind that the isInteger() dependency affects the module's behaviour:

    if isInteger() is false , isAtLeast18() is false;
    if isInteger() is true , isAtLeast18() depends on the value argument.
