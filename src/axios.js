import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://paz-weeat-server.herokuapp.com',
});

export default axiosInstance;
