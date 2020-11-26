import axios from 'axios';

const baseAPI = (baseURL) => {
  const api = axios.create({
    baseURL,
  })
  return api.api
}

export default baseAPI;
