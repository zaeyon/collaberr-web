"use client";
import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { useRecoilState, useRecoilValue } from "recoil";
import { myCampaignsState, campaignStatusTableState } from "../recoil/campaign";

import { GET_showMyCampaigns } from "../api/campaign";
import Scoreboard from "../components/Dashboard/Scoreboard";
import ListTable from "../components/ListTable";

const Container = styled.div`
  padding: 40px 0px;
`;

export default function Dashboard() {
  const [myCampaigns, setMyCampaigns] = useRecoilState(myCampaignsState);
  const campaignStatusTableList = useRecoilValue(campaignStatusTableState);
  const totalInvestmentCost = useRef<number>();
  const totalViews = useRef<number>();
  const totalParticipation = useRef<number>();

  useEffect(() => {
    GET_showMyCampaigns()
      .then((res) => {
        console.log("GET_showMyCampaigns success", res);
        setMyCampaigns(res.data);
        totalInvestmentCost.current = res.data.reduce(
          (sum: number, item: any) => {
            return (sum += item.reward * item.approved_creators.length);
          },
          0
        );
        totalParticipation.current = res.data.reduce(
          (sum: number, item: any) => {
            return (sum += item.approved_creators.length);
          },
          0
        );
      })
      .catch((err) => {
        console.log("GET_showMyCampaign err", err);
      });
  }, []);

  const SCOREBOARD_DATA = [
    {
      label: "진행중인 캠페인",
      value: myCampaigns.length ? `${myCampaigns.length}개` : "-",
    },
    {
      label: "전체 투자 비용",
      value: totalInvestmentCost.current
        ? `$${totalInvestmentCost.current.toLocaleString()}`
        : "-",
    },
    {
      label: "전체 조회수",
      value: totalViews.current ? `${totalViews.current}회` : "-",
    },
    {
      label: "전체 참여수",
      value: totalParticipation.current
        ? `${totalParticipation.current}회`
        : "-",
    },
  ];

  return (
    <Container>
      <Scoreboard data={SCOREBOARD_DATA} />
      <ListTable
        tableMarginTop={40}
        headerColumns={CAMPAIGN_RAKING_TABLE_HEADER}
        data={campaignStatusTableList}
        emptyTitle={"아직 등록된 캠페인이 없습니다."}
        emptyDescrip={"새로운 캠페인을 생성해주세요"}
      />
    </Container>
  );
}

const CAMPAIGN_RAKING_TABLE_HEADER = [
  {
    label: "State",
    width: "9.37",
  },
  {
    label: "캠페인명",
    width: "39.58",
  },
  {
    label: "기간",
    width: "20.83",
  },
  {
    label: "모집 인원",
    width: "10.41",
  },
  {
    label: "반응률",
    width: "10.41",
    description: "반응률 = (좋아요 수 + 댓글 수 /전체 조회수)x100",
    tooltipWidth: 308,
  },
  {
    label: "상세분석",
    width: "9.37",
  },
];

const CAMPAIGNS_RANKING_DATA = [
  {
    rank: 1,
    name: "캠신상 굿즈(슬리퍼+비치백 세트), 신제품(NEW 쉬림프) 출시 홍보 캠페인페인 이름1 adadsdsadadadadasdadkjalkdjklajdakldjkladjldjalkdj",
    date: "2023.00.00 - 2023.00.00",
    recruits: "4명",
    reaction_rate: "60%",
    content: "",
  },
  {
    rank: 2,
    name: "캠신상 굿즈(슬리퍼+비치백 세트), 신제품(NEW 쉬림프) 출시 홍보 캠페인페인 이름2",
    date: "2023.00.00 - 2023.00.00",
    recruits: "12명",
    reaction_rate: "50%",
    content: "",
  },
  {
    rank: 3,
    name: "캠신상 굿즈(슬리퍼+비치백 세트), 신제품(NEW 쉬림프) 출시 홍보 캠페인페인 이름3",
    date: "2023.00.00 - 2023.00.00",
    recruits: "20명",
    reaction_rate: "60%",
    content: "",
  },
  {
    rank: 4,
    name: "캠신상 굿즈(슬리퍼+비치백 세트), 신제품(NEW 쉬림프) 출시 홍보 캠페인페인 이름",
    date: "2023.00.00 - 2023.00.00",
    recruits: "4명",
    reaction_rate: "60%",
    content: "",
  },
];
