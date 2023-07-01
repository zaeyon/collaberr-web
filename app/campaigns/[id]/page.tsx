'use client'
import {useEffect, useState} from 'react';
import styles from './page.module.scss';
import Image from 'next/image';

import { GET_showCampaign } from '@/app/api/campaign';
import CampaignDetail from '@/app/components/CampaignDetail';
import JoinCampaign from '@/app/components/JoinCampaign';
import { campaignType } from '@/app/type/campaign';

export default function Page({params}: {params: {id: number}}) {
    const [campaignItem, setCampaignItem] = useState<campaignType>({
        brand_name: "",
        title: "",
        thumbnail: "",
        category: "",
        platform: "",
        start_date: "",
        end_date: "",
        recruit_start_date: "",
        recruit_end_date: "",
        description: "",
        mission_type: "",
        reward: 0,
        additional_files: "",
    })

    useEffect(() => {
        GET_showCampaign(params.id)
        .then((res) => {
            console.log("GET_shownCampaign success", res);
            setCampaignItem(res.data)
        })
        .catch((err) => {
            console.log("GET_showCampaign fail", err)
        })
    }, [])
    
    return (
        <main className={styles.main}>
            <div
            style={{width: '62%'}}>
            <CampaignDetail
            category={campaignItem.category}
            brandName={campaignItem.brand_name}
            title={campaignItem.title}
            thumbnailImageSrc={campaignItem.thumbnail}
            platform={campaignItem.platform}
            shownStartDate={campaignItem.start_date}
            shownEndDate={campaignItem.end_date}
            description={campaignItem.description}
            missionType={campaignItem.mission_type}
            bid={campaignItem.reward}
            files={campaignItem.additional_files}/>
            </div>
            <JoinCampaign
            campaignItem={campaignItem}/>
        </main>
    )

}