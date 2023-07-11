'use client';
import {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { myCampaignsState } from '../recoil/campaign';

import { GET_showMyCampaigns } from '../api/campaign';
import Scoreboard from '../components/Dashboard/Scoreboard';
import ListTable from '../components/ListTable';

const Container = styled.div`
padding: 40px 0px;  
`;


export default function Dashboard() {
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
    

    const SCOREBOARD_DATA = [
        {
            label: "진행중인 캠페인",
            value: `${myCampaigns.length}개`
        },
        {
            label: "전체 투자 비용",
            value: "$1,000"
        },
        {
            label: "전체 조회수",
            value: "223,000회"
        },
        {
            label: "전체 참여수",
            value: "150,001회"
        }
    ]
    

    return (
        <Container>
            <Scoreboard
            data={SCOREBOARD_DATA}
            />
            <ListTable
            tableMarginTop={40}
            headerColumns={CAMPAIGN_RAKING_TABLE_HEADER}
            data={CAMPAIGNS_RANKING_DATA}/>
        </Container>
    )
}



const CAMPAIGN_RAKING_TABLE_HEADER = [
    {
        label: "순위",
        width: "9.37"
    },
    {
        label: "Campaign",
        width: "39.58"
    },
    {
        label: "기간",
        width: "20.83"
    },
    {
        label: "모집 인원",
        width: "10.41"
    },
    {
        label: "반응률",
        width: "10.41",
        description: "반응률 = (좋아요 수 + 댓글 수 /전체 조회수)x100",
        tooltipWidth: 308,
    },
    {
        label: "상세분석",
        width: "9.37"
    }
]


const CAMPAIGNS_RANKING_DATA = [
    {
        rank: 1,
        name: '캠신상 굿즈(슬리퍼+비치백 세트), 신제품(NEW 쉬림프) 출시 홍보 캠페인페인 이름1 adadsdsadadadadasdadkjalkdjklajdakldjkladjldjalkdj',
        date: '2023.00.00 - 2023.00.00',
        recruits: '4명',
        reaction_rate: '60%',
        content: "",
    },
    {
        rank: 2,
        name: '캠신상 굿즈(슬리퍼+비치백 세트), 신제품(NEW 쉬림프) 출시 홍보 캠페인페인 이름2',
        date: '2023.00.00 - 2023.00.00',
        recruits: '12명',
        reaction_rate: '50%',
        content: "",
    },
    {
        rank: 3,
        name: '캠신상 굿즈(슬리퍼+비치백 세트), 신제품(NEW 쉬림프) 출시 홍보 캠페인페인 이름3',
        date: '2023.00.00 - 2023.00.00',
        recruits: '20명',
        reaction_rate: '60%',
        content: "",
    },
    {
        rank: 4,
        name: '캠신상 굿즈(슬리퍼+비치백 세트), 신제품(NEW 쉬림프) 출시 홍보 캠페인페인 이름',
        date: '2023.00.00 - 2023.00.00',
        recruits: '4명',
        reaction_rate: '60%',
        content: "",
    }
]