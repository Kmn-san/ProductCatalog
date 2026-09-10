import axios from "axios";

const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_BASE_URL,
    timeout: 10000, //10sec delay, prevent loading when network lagging
})

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            // return error code
            console.log('Server error: ', error.response.status);
        } else if (error.request) {
            // network error
            console.log('Network error: no response received');
        } else {
            // request not sent(code error)
            console.log('Request setup error: ', error.message);
        }
        return Promise.reject(error);// throw to tanstack
    }
)

export default api;