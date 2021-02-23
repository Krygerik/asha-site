import axios from "axios";

const DEVELOP_AXIOS_OPTIONS = {
    baseURL: 'http://localhost:3000/api',
};

const PRODUCTION_AXIOS_OPTIONS = {
    baseURL: 'http://46.101.232.123:3002/api',
    headers: {
        'Authorization': 'Basic dGVjaGNlbnRvczpFeHRlcm5hbDEyMzQ1NjEyMw=='
    }
};

/**
 * Конструктор запросов
 */
export const createRequest = () => {
    const option = process.env.NODE_ENV !== 'production'
        ? DEVELOP_AXIOS_OPTIONS
        : PRODUCTION_AXIOS_OPTIONS

    return axios.create(option);
};
