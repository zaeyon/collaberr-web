'use client';
import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';

import CampaignPreview from '@/app/components/CampaignPreview';
import NewCamapignForm from '@/app/components/NewCampaignForm';
import ConfirmModal from '@/app/components/ConfirmModal';
import { getFormattedDate } from '@/app/lib/date';
import { POST_createCampaign } from '@/app/api/campaign';
import { campaignType } from '@/app/type/campaign';

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
    const [startDate, setStartDate] = useState<any>();
    const [endDate, setEndDate] = useState<any>();
    const [shownStartDate, setShownStartDate] = useState<string>("");
    const [shownEndDate, setShownEndDate] = useState<string>("");
    const [description, setDescription] = useState("");
    const [missionType, setMissionType] = useState("default");
    const [bid, setBid] = useState<number>();
    const [files, setFiles] = useState<any>();
    const [curProgress, setCurProgress] = useState<number>(1);
    const [isInvaildForm, setInvaildForm] = useState<boolean>(true);

    const [isVisModal, setIsVisModal] = useState<boolean>(false);

    const router = useRouter();

    useEffect(() => {
        if(brandName && title && thumbnailImageFile && category !== 'default' && platform && shownStartDate && shownEndDate && description && missionType !== "default" && bid) {
            setInvaildForm(false);
        } else {
            setInvaildForm(true)
        }

    }, [brandName, title, thumbnailImageFile, category, platform, shownStartDate, shownEndDate, description, missionType, bid])

    const changeProgress = (direction: string) => {
        if(direction === "next") setCurProgress((prev) => prev+1)
        if(direction === "prev") setCurProgress((prev) => prev-1)
    }

    const clickRegisterCampaign = () => {
        setIsVisModal(true);
    }

    const submitCampaignCreate = () => {
        setIsVisModal(false);
        const newCampaign: campaignType = {
            brand_name: brandName,
            title,
            thumbnail: null,
            category,
            platform,
            start_date: shownStartDate,
            end_date: shownEndDate,
            description,
            mission_type: missionType,
            reward: bid,
            additional_files: null,
        }

        POST_createCampaign(newCampaign)
        .then((res) => {
            console.log("POST_createCampaign success", res)
            router.push('/mycampaigns');
        })
        .catch((err) => {
            console.log("POST_createCampaign err", err)
        })
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

    const changeStartDate = (value: any) => {
        setStartDate(value);
        setShownStartDate(getFormattedDate(value));
    }

    const changeEndDate = (value: any) => {
        setEndDate(value);
        setShownEndDate(getFormattedDate(value));
    }

    const changeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }

    const changeMissionType = (value: string) => {
        setMissionType(value);
    }

    const changeBid = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBid(e.target.value ? Number(e.target.value) : undefined);
    }

    const changeFiles = (value: any) => {
        setFiles(value);
    }
    
    return (
        <Container>
            <CampaignPreview
            brandName={brandName}
            title={title}
            thumbnailImageSrc={thumbnailImageSrc}
            platform={platform}
            shownStartDate={shownStartDate}
            shownEndDate={shownEndDate}
            description={description}
            missionType={missionType}
            bid={bid}
            files={files}/>
            <NewCamapignForm
            brandName={brandName}
            title={title}
            thumbnailImageFile={thumbnailImageFile}
            category={category}
            platform={platform}
            description={description}
            missionType={missionType}
            bid={bid}
            files={files}
            startDate={startDate}
            endDate={endDate}
            curProgress={curProgress}
            changeProgress={changeProgress}
            changeThumbnailImage={changeThumbnailImage}
            clickRegisterCampaign={clickRegisterCampaign}
            changeBrandName={changeBrandName}
            changeTitle={changeTitle}
            changeCategory={changeCategory}
            changePlatform={changePlatform}
            changeDescription={changeDescription}
            changeStartDate={changeStartDate}
            changeEndDate={changeEndDate}
            changeMissionType={changeMissionType}
            changeBid={changeBid}
            changeFiles={changeFiles}
            isInvaildForm={isInvaildForm}/>
            {isVisModal && (
                <ConfirmModal
                submitCampaignCreate={submitCampaignCreate}
                title={"Would you like to register campaign?"}
                description={"Please check the information again before registering new campaign"}
                closeModal={() => setIsVisModal(false)}
                />
            )}
        </Container>
    )
}