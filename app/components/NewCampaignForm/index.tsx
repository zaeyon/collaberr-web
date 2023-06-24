import styled from '@emotion/styled';

import BasicForm from './BasicForm';
import CampaignsForm from './CampaignsForm';
import MissionsForm from './MissionsForm';
import FormButtonArea from './FormButtonArea';
import ProgressBar from './ProgressBar';

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
    curProgress: number;
    brandName: string;
    title: string;
    thumbnailImageFile: any;
    category: string;
    platform: string;
    date: string;
    description: string;
    missionType: string;
    bid: number | undefined;
    files: any;
    changeThumbnailImage: (file: any, url: any) => void;
    changeProgress: (direction: string) => void;
    submitCampaignCreate: () => void;
    changeBrandName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeCategory: (value: string) => void;
    changePlatform: (value: string) => void;
    changeDate: (value: any) => void;
    changeDescription: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; 
}

export default function NewCamapignForm({curProgress, changeProgress, submitCampaignCreate, brandName, title, thumbnailImageFile, category, platform, date, description, missionType, bid, files, changeThumbnailImage, changeBrandName, changeTitle, changeCategory, changePlatform, changeDate, changeDescription}: props) {

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
                date={date}
                description={description}
                changeCategory={changeCategory}
                changePlatform={changePlatform}
                changeDate={changeDate}
                changeDescription={changeDescription}
                />
            )}
            {curProgress === 3 && (
                <MissionsForm/>
            )}
            <FormButtonArea
            curProgress={curProgress}
            changeProgress={changeProgress}
            submitCampaignCreate={submitCampaignCreate}/>
        </Container>
    )
}