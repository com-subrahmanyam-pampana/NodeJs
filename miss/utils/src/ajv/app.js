// Node.js require:
const Ajv = require("ajv")

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const schema = {
  type: "object",
  properties: {
    foo: {type: "integer"},
    bar: {type: "string"},
  },
  required: ["foo"],
  additionalProperties: false,
}

const data1 = {
  foo: 1,
  bar: "abc",
}
const data2 = {
    foo: 1
}

const data3 = {
    bar: "abc"
  }

const validate = ajv.compile(schema)
const valid = validate(data3)
if (!valid) console.log(validate.errors)