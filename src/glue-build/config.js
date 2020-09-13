const config = {
  DATABASE_NAME: "awsmeetupgroup-database",
  IAM_ROLE: "glueRole-production",
  JOB_NAME: "awsmeetupgroup_raw_to_parquet",
  SCRIPT_LOCATION:
    "s3://awsmeetupgroup-data-lake-production/script/awsmeetupgroup_raw_to_parquet_script",
  CRAWLER_DATA: [
    // People
    {
      raw_name: "awsmeetupgroup_raw_people",
      raw_path:
        "s3://awsmeetupgroup-data-lake-production/raw/starwars/raw_people/",
      parquet_name: "awsmeetupgroup_parquet_people",
      parquet_path:
        "s3://awsmeetupgroup-data-lake-production/parquet/starwars/parquet_people",
    },
    // Starships
    {
      raw_name: "awsmeetupgroup_raw_starships",
      raw_path:
        "s3://awsmeetupgroup-data-lake-production/raw/starwars/raw_starships/",
      parquet_name: "awsmeetupgroup_parquet_starships",
      parquet_path:
        "s3://awsmeetupgroup-data-lake-production/parquet/starwars/parquet_starships",
    },
    // Planets
    {
      raw_name: "awsmeetupgroup_raw_planets",
      raw_path:
        "s3://awsmeetupgroup-data-lake-production/raw/starwars/raw_planets/",
      parquet_name: "awsmeetupgroup_parquet_planets",
      parquet_path:
        "s3://awsmeetupgroup-data-lake-production/parquet/starwars/parquet_planets/",
    },
  ],
};

module.exports = {
  config,
};
