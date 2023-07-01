import axios from 'axios';
import { getCookie } from '../lib/cookie';

export const baseUrl = 'http://localhost:8000';

const axiosInstance = axios.create();

//axiosInstance.defaults.headers.common['X-CSRFToken'] = getCookie('csrftoken');

axiosInstance.defaults.withCredentials = true;

export default axiosInstance;

