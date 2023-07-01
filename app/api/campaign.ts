import axios, {baseUrl} from '.';
import { campaignType } from '../type/campaign';
import { POST_refreshToken } from './auth';

export const POST_createCampaign = (newCampaign: campaignType) => {
    console.log("POST_createCampaign ", newCampaign);
    const promise = axios.post(`${baseUrl}/api/campaigns/`, newCampaign);
    const response = promise.then((res) => res);

    return response
}

export const GET_showAllCampaigns = () => {
    const promise = axios.get(`${baseUrl}/api/campaigns/all/`);
    const response = promise
    .then((res) => res);
    return response;
}

export const GET_showMyCampaigns = () => {
    const promise = axios.get(`${baseUrl}/api/campaigns/`);
    const response = promise.then((res) => res);

    return response;
}

export const GET_showCampaign = (campaignId: number) => {
    const promise = axios.get(`${baseUrl}/api/campaigns/${campaignId}`);
    const response = promise.then((res) => res);

    return response;
}

export const PATCH_editCampaign = (campaignId: number, editedCampaign: campaignType) => {
    console.log("PATCH_editCampaign id editedCampaign", campaignId, editedCampaign);
    const promise = axios.patch(`${baseUrl}/api/campaigns/${campaignId}/`)
    const response = promise.then((res) => res);

    return response;
}
