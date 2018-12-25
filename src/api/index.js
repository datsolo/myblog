import axios from 'axios';
import { getCookie, removeCookie } from '../helper';

// const session_id = getCookie('session_id');

const api = axios.create({
    // baseURL: 'http://localhost:2603',
    baseURL: 'http://localhost:3000',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

api.interceptors.request.use(function (config) {
    const session_id = getCookie('session_id');
    // Do something before request is sent
    if (session_id) {
        config.headers.common['sessionid'] = session_id
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) {
            // remove expired session_id and reload 
            removeCookie('session_id');
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
        return Promise.reject(error);
    }
);

export default api;