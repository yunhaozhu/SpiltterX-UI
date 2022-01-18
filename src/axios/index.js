import axios from "axios";
import store from "@/store"

axios.defaults.timeout = 10000;
axios.defaults.baseURL = 'http://localhost:8081';

axios.interceptors.request.use(config => {
    return config
})
axios.interceptors.response.use(response =>{
    const jwt = response.headers['authorization']
    if(jwt) {
        store.commit("setToken", jwt)
    }
    let res = response.data
    if(res.code === 200) {
        return response
    } else {
        if (res.code === 401) {
            store.commit("removeInfo")
        }
        return Promise.reject(response.data)
    }
}, error => {
    return Promise.reject(error)
})

export default axios