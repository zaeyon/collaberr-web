import {atom,  selector} from 'recoil';

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
        const list = get(myCampaignsState);

        return list.map((item) => {
            return {
                state: MY_CAMPAIGNS_STATE_DATA[Math.floor(Math.random() * 5)],
                title: item.title,
                platform: item.platform,
                mission_type: item.mission_type,
                date: item.start_date + " - " + item.end_date,
                //content: typeof window !== 'undefined' ?`${window.location.origin}/campaigns/${item.id}` : "",
                content: item.id,
            }
        })
    }

})