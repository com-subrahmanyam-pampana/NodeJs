
# Create a basic config JSON file
jest --init

1.In the root path ,run this command. This will create a jest.config.js file
2.You can add test files location ,path,pattern in this file

# In package.json setting
In package.json check if "test" script  point to jest instead of other.
"scripts": {
    "test": "jest"
},

This line make sure that ,it uses "jest" testing framework. 
# To run the the test
npm run test

This will run jest test.It search all jest test js file and run them.



# Command line:You can also run with "jest" command
jest my-test --notify --config=config.json

jest tests/async/assertions.jesttest.js

jest E:\PublicRepos\nodejs\src\B_production\unittest\jest\1.SimpleJest.js --notify --config= E:\PublicRepos\nodejs\jest.config.json