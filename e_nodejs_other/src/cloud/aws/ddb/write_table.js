// Load the AWS SDK for Node.js
const AWS = require('aws-sdk')
// Set the region
AWS.config.update({ region: 'us-west-2' })

// Create the DynamoDB service object
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' })

const params = {
  TableName: 'CUSTOMER_LIST',
  Item: {
    USER_ID: { N: '001' },
    USER_NAME: { S: 'Richard Roe' }
  }
}

// Call DynamoDB to add the item to the table
ddb.putItem(params, function (err, data) {
  if (err) {
    console.log('Error', err)
  } else {
    console.log('Success', data)
  }
})
