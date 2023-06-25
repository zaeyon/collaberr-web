import styled from '@emotion/styled';

import BasicForm from './BasicForm';
import CampaignsForm from './CampaignsForm';
import MissionsForm from './MissionsForm';
import FormButtonArea from './FormButtonArea';
import ProgressBar from './ProgressBar';
import React from 'react';

const Container = styled.div`
    width: 100%;
    background-color: white;
    padding: 24px 16px;
`

const Title = styled.div`
    font-family: 'Pretendard';
    font-size: 24px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: -0.015em;
    text-align: left;
`;

interface props {
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
}

export default function NewCamapignForm({curProgress, changeProgress, clickRegisterCampaign, brandName, title, thumbnailImageFile, category, platform, startDate, endDate, description, missionType, bid, files, changeThumbnailImage, changeBrandName, changeTitle, changeCategory, changePlatform, changeStartDate, changeEndDate, changeDescription, changeMissionType, changeBid, changeFiles, isInvaildForm}: props) {

    return (
        <Container>
            <Title>
            New Campaign
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
                <CampaignsForm
                category={category}
                platform={platform}
                startDate={startDate}
                endDate={endDate}
                description={description}
                changeCategory={changeCategory}
                changePlatform={changePlatform}
                changeStartDate={changeStartDate}
                changeEndDate={changeEndDate}
                changeDescription={changeDescription}
                />
            )}
            {curProgress === 3 && (
                <MissionsForm
                missionType={missionType}
                bid={bid}
                files={files}
                changeMissionType={changeMissionType}
                changeBid={changeBid}
                changeFiles={changeFiles}
                />
            )}
            <FormButtonArea
            curProgress={curProgress}
            changeProgress={changeProgress}
            clickRegisterCampaign={clickRegisterCampaign}
            isInvaildForm={isInvaildForm}/>
        </Container>
    )
}