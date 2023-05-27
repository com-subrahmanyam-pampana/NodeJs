// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'ap-south-1'});

// Create an SQS service object
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});



var params = {
   // Remove DelaySeconds parameter and value for FIFO queues
  DelaySeconds: 10,
  MessageAttributes: {
    "user": {
      DataType: "String",
      StringValue: "Subbu"
    },
    "website": {
      DataType: "String",
      StringValue: "subrahmanyampampana.com"
    }
  },
  MessageBody: "This is my msg body",
  // MessageDeduplicationId: "TheWhistler",  // Required for FIFO queues
  // MessageGroupId: "Group1",  // Required for FIFO queues
  QueueUrl: "https://sqs.ap-south-1.amazonaws.com/123456/Login"
};

sqs.sendMessage(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.MessageId);
  }
});