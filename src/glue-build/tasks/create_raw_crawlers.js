const AWS = require('aws-sdk');
const glue = new AWS.Glue({ region: 'us-east-1' });
const config = require('../config');
const {
  config: { DATABASE_NAME, IAM_ROLE, CRAWLER_DATA },
} = config;

CRAWLER_DATA.map((data) => {
  const params = {
    Name: data.raw_name /* required */,
    Role: IAM_ROLE /* required */,
    Targets: {
      S3Targets: [
        {
          Path: data.raw_path,
        },
      ],
    },
    DatabaseName: DATABASE_NAME,
  };
  glue.createCrawler(params, function (err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else {
      console.log(data);
    }
  });
});
