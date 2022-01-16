import axios from "axios";

axios.defaults.timeout = 10000;
axios.defaults.baseURL = 'http://localhost:8081';

axios.interceptors.request.use(config => {
    return config
})
axios.interceptors.response.use(response =>{
    let res = response.data
    if(res.code === 200) {
        return response
    } else {
        return Promise.reject(response.data)
    }
}, error => {
    return Promise.reject(error)
})

export default axios