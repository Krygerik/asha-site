import axios from "axios";

const DEVELOP_AXIOS_OPTIONS = {
    baseURL: process.env.REACT_APP_API_URL,
};

const PRODUCTION_AXIOS_OPTIONS = {
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Authorization': btoa(process.env.REACT_APP_LOGIN + ':' + process.env.REACT_APP_PASSWORD),
    }
};

/**
 * Конструктор запросов
 */
export const createRequest = () => {
    console.log("process.env.REACT_APP_API_URL:", process.env.REACT_APP_API_URL);
    console.log("process.env.REACT_APP_LOGIN:", process.env.REACT_APP_LOGIN);
    console.log("process.env.REACT_APP_PASSWORD:", process.env.REACT_APP_PASSWORD);

    const option = process.env.NODE_ENV !== 'production'
        ? DEVELOP_AXIOS_OPTIONS
        : PRODUCTION_AXIOS_OPTIONS

    return axios.create(option);
};
