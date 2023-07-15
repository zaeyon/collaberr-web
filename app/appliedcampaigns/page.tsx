'use client';
import {useEffect, useRef} from 'react';
import { useRecoilState } from 'recoil';
import { toastState } from '../recoil/user';

import ListTable from "../components/ListTable"
import Toast from "../components/Toast";

export default function AppliedCampaigns() {
    const [toast, setToast] = useRecoilState(toastState);
    const toastRef = useRef<any>();

    useEffect(() => {
        if(toast.visible && toast.request === "/appliedcampaigns/confirm") {
            toastRef.current?.show();

        }

    }, [toast])



    

    return (
        <main>
            <h1>My Campaigns</h1>
            <h6>Manage your campaigns.</h6>
            <ListTable
            title={"캠페인 참여내역"}
            marginTop={56}
            tableMarginTop={8}
            headerColumns={MY_CAMPAIGNS_TABLE_HEADER}
            data={MY_CAMPAIGNS_TABLE_DATA}
            emptyTitle={"아직 참가한 캠페인이 없습니다."}
            />
            <Toast
            ref={toastRef}/>
        </main>
    )
}

const MY_CAMPAIGNS_TABLE_HEADER = [
    {
        label: "State",
        width: "9.37"
    },
    {
        label: "Campaign",
        width: "44.27"
    },
    {
        label: "플랫폼",
        width: "5.73"
    },
    {
        label: "종류",
        width: "10.41"
    },
    {
        label: "기간",
        width: "20.82",
    },
    {
        label: "콘텐츠 승인",
        width: "9.37"
    }
]

const MY_CAMPAIGNS_TABLE_DATA = [
    {
        state: "upload",
        title: "신상 굿즈(슬리퍼+비치백 세트), 신제품(NEW 쉬림프) 출시 홍보 캠페인",
        platform: "Youtube",
        mission_type: "홍보영상",
        date: "2000.00.00 - 2000.00.00",
        approval_button: "",
    }
]