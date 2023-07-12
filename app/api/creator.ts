import axios, {baseUrl} from '.';

export const POST_joinCampaign = (campaignId: number) => {
    const promise = axios.post(`${baseUrl}/api/creator/join-campaign/`, {
        campaign_id: campaignId
    })

    const response = promise.then((res) => res);

    return response;
}