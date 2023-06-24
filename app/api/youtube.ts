import { baseUrl } from ".";
import axios from "axios";

export const GET_youtubeAuth = (accessToken: string | null) => {
    console.log("accessToken", accessToken);
    const promise = axios.get(`${baseUrl}/api/youtube/auth/`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    const res = promise.then((res) => res);

    return res;
}

export const GET_youtubeConfirm = (accessToken: string | null) => {
    console.log("accessToken", accessToken);
    const promise = axios.get(`${baseUrl}/api/youtube/confirm/`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    const res = promise.then((res) => res);

    return res;
}