import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "./token-utils";

/**
 * Конструктор запросов
 */
export const createRequest = () => {
    let option: AxiosRequestConfig =  {
        baseURL: process.env.REACT_APP_API_URL,
    };

    const token = getToken();

    if (token) {
        option.headers = {
            ...option.headers,
            'Authorization': 'Bearer ' + token,
        }
    }

    return axios.create(option);
};
