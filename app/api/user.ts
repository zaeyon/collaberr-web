import { baseUrl } from ".";
import axios from 'axios';
import { userType } from "../type";

export const GET_userInfo = (accountId: any) => {
    const promise = axios.get(`${baseUrl}/api/accounts/${accountId}/`, {
        withCredentials: true
    })

    const res = promise.then((res) => res);

    return res;
}

export const PATCH_editProfile = (accountId: string | null, accessToken: string | null, editedUser: userType) => {
    console.log("PATCH_editProfile editedUser", editedUser);
    
    const promise = axios.patch(`${baseUrl}/api/accounts/${accountId}/`, editedUser, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    const res = promise.then((res) => res);

    return res;
}