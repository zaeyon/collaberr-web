import {atom,  selector} from 'recoil';
import { getFormattedDate } from '../lib/date';

export const allCampaignsState = atom({
    key: 'allCampaignsState',
    default: []
})

export const myCampaignsState = atom({
    key: 'myCampaignsState',
    default: [
        {
        id: 0,
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
        is_completed: false,
        is_draft: false,
        is_recruiting: false,
        is_recruited: false,
        is_active: false,
        is_deleted: false,
         
        }
    ]
})

const MY_CAMPAIGNS_STATE_DATA = [
    'proceeding',
    'recruitment_complete',
    'recruiting',
    'writing',
    'progress_complete'
]

export const myCampaignsTableListState = selector({
    key: 'myCampaignsTableListState',
    get: ({get})=> {
        const myCampaigns = get(myCampaignsState);

        return myCampaigns.map((item) => {
            return {
                state: 
                item.is_completed ? 'progress_complete' : 
                item.is_draft ? 'writing' : 
                item.is_recruiting ? 'recruiting' : 
                item.is_recruited ? 'recruitment_complete' : 
                item.is_active ? "proceeding" : "proceeding",
                title: item.title,
                platform: item.platform,
                mission_type: item.mission_type,
                date: getFormattedDate(item.start_date, ".")+ " - " + getFormattedDate(item.end_date, "."),
                //content: typeof window !== 'undefined' ?`${window.location.origin}/campaigns/${item.id}` : "",
                content: item.id,
            }
        })
    }
})

export const campaignStatusTableState = selector({
    key: 'campaignStatusTableState',
    get: ({get}) => {
        const myCampaigns = get(myCampaignsState);

        return myCampaigns.map((item, index) => {
            return {
                state: 
                item.is_completed ? 'progress_complete' : 
                item.is_draft ? 'writing' : 
                item.is_recruiting ? 'recruiting' : 
                item.is_recruited ? 'recruitment_complete' : 
                item.is_active ? "proceeding" : "proceeding",
                title: item.title,
                date: getFormattedDate(item.start_date, ".")+ " - " + getFormattedDate(item.end_date, "."),          
                quota: 10,
                reaction_rate: "50%",
                content: item.id,
            }
        })
    }
})
