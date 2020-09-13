const AWS = require("../../functions/StarWars-starships/src/node_modules/aws-sdk");
const glue = new AWS.Glue({ region: "us-east-1" });
const config = require("../config");
const {
  config: { IAM_ROLE, SCRIPT_LOCATION, JOB_NAME },
} = config;

const params = {
  JobName: JOB_NAME /* required */,
};
glue.startJobRun(params, function (err, data) {
  if (err) console.log(err, err.stack);
  // an error occurred
  else console.log(data); // successful response
});
