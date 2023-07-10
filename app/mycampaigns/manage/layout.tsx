'use client';
import { useState } from 'react';
import {useRouter, useSearchParams, usePathname} from 'next/navigation';

import ManageTab from "@/app/components/Manage/ManageTab";

export default function ManageLayout({children, params}: {
    children: React.ReactNode
    params: {id: number}
}) {

    const router = useRouter();
    const pathname = usePathname();
    const pathnameArr = pathname.split('/');

    console.log("params", params);

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
            pathname={pathname}
            changeTab={changeTab}
            moveToCampaignDetail={moveToCampaignDetail}/>
            {children}
        </main>
    )
}