"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";

import { GET_channelVideos, GET_channelInfo } from "@/app/api/youtube";
import { getYoutubeTopic, getCountryName } from "@/app/lib/youtube";
import { getFormattedDate } from "@/app/lib/date";
import Tab from "./Tab/Tab";
import Button from "../Button";
import icon_profile_default from "@/app/assets/icons/icon_profile-fill.png";

const Container = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 4;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background: #242d35;
`;

const Modal = styled.div`
  padding: 64px 16px 100px 16px;
  position: fixed;
  z-index: 5;
  right: -984px;
  top: 0;
  background-color: white;
  height: 100%;
  width: 1300px;
  opacity: 1;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfileImage = styled(Image)`
  border-radius: 100px;
`;

const ChannelNameDiv = styled.span`
  margin-left: 16px;
`;

const Name = styled.h3`
  margin-top: 2px;
  font-weight: 700;
`;

const Handle = styled.p`
  color: #8696ab;
`;

const CategoryListDiv = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

const CategoryItem = styled.div`
  color: #445462;
  font-family: "Pretendard";
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 20.8px */
  letter-spacing: -0.195px;
  display: flex;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  background-color: #f7f9fb;
`;

const MainInfoListDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

const MainInfoItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainInfoLabel = styled.p`
  font-size: 13px;
  letter-spacing: -0.195px;
`;

const MainInfoValue = styled.p`
  margin-top: 4px;
  color: #242d35;
  font-weight: 600;
`;

const MainInfoDivider = styled.div`
  width: 1px;
  height: 65px;
  background-color: #f1f4f7;
  margin-left: 16px;
  margin-right: 16px;
`;

interface props {
  curTab: string;
  changeTab: (tab: string) => void;
  clickModalOutside: () => void;
}

export default function CreatorDetail({
  clickModalOutside,
  curTab,
  changeTab,
}: props) {
  const [channelInfo, setChannelInfo] = useState<any>({});
  const [channelVideos, setChannelVideos] = useState([]);

  useEffect(() => {
    GET_channelInfo("UCOByc6akvw27KbJ1p9jn3BQ")
      .then((res) => {
        console.log("GET_channelInfo success", res);
        setChannelInfo(res.data.items[0]);
      })
      .catch((err) => {
        console.log("GET_channelInfo err", err);
      });

    GET_channelVideos("UCOByc6akvw27KbJ1p9jn3BQ")
      .then((res) => {
        console.log("GET_channelVideos success", res);
        setChannelVideos(res.data.items);
      })
      .catch((err) => {
        console.log("GET_channelVideos err", err);
      });
  }, []);

  useEffect(() => {
    console.log("Creator Detaul Open");
    api.start({
      from: {
        right: -984,
      },
      to: {
        right: 0,
      },
    });
  }, []);

  const [modalSprings, api] = useSpring(() => ({
    right: -984,
    config: {
      mass: 1.4,
      friction: 50,
      tension: 400,
    },
  }));

  return (
    <>
      <Container onClick={() => clickModalOutside()}></Container>
      <animated.div
        style={{
          padding: "64px 16px 0px 16px",
          position: "fixed",
          zIndex: 5,
          bottom: 0,
          top: 0,
          backgroundColor: "white",
          height: "100%",
          width: 984,
          overflowY: "scroll",
          ...modalSprings,
        }}
      >
        <Header>
          <ProfileDiv>
            <ProfileImage
              width={64}
              height={64}
              src={
                channelInfo?.snippet?.thumbnails.medium.url
                  ? channelInfo?.snippet?.thumbnails.medium.url
                  : icon_profile_default
              }
              alt={"icon_profile_default"}
            />
            <ChannelNameDiv>
              <Name>{channelInfo?.snippet?.title}</Name>
              <Handle>{channelInfo?.snippet?.customUrl}</Handle>
            </ChannelNameDiv>
          </ProfileDiv>
          <Link
            href={`https://www.youtube.com/${channelInfo?.snippet?.customUrl}`}
            target={"_blank"}
          >
            <Button
              size={"small"}
              state={"default"}
              label={"채널 보기"}
              style={"tertiery"}
            />
          </Link>
        </Header>
        <CategoryListDiv>
          {channelInfo?.topicDetails?.topicIds.map(
            (item: string, index: number) => {
              return (
                <CategoryItem key={index}>{getYoutubeTopic(item)}</CategoryItem>
              );
            }
          )}
        </CategoryListDiv>
        <MainInfoListDiv>
          <MainInfoItem>
            <MainInfoLabel>{"구독자"}</MainInfoLabel>
            <MainInfoValue>{`${Number(
              channelInfo?.statistics?.subscriberCount
            ).toLocaleString()}명`}</MainInfoValue>
          </MainInfoItem>
          <MainInfoDivider />
          <MainInfoItem>
            <MainInfoLabel>{"총 조회수"}</MainInfoLabel>
            <MainInfoValue>{`${Number(
              channelInfo?.statistics?.viewCount
            ).toLocaleString()}회`}</MainInfoValue>
          </MainInfoItem>
          <MainInfoDivider />
          <MainInfoItem>
            <MainInfoLabel>{"등록 영상"}</MainInfoLabel>
            <MainInfoValue>{`${Number(
              channelInfo?.statistics?.videoCount
            ).toLocaleString()}개`}</MainInfoValue>
          </MainInfoItem>
          <MainInfoDivider />
          <MainInfoItem>
            <MainInfoLabel>{"국가"}</MainInfoLabel>
            <MainInfoValue>
              {getCountryName(channelInfo?.snippet?.country)}
            </MainInfoValue>
          </MainInfoItem>
          <MainInfoDivider />
          <MainInfoItem>
            <MainInfoLabel>{"가입일"}</MainInfoLabel>
            <MainInfoValue>
              {getFormattedDate(
                new Date(channelInfo?.snippet?.publishedAt),
                "."
              )}
            </MainInfoValue>
          </MainInfoItem>
        </MainInfoListDiv>
        <Tab
          marginTop={40}
          curTab={curTab}
          changeTab={changeTab}
          channelVideos={channelVideos}
        />
      </animated.div>
    </>
  );
}
