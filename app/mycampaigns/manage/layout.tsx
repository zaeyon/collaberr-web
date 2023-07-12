'use client';
import { useState, useEffect} from 'react';
import {useRouter, usePathname, useParams} from 'next/navigation';

import ManageTab from "@/app/components/Manage/ManageTab";

import { GET_showCampaign } from '@/app/api/campaign';
import { campaignType } from '@/app/type/campaign';

export default function ManageLayout({children}: {
    children: React.ReactNode
}) {
    const [campaignItem, setCampaignItem] = useState<campaignType>({
        id: 0,
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

    const router = useRouter();
    const pathname = usePathname();
    const pathnameArr = pathname.split('/');
    const params = useParams();

    console.log("params", params);

    useEffect(() => {
        GET_showCampaign(Number(params.id))
        .then((res) => {
            console.log("GET_showCampaign success", res);
            setCampaignItem(res.data);
        })
        .catch((err) => {
            console.log("GET_showCampaign fail", err);
        })
    }, [])

    const moveToCampaignDetail = () => {
        router.push(`/campaigns/${params.id}`)
    }

    const changeTab = (tab: string) => {
        if(tab === 'result') router.push(`/mycampaigns/manage/${pathnameArr[3]}/${tab}/overview`)
        else router.push(`/mycampaigns/manage/${pathnameArr[3]}/${tab}`);
    }

    return (
        <main>
            <ManageTab
            campaignItem={campaignItem}
            pathname={pathname}
            changeTab={changeTab}
            moveToCampaignDetail={moveToCampaignDetail}/>
            {children}
        </main>
    )
}