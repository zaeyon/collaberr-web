import { baseUrl } from ".";
import axios from "axios";
const YOUTUBE_API_KEY = "AIzaSyDbLDj6HV2yVAg03r93jQTD5UmzuoRCEdM";
const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const GET_youtubeAuth = () => {
  return axios.get(`${baseUrl}/api/youtube/auth/`,
                   {withCredentials: true});
};

export const GET_youtubeConfirm = (accessToken: string | null) => {
    console.log("accessToken", accessToken);
    const promise = axios.get(`${baseUrl}/api/youtube/confirm/`);

    const res = promise.then((res) => res);

    return res;
}

export const GET_channelVideos = (channelId: string) => {
  const promise =  axios
  .get(
    `${YOUTUBE_BASE_URL}/search?key=${YOUTUBE_API_KEY}&part=snippet&type=video&maxResults=6&channelId=${channelId}`
  );

  const res = promise.then((res) => res);

  return res;
}

export const GET_channelInfo = (channelId: string) => {
  const promise = axios.get(`${YOUTUBE_BASE_URL}/channels?key=${YOUTUBE_API_KEY}&part=brandingSettings,snippet,contentDetails,statistics,topicDetails&id=${channelId}&fields=items(brandingSettings,snippet,topicDetails,statistics)`)

  const res = promise.then((res) => res);

  return res;
}