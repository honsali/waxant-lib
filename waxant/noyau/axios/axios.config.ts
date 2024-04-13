import axios from 'axios';

const initAxios = (apiTimeout) => {
    axios.defaults.timeout = apiTimeout;

    axios.defaults.paramsSerializer = {
        encode: (params) => {
            return encodeURI(params);
        },
    };

    const onRequestSuccess = (config) => {
        const item = window.sessionStorage.getItem('auth_token');
        const token = item ? JSON.parse(item) : null;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    };

    const onResponseSuccess = (response) => response;
    const onResponseError = (error) => {
        //@TODO GLOBAL ACTION on an ERROR CODE 400? 401? 403? 500?
        // const status = error.status || (error.response ? error.response.status : 0);
        return Promise.reject(error);
    };
    axios.interceptors.request.use(onRequestSuccess);
    axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default initAxios;
