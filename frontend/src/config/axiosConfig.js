import axios from 'axios';

// const BASE_URL = 'https://akshay-rr-trellox.herokuapp.com/';
const BASE_URL = 'http://localhost:5001/';

const api = axios.create({
    baseURL: BASE_URL
});

export default api;
