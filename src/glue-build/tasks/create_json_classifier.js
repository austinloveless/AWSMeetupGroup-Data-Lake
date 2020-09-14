const AWS = require("aws-sdk");
const glue = new AWS.Glue({ region: "us-east-1" });
const config = require("../config");

const params = {
  JsonClassifier: {
    JsonPath: "$[*]" /* required */,
    Name: "json_classifier" /* required */,
  },
};
glue.createClassifier(params, function (err, data) {
  if (err) console.log(err, err.stack);
  // an error occurred
  else console.log(data); // successful response
});
