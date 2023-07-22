import {cache} from 'react';
import axios, {baseUrl} from '.';
import { campaignType } from '../type/campaign';
import { POST_refreshToken } from './auth';

export const POST_createCampaign = (newCampaign: campaignType) => {
    console.log("POST_createCampaign ", newCampaign);
    const promise = axios.post(`${baseUrl}/api/campaigns/`, newCampaign);
    const response = promise.then((res) => res);

    return response
}

export const GET_showAllCampaigns = async () => {
    const res = await fetch(`${baseUrl}/api/campaigns/all/`);
    //const response = promise.then((res) => res);
    if(!res.ok) {
       throw Error("Error");
    }
    return res.json();
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

export const GET_showCreatorForCampaign = (campaignId: number) => {
    const promise = axios.get(`${baseUrl}/api/campaigns/${campaignId}/creator/all`)
    const response = promise.then((res) => res);

    return response;
}

export const PUT_setCreatorsState = (campaignId: string, creatorIds: number [], state: string) => {
    console.log("PUT_setCreatorsState campaignId", campaignId);
    console.log("PUT_setCreatorsState creatorIds", creatorIds);
    console.log("PUT_setCreatorsState state", state);
    const promise = axios.put(`${baseUrl}/api/campaigns/${campaignId}/creator/?state=${state}`, {
        creator_ids: String(creatorIds),
    })

    const response = promise.then((res) => res);

    return response;
}

