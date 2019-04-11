import axios from 'axios';

const api = axios.create({
    baseURL: 'https://oministack-backend-dl.herokuapp.com/',
});


export default api;