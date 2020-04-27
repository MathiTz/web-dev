const axios = require("axios");

const HttpError = require("../models/http-error");

const API_KEY = process.env.LOCATION_API_KEY;

async function getCoordsForAddress(address) {
  // return {
  //   lat: 40.7484474,
  //   lng: -73.9871516
  // };
  const response = await axios.get(
    ` https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${API_KEY}`
  );

  const data = response.data;

  if (!data || data.status === "ZERO_RESULTS") {
    const error = new HttpError(
      "Could not find location for the specified address.",
      422
    );
    throw error;
  }

  const { lat, lng } = data.results[0].geometry;
  const coordinates = {
    lat,
    lng,
  };

  return coordinates;
}

module.exports = getCoordsForAddress;
