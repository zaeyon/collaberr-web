"use client";
import React, { useState, useCallback, useEffect } from "react";
import styled from "@emotion/styled";
import Image from "next/image";

import icon_exit from "@/app/assets/icons/icon_exit.png";
import Button from "./Button";
import InfoInput from "./InfoInput";
import Checkbox from "./Checkbox";
import { PATCH_youtubeAuth } from "../api/auth";

const Container = styled.div`
  z-index: 4;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #242d3530;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 32px;
  border-radius: 16px;
  width: 456px;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(36, 45, 53, 0.1);
`;

const Title = styled.div`
  color: #35424c;
  font-size: 21px;
  font-family: "Pretendard";
  font-weight: 600;
  line-height: 160%;
  letter-spacing: -0.315px;
`;

const Description = styled.div`
  margin-top: 6px;
  color: #536878;
  font-size: 15px;
  font-weight: 400;
  font-family: "Pretendard";
  line-height: 160%;
  letter-spacing: -0.255px;
`;

const Footer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CloseDiv = styled.div`
  padding: 4px 6px;
  color: #536878;

  cursor: pointer;
  font-family: "Pretendard";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 24px */
  letter-spacing: -0.225px;
`;

interface props {
  closeModal: () => void;
  submitJoinCampaign: () => void;
}

export default function ReviewCreatorInfoModal({
  closeModal,
  submitJoinCampaign,
}: props) {
  const [channelUrl, setChannelUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [checked, setChecked] = useState(false);
  const [isVaildForm, setIsVaildForm] = useState(false);

  useEffect(() => {
    if (channelUrl && phoneNumber && email && address && checked) {
      setIsVaildForm(true);
    } else {
      setIsVaildForm(false);
    }
  }, [channelUrl, phoneNumber, email, address, checked, isVaildForm]);

  const changeChannelUrl = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setChannelUrl(e.target.value);
    },
    []
  );

  const changePhoneNumber = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPhoneNumber(e.target.value);
    },
    []
  );

  const changeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const changeAddress = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAddress(e.target.value);
    },
    []
  );

  const clickCheckbox = () => {
    setChecked(!checked);
  };

  const confirmChannelUrl = () => {
    const regex = /@.*/;
    const channelName = channelUrl.match(regex)?.[0];

    PATCH_youtubeAuth(channelName)
      .then((res) => {
        console.log("PATCH_youtubeAuth success", res);
        window.open(res.data.authorization_url, "_blank");
      })
      .catch((err) => {
        console.log("PATCH_youtubeAuth err", err);
      });
  };

  return (
    <Container>
      <Modal>
        <Title>{"필수정보 검토"}</Title>
        <Description>
          원활한 캠페인 진행을 위해서 입력된 크리에이터
          <br />
          정보 를 다시 한번 확인해주세요
        </Description>
        <Form>
          <InfoInput
            required={true}
            height={40}
            marginTop={16}
            value={channelUrl}
            label={"채널 주소"}
            onChangeInput={changeChannelUrl}
            placeholder={"채널 주소를 입력하세요."}
            button={"채널 인증"}
            clickButton={confirmChannelUrl}
          />
          <InfoInput
            required={true}
            height={40}
            marginTop={0}
            value={phoneNumber}
            label={"연락처"}
            type={"number"}
            onChangeInput={changePhoneNumber}
            placeholder={"연락처를 입력하세요."}
          />{" "}
          <InfoInput
            required={true}
            height={40}
            marginTop={0}
            value={email}
            label={"이메일"}
            onChangeInput={changeEmail}
            placeholder={"이메일 주소를 입력하세요."}
          />
          <InfoInput
            required={true}
            height={40}
            marginTop={0}
            value={address}
            label={"수령주소"}
            onChangeInput={changeAddress}
            placeholder={"상품을 배송받을 주소를 입력하세요."}
          />
          <Checkbox
            selected={checked}
            clickCheckbox={clickCheckbox}
            label={"에 동의합니다"}
            viewTerms={"이용약관"}
          />
          <Footer>
            <CloseDiv onClick={() => closeModal()}>닫기</CloseDiv>
            <Button
              onClick={submitJoinCampaign}
              label={"참여 신청"}
              state={isVaildForm ? "default" : "disabled"}
              size={"small"}
              style={"primary"}
            />
          </Footer>
        </Form>
      </Modal>
    </Container>
  );
}
