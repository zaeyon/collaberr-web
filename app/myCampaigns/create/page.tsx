'use client';
import React, {useState} from 'react';
import styled from '@emotion/styled';

import CampaignPreview from '@/app/components/CampaignPreview';
import NewCamapignForm from '@/app/components/NewCampaignForm';

const Container = styled.div`
display: flex;
flex-direction: row;
`;


export default function Create() {
    const [brandName, setBrandName] = useState('');
    const [title, setTitle] = useState('');
    const [thumbnailImageFile, setThumbnailImageFile] = useState<any>();
    const [thumbnailImageSrc, setThumbnailImageSrc] = useState<any>();
    const [category, setCategory] = useState("default");
    const [platform, setPlarform] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [missionType, setMissionType] = useState("");
    const [bid, setBid] = useState<number>();
    const [files, setFiles] = useState<any>();

    const [curProgress, setCurProgress] = useState<number>(1);

    const changeProgress = (direction: string) => {
        if(direction === "next") setCurProgress((prev) => prev+1)
        if(direction === "prev") setCurProgress((prev) => prev-1)
    }

    const submitCampaignCreate = () => {

    }

    const changeBrandName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBrandName(e.target.value);
    }

    const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const changeThumbnailImage = (file: any, src: any) => {
        setThumbnailImageFile(file);
        setThumbnailImageSrc(src);
    }

    const changeCategory = (value: string) => {
        setCategory(value);
    }

    const changePlatform = (value: string) => {
        setPlarform(value);
    }

    const changeDate = (value: any) => {
        setDate(value);
    }

    const changeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }
    
    return (
        <Container>
            <CampaignPreview
            brandName={brandName}
            title={title}
            thumbnailImageSrc={thumbnailImageSrc}
            />
            <NewCamapignForm
            brandName={brandName}
            title={title}
            thumbnailImageFile={thumbnailImageFile}
            category={category}
            platform={platform}
            date={date}
            description={description}
            missionType={missionType}
            bid={bid}
            files={files}
            curProgress={curProgress}
            changeProgress={changeProgress}
            changeThumbnailImage={changeThumbnailImage}
            submitCampaignCreate={submitCampaignCreate}
            changeBrandName={changeBrandName}
            changeTitle={changeTitle}
            changeCategory={changeCategory}
            changePlatform={changePlatform}
            changeDate={changeDate}
            changeDescription={changeDescription}/>
        </Container>

    )
}