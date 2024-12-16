// API.js - for API calls

import axios from 'axios';

async function API(apiURL) {
  axios.get(apiURL)
  try {
    const response = await axios.get(apiURL);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}; // axios API call

export default API; // export API function