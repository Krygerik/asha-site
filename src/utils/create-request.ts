import axios, { AxiosRequestConfig } from "axios";

const DEVELOP_AXIOS_OPTIONS: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_URL,
};

const PRODUCTION_AXIOS_OPTIONS: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_URL,
    auth: {
        username: String(process.env.REACT_APP_LOGIN),
        password: String(process.env.REACT_APP_PASSWORD)
    },
};

/**
 * Конструктор запросов
 */
export const createRequest = () => {
    let option: AxiosRequestConfig = process.env.NODE_ENV !== 'production'
        ? DEVELOP_AXIOS_OPTIONS
        : PRODUCTION_AXIOS_OPTIONS;

    const token = localStorage.getItem('token');

    if (token) {
        option.headers = {
            ...option.headers,
            'Authorization': 'Bearer ' + token,
        }
    }

    return axios.create(option);
};
