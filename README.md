# AWS Meetup Group intro to Data Lakes

---

## Prerequisites

- Create an [AWS Account](https://aws.amazon.com/)
- Create a [GitHub Account](https://github.com/)

- Install [AWS CLI](https://aws.amazon.com/cli/)

- Install [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)

- Install [Node.js](https://nodejs.org/en/download/)

- Configure an [AWS Profile](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)

## What we're building.

This application is used to build a StarWars Data Lake using AWS Lambda, S3, and AWS Glue.

## What's Here

This project includes:

- README.md - this file

- src/glue-build/ - This folder contains the AWS-SDK configuration to build the Glue environment.

- src/functions/ - This folder Contains the Lambda Functions that retrieve the Data Lake Data.

- src/layers/ - This folder contains the Axios NPM dependency used to query the Star Wars API.

- src/template.yml - This file uses the AWS Serverless Application Model (AWS SAM) to deploy AWS Lambda and Data Lake S3 Bucket.

## Build Steps:

Change Directories into thhe functions/StarWars/src/ folder and run `npm install` to install lambda dependencies (Axios).

After you configure an AWS Profile and installed the SAM CLI you can deploy the template:

- `aws s3 mb s3://<YOUR NAME>-cf-templates-us-east-1 --profile <YOUR PROFILE>`

- `sam validate -t template.yml --profile <YOUR PROFILE>`

- `sam package --template-file template.yml --s3-bucket <YOUR NAME>-cf-templates-us-east-1 --profile <YOUR PROFILE>`

- `sam deploy --template-file template.yml --stack-name awsmeetupgroup-data-lake --s3-bucket <YOUR NAME>-cf-templates-us-east-1 --capabilities CAPABILITY_NAMED_IAM --profile <YOUR PROFILE>`

## Glue Flow:

1. Create Database. "awsmeetupgroup-datalake"
2. Create and Run Crawlers for all datasources.
3. Create and Run Job to convert data into Parquet.
4. Create and Run Crawler for new Parquet Data.
5. Put together in Glue Workflow to run once a day.

## Build the Glue Flow:

Change directories into the src/glue-build/ folder and run `npm install` to install the aws-sdk.

To Build the glue environment we are using the aws-sdk. Look in the src/glue-build/config.js file this is the configuration for our glue crawlers and job.

Note: Run these commands after you've installed nodejs

Start by creating the Glue Database change directories into src/glue-build/tasks/

- `node create_database.js`

Then by creating the raw crawlers.

- `node create_raw_crawlers.js`

Then run the raw crawler.

- `node run_raw_crawler.js`

Next we create the ETL Job. To do that you need to upload the etl script from src/glue-build/script/

- `aws s3api put-object --bucket <YOUR BUCKET> --key script/starwars_raw_to_parquet_script`

- `node create_job.js`

Then run the job after the raw crawler is finished. (this takes a few minutes)

- `node run_job.js`

Then by creating the parquet crawlers (this turns our data into parquet format to save money when querying with Athena).

- `node create_parquet_crawlers.js`

Then run the parquet crawler.

- `node run_parquet_crawler.js`

Now you should have created several raw tables inside the "awsmeetupgroup-database" glue database, converted the Data into Parquet format and then created the Parquet tables.

## To query the data:

To see this and query the data you can go to the [Athena](https://console.aws.amazon.com/athena/home?region=us-east-1) Dashboard in the AWS Console and see the tables inside the "awsmeetupgroup-database" database.

Athena uses SQL queries to query the data.

Run something simple like:

- `select * from <TABLE NAME> limit 10`
