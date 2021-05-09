import axios, { AxiosRequestConfig } from "axios";

/**
 * Конструктор запросов
 */
export const createRequest = () => {
    let option: AxiosRequestConfig =  {
        baseURL: process.env.REACT_APP_API_URL,
    };

    const token = localStorage.getItem('token');

    if (token) {
        option.headers = {
            ...option.headers,
            'Authorization': 'Bearer ' + token,
        }
    }

    return axios.create(option);
};
