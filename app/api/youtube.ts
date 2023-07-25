import { baseUrl } from ".";
import axios from "axios";
const YOUTUBE_API_KEY = "AIzaSyABkAxt7ImPulsiCYKoLzS34kHTawwNTRk";
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
    `${YOUTUBE_BASE_URL}/search?key=${YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet&type=video&maxResults=6&order=date`
  );

  const res = promise.then((res) => res);

  return res;
}

export const GET_channelVideosPublisedAfter = (channelId: string, date: string) => {
  let pageToken = ""; 
  let videos: any = [];
  let totalResult = 0;

  const promise: any =  axios.get(
    `${YOUTUBE_BASE_URL}/search?key=${YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet&type=video&order=date&maxResults=50&publishedAfter=${date}`
  ).then(async (res) => {
    videos = [...res.data.items];
    console.log("res", res);
    if(res.data.nextPageToken) {
      totalResult = res.data.pageInfo.totalResults;
      while(totalResult > videos.length) {
        await axios.get(
          `${YOUTUBE_BASE_URL}/search?key=${YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet&type=video&order=date&maxResults=50&pageToken=${pageToken}&publishedAfter=${date}`
        ).then((res) => {
          videos = [...videos, ...res.data.items]
          if(videos.length < totalResult) pageToken = res.data.nextPageToken;
        })
        .catch((err) => {
          console.log("err", err)
        })
      }
      return videos;
    } else {
      return videos;
    }

  })
  .catch((err) => {
    console.log("err", err)
  })

  const result = promise.then((res: any) => res);

  return result;


}

export const GET_channelInfo = (channelId: string) => {
  const promise = axios.get(`${YOUTUBE_BASE_URL}/channels?key=${YOUTUBE_API_KEY}&part=brandingSettings,snippet,contentDetails,statistics,topicDetails&id=${channelId}&fields=items(brandingSettings,snippet,topicDetails,statistics)`)

  const res = promise.then((res) => res);

  return res;
}

