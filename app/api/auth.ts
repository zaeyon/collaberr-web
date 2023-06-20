import axios from 'axios';
import { baseUrl } from '.';
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

export const GET_userInfo = (accountId: string, accessToken: string) => {
    const promise = axios.get(`${baseUrl}/api/accounts/${accountId}/`,{
    headers: {
        Authorization: `Bearer ${accessToken}`
    }    
    })

    const res = promise.then((res) => res);

    return res;
}