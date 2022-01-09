import axios from "axios";

axios.defaults.timeout = 10000;
axios.defaults.baseURL = 'http://localhost:8081';

export default axios