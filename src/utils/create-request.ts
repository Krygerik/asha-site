import axios, { AxiosRequestConfig } from "axios";

/**
 * Конструктор запросов
 */
export const createRequest = () => {
    let option: AxiosRequestConfig =  {
        baseURL: process.env.REACT_APP_API_URL,
        withCredentials: true,
    };

    return axios.create(option);
};
