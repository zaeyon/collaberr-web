import styles from './page.module.scss';

import MyCampaignList from '../components/MyCampaignList';

export default function MyCampaigns() {
    return (
        <main>
            <h1>My Campaigns</h1>
            <div className={styles.description}>Manage your campaigns.</div>
            <MyCampaignList
            myCampaignsData={MY_CAMPAIGNS_DATA}/>
        </main>
    )
}

const MY_CAMPAIGNS_DATA = [
    {
        id: 1,
        state: "published",
        title: "This is the title for the campaign 1",
        platform: "instagram",
        type: "-",
        date: "2023-00-00 ~ 2023-00-00"
    },
    {
        id: 2,
        state: "published",
        title: "This is the title for the campaign 2",
        platform: "youtube",
        type: "-",
        date: "2023-00-00 ~ 2023-00-00"
    },
    {
        id: 3,
        state: "published",
        title: "This is the title for the campaign 3",
        platform: "youtube",
        type: "-",
        date: "2023-00-00 ~ 2023-00-00"
    },
    {
        id: 4,
        state: "editing",
        title: "This is the title for the campaign 4",
        platform: "tiktok",
        type: "-",
        date: "2023-00-00 ~ 2023-00-00"
    },
    {
        id: 5,
        state: "cancelled",
        title: "This is the title for the campaign 5",
        platform: "instagram",
        type: "-",
        date: "2023-00-00 ~ 2023-00-00"
    },
    {
        id: 6,
        state: "finished",
        title: "This is the title for the campaign 6",
        platform: "instagram",
        type: "-",
        date: "2023-00-00 ~ 2023-00-00"
    }
]