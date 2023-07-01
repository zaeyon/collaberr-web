import styled from '@emotion/styled';

import BasicForm from './BasicForm';
import CampaignsForm from './CampaignsForm';
import MissionsForm from './MissionsForm';
import FormButtonArea from './FormButtonArea';
import DatesForm from './DatesForm';
import ProgressBar from './ProgressBar';
import React from 'react';
import { start } from 'repl';

const Container = styled.div`
    right: 0;
    height: 100%;
    width: 400px;
    position: fixed;
    background-color: white;
    padding: 24px 16px 24px 16px;
`

const Form = styled.div`
    width: 100%;
    
`;

const Title = styled.div`
    font-family: 'Pretendard';
    font-size: 24px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: -0.015em;
    text-align: left;
`;

interface props {
    type: string;
    isInvaildForm: boolean;
    curProgress: number;
    brandName: string;
    title: string;
    thumbnailImageFile: any;
    category: string;
    platform: string;
    startDate: any;
    endDate: any;
    description: string;
    missionType: string;
    bid: number | undefined;
    files: any;
    recruitStartDate: any;
    recruitEndDate: any;
    period: string;
    changeThumbnailImage: (file: any, url: any) => void;
    changeProgress: (direction: string) => void;
    clickRegisterCampaign: () => void;
    changeBrandName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeCategory: (value: string) => void;
    changePlatform: (value: string) => void;
    changeStartDate: (value: any) => void;
    changeEndDate: (value: any) => void;
    changeDescription: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; 
    changeMissionType: (value: string) => void;
    changeBid: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeFiles: (value: string) => void;
    changeRecruitStartDate: (value: any) => void;
    changeRecruitEndDate: (value: any) => void;
    changePeriod: (value: string) => void;
    deleteFiles: (name: string) => void;
}

export default function CamapignForm({type, curProgress, changeProgress, clickRegisterCampaign, brandName, title, thumbnailImageFile, category, platform, startDate, endDate, description, missionType, bid, files, changeThumbnailImage, changeBrandName, changeTitle, changeCategory, changePlatform, changeStartDate, changeEndDate, changeDescription, changeMissionType, changeBid, changeFiles, isInvaildForm, recruitStartDate, recruitEndDate, period, changeRecruitStartDate, changeRecruitEndDate, changePeriod, deleteFiles}: props) {

    return (
        <Container>
            <Form>
            <Title>
            {type === "create" ? "New Campaign" : "Edit Campaign"}
            </Title>
            <ProgressBar
            curProgress={curProgress}/>
            {curProgress === 1 && (
                <BasicForm
                brandName={brandName}
                title={title}
                thumbnailImageFile={thumbnailImageFile}
                changeThumbnailImage={changeThumbnailImage}
                changeBrandName={changeBrandName}
                changeTitle={changeTitle}
                />
            )}
            {curProgress === 2 && (
                <DatesForm
                recruitStartDate={recruitStartDate}
                recruitEndDate={recruitEndDate}
                startDate={startDate}
                endDate={endDate}
                period={period}
                changeRecruitStartDate={changeRecruitStartDate}
                changeRecruitEndDate={changeRecruitEndDate}
                changeStartDate={changeStartDate}
                changeEndDate={changeEndDate}
                changePeriod={changePeriod}/>
            )}
            {curProgress === 3 && (
                <CampaignsForm
                category={category}
                platform={platform}
                description={description}
                changeCategory={changeCategory}
                changePlatform={changePlatform}
                changeDescription={changeDescription}
                />
            )}
            {curProgress === 4 && (
                <MissionsForm
                missionType={missionType}
                bid={bid}
                files={files}
                changeMissionType={changeMissionType}
                changeBid={changeBid}
                changeFiles={changeFiles}
                deleteFiles={deleteFiles}
                />
            )}
            <FormButtonArea
            curProgress={curProgress}
            changeProgress={changeProgress}
            clickRegisterCampaign={clickRegisterCampaign}
            isInvaildForm={isInvaildForm}/>
            </Form>
        </Container>
    )
}