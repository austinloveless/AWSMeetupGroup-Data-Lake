const AWS = require("aws-sdk");
const glue = new AWS.Glue({ region: "us-east-1" });
const config = require("../config");
const {
  config: { JOB_NAME, JOB_TRIGGER_NAME, WORKFLOW_NAME },
} = config;

const params = {
  Actions: [
    /* required */
    {
      JobName: JOB_NAME,
    },
  ],
  Name: JOB_TRIGGER_NAME,
  Type: "SCHEDULED",
  Schedule: "cron(0 12 * * ? *)",
  StartOnCreation: true || false,
  WorkflowName: WORKFLOW_NAME,
};
glue.createTrigger(params, function (err, data) {
  if (err) console.log(err, err.stack);
  // an error occurred
  else console.log(data); // successful response
});
