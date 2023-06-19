import styled from '@emotion/styled';

import BasicInfoForm from './BasicInfoForm';

const Container = styled.div`
    
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

const ProgressBar = styled.div`
    border-radius: 8px;
    width: 100%;
    height: 4px;
    margin-top: 24px;
    background-color: #F1F4F7;
`;

export default function NewCamapignForm() {
    return (
        <Container>
            <Title>
            New Campaign
            </Title>
            <ProgressBar/>
            <BasicInfoForm/>
            

        </Container>
    )
}