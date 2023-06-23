'use client';
import {useState} from 'react';
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
    const [category, setCategory] = useState("");
    const [platform, setPlarform] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [missionType, setMissionType] = useState("");
    const [bid, setBid] = useState("");
    const [files, setFiles] = useState<any>();

    const [curProgress, setCurProgress] = useState<number>(1);

    const changeProgress = (direction: string) => {
        if(direction === "next") setCurProgress((prev) => prev+1)
        if(direction === "prev") setCurProgress((prev) => prev-1)
    }
    
    return (
        <Container>
            <CampaignPreview/>
            <NewCamapignForm
            changeProgress={changeProgress}
            curProgress={curProgress}/>
        </Container>

    )
}