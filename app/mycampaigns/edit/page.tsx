'use client';
import React, {useState, useEffect, useRef} from 'react';
import styled from '@emotion/styled';
import { useRouter, useSearchParams } from 'next/navigation';
import { useRecoilState } from 'recoil';

import CampaignPreview from '@/app/components/CampaignPreview';
import CamapignForm from '@/app/components/CampaignForm';
import ConfirmModal from '@/app/components/ConfirmModal';
import { getFormattedDate } from '@/app/lib/date';
import { PATCH_editCampaign } from '@/app/api/campaign';
import { campaignType } from '@/app/type/campaign';
import { myCampaignsState } from '@/app/recoil/campaign';

const Container = styled.div`
display: flex;
flex-direction: row;
`;


export default function Edit() {
    const [myCampaigns, setMyCampaigns] = useRecoilState(myCampaignsState);
    const searchParams = useSearchParams();
    const id = Number(searchParams.get('id'));
    const index = myCampaigns.findIndex((item: any) => item.id === id);

    console.log("index", index);
    console.log("myCampaigns", myCampaigns);

    const [brandName, setBrandName] = useState(myCampaigns?.[index]?.brand_name);
    const [title, setTitle] = useState(myCampaigns[index]?.title);
    const [thumbnailImageFile, setThumbnailImageFile] = useState<any>();
    const [thumbnailImageSrc, setThumbnailImageSrc] = useState<any>();
    const [category, setCategory] = useState(myCampaigns[index]?.category);
    const [platform, setPlarform] = useState(myCampaigns[index]?.platform); 
    const [description, setDescription] = useState(myCampaigns[index]?.description);
    const [missionType, setMissionType] = useState(myCampaigns[index]?.mission_type);
    const [bid, setBid] = useState<any>(Number(myCampaigns[index]?.reward));
    const [files, setFiles] = useState<any>([]);
    const [curProgress, setCurProgress] = useState<number>(1);
    const [isInvaildForm, setInvaildForm] = useState<boolean>(true);

    const [recruitStartDate, setRecruitStartDate] = useState<any>(new Date(myCampaigns[index]?.recruit_start_date));
    const [recruitEndDate, setRecruitEndDate] = useState<any>(new Date(myCampaigns[index]?.recruit_end_date));

    const [startDate, setStartDate] = useState<any>(new Date(myCampaigns[index]?.start_date));
    const [endDate, setEndDate] = useState<any>(new Date(myCampaigns[index]?.end_date));
    const [shownStartDate, setShownStartDate] = useState<string>(myCampaigns[index]?.start_date);
    const [shownEndDate, setShownEndDate] = useState<string>(myCampaigns[index]?.end_date);
    const [period, setPeriod] = useState("");

    const [isVisModal, setIsVisModal] = useState<boolean>(false);

    const router = useRouter();

    const shownRecruitStartDate = useRef("");
    const shownRecruitEndDate = useRef("");

    useEffect(() => {
        const startDateArr = myCampaigns[index]?.start_date.split("-");
        const endDateArr = myCampaigns[index]?.end_date.split("-");

        if(startDateArr?.[2] !== endDateArr?.[2]) {
            setPeriod("Custom");
        } else {
            if(endDateArr?.[0] > startDateArr?.[0]) {
                if(Number(endDateArr?.[1]) + 12 - Number(startDateArr?.[1]) === 3) {
                    setPeriod("3 months")
                } else if(Number(endDateArr?.[1]) + 12 - Number(startDateArr?.[1]) === 6) {
                    setPeriod("6 months")
                } else {
                    setPeriod("Custom");
                }
            } else if(endDateArr?.[0] === startDateArr?.[0]) {
                if(Number(endDateArr?.[1]) - Number(startDateArr?.[1]) === 3) {
                    setPeriod("3 months")
                } else if(Number(endDateArr?.[1]) - Number(startDateArr?.[1]) === 6) {
                    setPeriod("6 months");
                } else {
                    setPeriod("Custom");
                }
            }
        }
    }, [])

    useEffect(() => {
        if(brandName && title && thumbnailImageFile && category !== 'default' && platform && startDate && recruitStartDate && recruitEndDate && description && missionType !== "default" && bid) {
            if(period && period !== "Custom") {
                setInvaildForm(false);
            } else if(period === "Custom" && endDate) {
                setInvaildForm(false);
            } else {
                setInvaildForm(true);
            }
        } else {
            setInvaildForm(true)
        }

    }, [brandName, title, thumbnailImageFile, category, platform, startDate, endDate, description, missionType, bid, recruitStartDate, recruitEndDate, period])

    const changeProgress = (direction: string) => {
        if(direction === "next") setCurProgress((prev) => prev+1)
        if(direction === "prev") setCurProgress((prev) => prev-1)
    }

    const clickRegisterCampaign = () => {
        setIsVisModal(true);
    }

    const submitCampaignCreate = () => {
        setIsVisModal(false);
        const newCampaign: any = {
            brand_name: brandName,
            title,
            thumbnail: null,
            category,
            platform,
            start_date: shownStartDate,
            end_date: shownEndDate,
            recruit_start_date: shownRecruitStartDate.current,
            recruit_end_date: shownRecruitEndDate.current,
            description,
            mission_type: missionType,
            reward: bid,
            additional_files: null,
        }

        PATCH_editCampaign(id, newCampaign)
        .then((res) => {
            console.log("PATCH_editCampaign success", res);
            
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
        console.log("changeFiles", files);
        let prevFiles = [...files];
        prevFiles.push(value);
        setFiles(prevFiles)
    }

    const deleteFiles = (name: string) => {
        let prevFiles = [...files];
        const index = files.findIndex((item: any) => item.name === name);

        prevFiles.splice(index, 1);
        setFiles(prevFiles);
    }

    const changeRecruitStartDate = (value: any) => {
        setRecruitStartDate(value);
        shownRecruitStartDate.current = getFormattedDate(value);
    }

    const changeRecruitEndDate = (value: any) => {
        console.log("changeRecruitEndDate", value);
        setRecruitEndDate(value);
        shownRecruitEndDate.current = getFormattedDate(value);
    }

    const changePeriod = (value: string) => {
        setPeriod(value);
        let startDateArr = shownStartDate.split("-");
        if(value === "3 months") {
            let tmpMonth = (Number(startDateArr[1]) + 3);
            if(tmpMonth <= 12) {
                const tmpMonthStr = tmpMonth < 10 ? "0" + tmpMonth : tmpMonth;
                setShownEndDate(startDateArr[0] + "-" + tmpMonthStr + "-" + startDateArr[2]);
            } else {
                const year = Number(startDateArr[0]) + 1;
                const month = Number(startDateArr[1])+3 - 12;
                setShownEndDate(year + "-" + "0" + month + "-" + startDateArr[2]);
            }
        } if(value === "6 months") {
            let tmpMonth = (Number(startDateArr[1]) + 6);
            if(tmpMonth <= 12) {
                const tmpMonthStr = tmpMonth < 10 ? "0" + tmpMonth : tmpMonth;
                setShownEndDate(startDateArr[0] + "-" + tmpMonthStr + "-" + startDateArr[2]);
            } else {
                const year = Number(startDateArr[0]) + 1;
                const month = Number(startDateArr[1])+6 - 12;
                setShownEndDate(year + "-" + "0" + month + "-" + startDateArr[2]);
            }
        }
    }
    
    return (
        <Container>
            <CampaignPreview
            brandName={brandName}
            title={title}
            thumbnailImageSrc={thumbnailImageSrc}
            platform={platform}
            category={category}
            shownStartDate={shownStartDate}
            shownEndDate={shownEndDate}
            description={description}
            missionType={missionType}
            bid={bid}
            files={files}/>
            <CamapignForm
            type={"edit"}
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
            isInvaildForm={isInvaildForm}
            recruitStartDate={recruitStartDate}
            recruitEndDate={recruitEndDate}
            period={period}
            changeRecruitStartDate={changeRecruitStartDate}
            changeRecruitEndDate={changeRecruitEndDate}
            changePeriod={changePeriod}
            deleteFiles={deleteFiles}/>
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