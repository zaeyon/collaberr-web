import axios, {baseUrl} from '.';
import { campaignType } from '../type/campaign';

export const POST_createCampaign = (newCampaign: campaignType) => {
    console.log("POST_createCampaign ", newCampaign);
    const promise = axios.post(`${baseUrl}/api/campaigns/`, newCampaign);

    const response = promise.then((res) => res);

    return response
}
