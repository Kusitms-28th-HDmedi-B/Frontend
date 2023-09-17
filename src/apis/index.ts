import axios from 'axios';

const Axios = axios.create();
Axios.defaults.baseURL = 'https://back.hdmedi.site';
Axios.defaults.withCredentials = true;

export default Axios;
