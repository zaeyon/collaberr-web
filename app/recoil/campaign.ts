import {atom} from 'recoil';

export const allCampaignsState = atom({
    key: 'allCampaignsState',
    default: []
})

export const myCampaignsState = atom({
    key: 'myCampaignsState',
    default: [
        {
        brand_name: '',
        title: '',
        thumbnail: '',
        category: '',
        platform: '',
        start_date: '',
        end_date: '',
        recruit_start_date: '',
        recruit_end_date: '',
        description: '',
        mission_type: '',
        reward: '',
         additional_files: '',
        }
    ]
})