"use client";
import { SetStateAction, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";
import { allCampaignsState } from "./recoil/campaign";

import CampaignCarousel from "./components/CampaignCarousel";
import Button from "./components/Button";
import CreatorRanking from "./components/CreatorRanking";
import { GET_showAllCampaigns } from "./api/campaign";

export default function Home() {
  const [allCampaigns, setAllCampaigns] = useRecoilState(allCampaignsState);
  const [loading, setLoading] = useState(
    allCampaigns.length > 0 ? false : true
  );
  const [curCategory, setCurCategory] = useState({
    value: "all",
    kr: "전체",
  });

  const router = useRouter();

  const selectCategory = (
    category: SetStateAction<{ value: string; kr: string }>
  ) => {
    setCurCategory(category);
  };

  useEffect(() => {
    console.time("GET_showAllCampaigns");
    GET_showAllCampaigns()
      .then((res) => {
        console.timeEnd("GET_showAllCampaigns");
        console.log("GET_showAllCampaigns sucess", res);
        setLoading(false);
        setAllCampaigns(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log("GET_showAllCampaign fail", err);
      });
  }, []);

  return (
    <main className={styles.container}>
      <h3 className={styles.title}>인기 캠페인</h3>
      <p className={styles.description}>
        지금 크리에이터들에게 가장 인기있는 캠페인
      </p>
      <div className={styles.popularCampaigns}>
        <CampaignCarousel loading={loading} campaignsData={allCampaigns} />
        <Button
          onClick={() => router.push("/campaigns")}
          style="tertiery"
          size="xsmall"
          state="default"
          label="전체보기"
        />
      </div>
      {/* <h3 className={styles.title}>내가 본 캠페인</h3>
      <div className={styles.sawCampaigns}>
        <CampaignCarousel loading={loading} campaignsData={allCampaigns} />
        <Button
          onClick={() => router.push("/campaigns")}
          style="tertiery"
          size="xsmall"
          state="default"
          label="전체보기"
        />
      </div> */}
      <h3 className={styles.title}>크리에이터 랭킹</h3>
      <p className={styles.description}>
        크리에이터 랭킹은 ~기준으로 산정됩니다
      </p>
      <div className={styles.creatorRanking}>
        <CreatorRanking
          selectCategory={selectCategory}
          curCategory={curCategory}
          creatorRankingData={CREATOR_RANKING_DATA}
        />
      </div>
    </main>
  );
}

const CREATOR_RANKING_DATA = [
  {
    ranking: 1,
    name: "누가영Nugayoung",
    followerNum: "1.5k",
  },
  {
    ranking: 2,
    name: "누가영Nugayoung",
    followerNum: "1.5k",
  },
  {
    ranking: 3,
    name: "누가영Nugayoung",
    followerNum: "1.5k",
  },
  {
    ranking: 4,
    name: "누가영Nugayoung",
    followerNum: "1.5k",
  },
  {
    ranking: 5,
    name: "누가영Nugayoung",
    followerNum: "1.5k",
  },
  {
    ranking: 6,
    name: "누가영Nugayoung",
    followerNum: "1.5k",
  },
  {
    ranking: 7,
    name: "누가영Nugayoung",
    followerNum: "1.5k",
  },
  {
    ranking: 8,
    name: "누가영Nugayoung",
    followerNum: "1.5k",
  },
  {
    ranking: 9,
    name: "누가영Nugayoung",
    followerNum: "1.5k",
  },
  {
    ranking: 10,
    name: "누가영Nugayoung",
    followerNum: "1.5k",
  },
];
