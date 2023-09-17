import axios from 'axios';

const Axios = axios.create();
Axios.defaults.baseURL = 'http://back.hdmedi.site';
Axios.defaults.withCredentials = true;

export default Axios;
