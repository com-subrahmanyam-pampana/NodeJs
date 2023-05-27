
var AWS = require("aws-sdk");

/*EC2 might requires diffretn config and S3 requires diffrent configs */
/*You can set that based on the service */
var ec2_regionA = new AWS.EC2({region: 'ap-southeast-2', maxRetries: 15, apiVersion: '2014-10-01'});
var ec2_regionB = new AWS.EC2({region: 'us-east-1', maxRetries: 15, apiVersion: '2014-10-01'});

var s3 = new AWS.S3({apiVersion: '2006-03-01', region: 'ap-south-1'});

