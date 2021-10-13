const axios = require('axios')
var dotenv = require('dotenv').config();
const baseURL = dotenv.parsed.API_URL
const apiKey = dotenv.parsed.API_KEY

exports.apiSearchMovies = async (search, page)  => {
  try {
    const url = baseURL + `/?apikey=${apiKey}&s=${search}&page=${page}`
    let response = await axios.get(url);
    response = response.data;
    return response;
  } catch (error) {
    throw error
  }
};

exports.apiDetailsMovies = async (ID) => {
  try {
    const url = baseURL + `/?apikey=${apiKey}&i=${ID}`
    let response = await axios.get(url);
    response = response.data;
    return response;
  } catch (error) {
    throw error
  }
};
