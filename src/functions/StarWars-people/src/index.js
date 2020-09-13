const AWS = require("aws-sdk");
const Axios = require("axios");
const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

exports.handler = async (event) => {
  return getStarWarsPeople();
};

// gets star wars people
const getStarWarsPeople = async () => {
  try {
    const response = await Axios.get("https://swapi.dev/api/people");
    return putRawS3Data(response.data.results);
  } catch (error) {
    return errorResponse(500, error);
  }
};

// Puts raw data in s3
const putRawS3Data = async (data) => {
  const timestamp = Date.now();
  const params = {
    Body: JSON.stringify(data),
    Bucket: process.env.s3Bucket,
    Key: `raw/starwars/people/${timestamp}`,
  };
  try {
    const s3Object = await s3.putObject(params).promise();
    return successResponse(s3Object);
  } catch (error) {
    return errorResponse(500, error);
  }
};

// Sends success back to client
const successResponse = (successMessage) => {
  return {
    statusCode: 201,
    body: JSON.stringify({
      SuccessMessage: successMessage,
    }),
  };
};

// Sends error back to client if an error occurs
const errorResponse = (code, errorMessage) => {
  return {
    statusCode: code,
    body: JSON.stringify({
      ErrorMessage: errorMessage,
    }),
  };
};
