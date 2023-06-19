'use client';

import styled from '@emotion/styled';
import CampaignDetail from '@/app/components/CampaignDetail';
import NewCamapignForm from '@/app/components/NewCampaignForm';

const Container = styled.div`
display: flex;
flex-direction: row;
`;

const PreviewContainer = styled.div`
padding: 32px 24px 37px 24px;
display: flex;
background-color: #E6EAEF;
flex-direction: column;
    
`;

const PreviewText = styled.div`
font-family: 'Pretendard';
font-size: 17px;
font-weight: 600;
line-height: 27px;
letter-spacing: -0.015em;
text-align: left;
color: #8696AB;
`;

const PreviewInnerContainer = styled.div`
overflow-y: scroll;
height: 80vh;
margin-top: 8px;
border-radius: 16px;
padding: 48px 16px;
background-color: white;
`;

const FormContainer = styled.div`
width: 100%;
    
`; 

export default function Create() {
    return (
        <Container>
            <PreviewContainer>
            <PreviewText>
                Preview
            </PreviewText>
            <PreviewInnerContainer>
            <CampaignDetail/>
            </PreviewInnerContainer>
            </PreviewContainer>
            <FormContainer>
            <NewCamapignForm/>
            </FormContainer>
        </Container>

    )
}