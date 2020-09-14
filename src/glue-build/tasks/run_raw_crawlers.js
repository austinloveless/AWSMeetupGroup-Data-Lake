const AWS = require("aws-sdk");
const glue = new AWS.Glue({ region: "us-east-1" });
const config = require("../config");
const {
  config: { CRAWLER_DATA },
} = config;

CRAWLER_DATA.map((data) => {
  const params = {
    Name: data.raw_name /* required */,
  };
  glue.startCrawler(params, function (err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
  });
});
