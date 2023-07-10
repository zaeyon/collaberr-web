'use client';
import { useState } from 'react';
import {useRouter, useSearchParams, usePathname} from 'next/navigation';

import ManageTab from "@/app/components/Manage/ManageTab";

export default function ManageLayout({children}: {
    children: React.ReactNode
}) {

    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const id = searchParams.get('id');

    const moveToCampaignDetail = () => {
        router.push(`/campaigns/${id}`)
    }

    const changeTab = (tab: string) => {
        router.push(`${tab}`);
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