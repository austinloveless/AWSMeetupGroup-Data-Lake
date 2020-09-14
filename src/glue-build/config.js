const config = {
  DATABASE_NAME: "starwars-database",
  IAM_ROLE: "glueRole-production",
  JOB_NAME: "starwars_raw_to_parquet",
  WORKFLOW_NAME: "starwars_workflow",
  JOB_TRIGGER_NAME: "starwars_job_trigger",
  SCRIPT_LOCATION:
    "s3://starwars-data-lake-starwars-data-lake-production/script/starwars_raw_to_parquet_script",
  CRAWLER_DATA: [
    // People
    {
      raw_name: "starwars_raw_people",
      raw_path:
        "s3://starwars-data-lake-starwars-data-lake-production/raw/starwars/raw_people/",
      parquet_name: "starwars_parquet_people",
      parquet_path:
        "s3://starwars-data-lake-starwars-data-lake-production/parquet/starwars/parquet_people",
    },
    // Starships
    {
      raw_name: "starwars_raw_starships",
      raw_path:
        "s3://starwars-data-lake-starwars-data-lake-production/raw/starwars/raw_starships/",
      parquet_name: "starwars_parquet_starships",
      parquet_path:
        "s3://starwars-data-lake-starwars-data-lake-production/parquet/starwars/parquet_starships",
    },
    // Planets
    {
      raw_name: "starwars_raw_planets",
      raw_path:
        "s3://starwars-data-lake-starwars-data-lake-production/raw/starwars/raw_planets/",
      parquet_name: "starwars_parquet_planets",
      parquet_path:
        "s3://starwars-data-lake-starwars-data-lake-production/parquet/starwars/parquet_planets/",
    },
  ],
};

module.exports = {
  config,
};
