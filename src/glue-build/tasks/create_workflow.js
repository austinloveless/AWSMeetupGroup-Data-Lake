const AWS = require("aws-sdk");
const glue = new AWS.Glue({ region: "us-east-1" });
const config = require("../config");
const {
  config: { WORKFLOW_NAME },
} = config;

const params = {
  Name: WORKFLOW_NAME /* required */,
};
glue.createWorkflow(params, function (err, data) {
  if (err) console.log(err, err.stack);
  // an error occurred
  else console.log(data); // successful response
});
