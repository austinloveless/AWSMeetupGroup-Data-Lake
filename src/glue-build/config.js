const config = {
  DATABASE_NAME: "awsmeetupgroup-database",
  IAM_ROLE: "awsmeetupgroup-data-lake-role",
  JOB_NAME: "awsmeetupgroup-job-to-parquet",
  SCRIPT_LOCATION:
    "s3://awsmeetupgroup-data-lake-production/script/awsmeetupgroup_to_parquet_script",
  CRAWLER_DATA: [],
};

module.exports = {
  config,
};
