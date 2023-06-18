'use client';

import styled from '@emotion/styled';
import CampaignDetail from '@/app/components/CampaignDetail';
import NewCamapignForm from '@/app/components/NewCampaignForm';

const Container = styled.div`
position: fixed;
width: 100%;
padding: 32px 24px;
display: flex;
background-color: #E6EAEF;
`;

const PreviewText = styled.span`
font-family: 'Pretendard';
font-size: 17px;
font-weight: 600;
line-height: 27px;
letter-spacing: -0.015em;
text-align: left;
color: #8696AB;
`;

const PreviewContainer = styled.div`
overflow-y: scroll;
height: 80vh;
margin-top: 8px;
border-radius: 16px;
padding: 48px 16px;
background-color: white;
`;

export default function Create() {
    return (
        <Container>
            <div>
            <PreviewText>
                Preview
            </PreviewText>
            <PreviewContainer>
            <CampaignDetail/>
            </PreviewContainer>
            </div>
            <NewCamapignForm/>
        </Container>

    )
}