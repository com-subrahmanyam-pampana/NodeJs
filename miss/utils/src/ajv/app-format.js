
require("ajv-formats")(ajv)

const schema = {
  type: "string",
  format: "date",
  formatMinimum: "2016-02-06",
  formatExclusiveMaximum: "2016-12-27",
}

const validDataList = ["2016-02-06", "2016-12-26"]

const invalidDataList = ["2016-02-05", "2016-12-27", "abc"]
