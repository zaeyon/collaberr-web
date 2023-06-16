import axios from 'axios';
import { baseUrl } from '.';
import { signupForm } from '../type';

export const POST_signup = ({username, email, password, role}: signupForm) => {
    console.log("POST_signup", username, email, password, role)
    const promise = axios.post(`${baseUrl}/api/accounts`, {
        username,
        email,
        password,
        role,
    });

    const res = promise.then((res) => res);

    return res;
}