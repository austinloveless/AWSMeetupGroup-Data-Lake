const AWS = require("aws-sdk");
const Axios = require("axios");
const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

exports.handler = async (event) => {
  console.log("event:::", event);
  return successResponse("Success planets");
};

// Sends success back to client
const successResponse = (successMessage) => {
  return {
    statusCode: 201,
    body: JSON.stringify({
      SuccessMessage: successMessage,
    }),
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
};

// Sends error back to client if an error occurs
const errorResponse = (code, errorMessage) => {
  return {
    statusCode: code,
    body: JSON.stringify({
      ErrorMessage: errorMessage,
    }),
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
};
