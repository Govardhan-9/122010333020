const axios = require('axios');

const fetchJsonData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch JSON data from ${url}: ${error.message}`);
  }
};

module.exports = fetchJsonData;
