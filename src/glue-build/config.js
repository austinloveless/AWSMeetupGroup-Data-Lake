const config = {
  DATABASE_NAME: "starwars-database",
  IAM_ROLE: "glueRole-production",
  JOB_NAME: "starwars_raw_to_parquet",
  SCRIPT_LOCATION:
    "s3://starwars-data-lake-production/script/starwars_raw_to_parquet_script",
  CRAWLER_DATA: [
    // People
    {
      transformed_name: "starwars_transformed_people",
      transformed__path:
        "s3://starwars-data-lake-production/transformed/starwars/transformed_people/",
      parquet_name: "starwars_parquet_people",
      parquet_path:
        "s3://starwars-data-lake-production/parquet/starwars/parquet_people",
    },
    // Starships
    {
      transformed_name: "starwars_transformed_starships",
      transformed__path:
        "s3://starwars-data-lake-production/transformed/starwars/transformed_starships/",
      parquet_name: "starwars_parquet_starships",
      parquet_path:
        "s3://starwars-data-lake-production/parquet/starwars/parquet_starships",
    },
    // Planets
    {
      transformed_name: "starwars_transformed_planets",
      transformed__path:
        "s3://starwars-data-lake-production/transformed/starwars/transformed_planets/",
      parquet_name: "starwars_parquet_planets",
      parquet_path:
        "s3://starwars-data-lake-production/parquet/starwars/parquet_planets/",
    },
  ],
};

module.exports = {
  config,
};
