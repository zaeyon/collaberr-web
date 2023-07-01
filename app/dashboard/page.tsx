'use client';
import {useState} from 'react';
import styled from '@emotion/styled';

import Scoreboard from '../components/Dashboard/Scoreboard';
import CampaignsRankingTable from '../components/Dashboard/CampaignsRankingTable';

const Container = styled.div`
padding: 40px 0px;  
`;

const ScoreboardListDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;  
  gap: 20px;
`;

export default function Dashboard() {
    

    return (
        <Container>
            <ScoreboardListDiv>
            <Scoreboard
            label={"진행중인 캠페인"}
            value={"4개"}/>
            <Scoreboard
            label={"전체 투자 비용"}
            value={"$1,000"}/>
            <Scoreboard
            label={"전체 조회수"}
            value={"233,000회"}/>
            <Scoreboard
            label={"전체 참여수"}
            value={"1,421회"}/>
            </ScoreboardListDiv>
            <CampaignsRankingTable
            campaignsRankingData={CAMPAIGNS_RANKING_DATA}/>
        </Container>
    )
}


const CAMPAIGNS_RANKING_DATA = [
    {
        ranking: 1,
        title: '캠신상 굿즈(슬리퍼+비치백 세트), 신제품(NEW 쉬림프) 출시 홍보 캠페인페인 이름1',
        date: '2023.00.00 - 2023.00.00',
        recruits: '4명',
        reaction_rate: '60%'
    },
    {
        ranking: 2,
        title: '캠신상 굿즈(슬리퍼+비치백 세트), 신제품(NEW 쉬림프) 출시 홍보 캠페인페인 이름2',
        date: '2023.00.00 - 2023.00.00',
        recruits: '12명',
        reaction_rate: '50%'
    },
    {
        ranking: 3,
        title: '캠신상 굿즈(슬리퍼+비치백 세트), 신제품(NEW 쉬림프) 출시 홍보 캠페인페인 이름3',
        date: '2023.00.00 - 2023.00.00',
        recruits: '20명',
        reaction_rate: '60%'
    },
    {
        ranking: 4,
        title: '캠신상 굿즈(슬리퍼+비치백 세트), 신제품(NEW 쉬림프) 출시 홍보 캠페인페인 이름',
        date: '2023.00.00 - 2023.00.00',
        recruits: '4명',
        reaction_rate: '60%'
    }
]