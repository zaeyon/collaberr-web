'use client';
import {useEffect, useState} from 'react';
import {headers} from 'next/headers'
import styles from './page.module.scss';
import { useRecoilState } from 'recoil';

import { baseUrl } from '../api';
import MyCampaignList from '../components/MyCampaignList';
import { GET_showMyCampaigns } from '../api/campaign';
import { myCampaignsState } from '../recoil/campaign';



export default function Mycampaigns() {
    const [myCampaigns, setMyCampaigns] = useRecoilState(myCampaignsState);

    useEffect(() => {
        GET_showMyCampaigns()
        .then((res) => {
            console.log("GET_showMyCampaigns success", res); 
            setMyCampaigns(res.data);
        })
        .catch((err) => {
            console.log("GET_showMyCampaign err", err);
        })

    }, [])
    
    return (
        <main>
            <h1>My Campaigns</h1>
            <div className={styles.description}>Manage your campaigns.</div>
            <MyCampaignList/>
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