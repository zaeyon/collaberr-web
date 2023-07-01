import axios, { baseUrl } from '.';
import { signupType, loginType } from '../type';

export const POST_signup = ({username, email, password, password_confirm, role}: signupType) => {
    const promise = axios.post(`${baseUrl}/api/accounts/`, {
        username,
        email,
        password,
        password_confirm,
        role,
    });

    const res = promise.then((res) => res);

    return res;
}

export const POST_login = ({email, password}: loginType) => {
    const promise = axios.post(`${baseUrl}/api/login/`, {
        email,
        password,
    });

    const res = promise.then((res) => res);

    return res;
}

export const POST_logout = () => {
    const promise = axios.post(`${baseUrl}/api/logout/`);
    const res = promise.then((res) => res);

    return res;
}

export const POST_refreshToken = () => {
    const promise = axios.post(`${baseUrl}/api/token/refresh/`);
    const res = promise.then((res) => res);

    return res;
}
