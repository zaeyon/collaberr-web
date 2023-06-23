import styled from '@emotion/styled';

import BasicForm from './BasicForm';
import CampaignsForm from './CampaignsForm';
import MissionsForm from './MissionsForm';
import FormButtonArea from './FormButtonArea';

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

const ProgressBar = styled.div`
    border-radius: 8px;
    width: 100%;
    height: 4px;
    margin-top: 24px;
    background-color: #F1F4F7;
`;

interface props {
    curProgress: number;
    changeProgress: (direction: string) => void;

}

export default function NewCamapignForm({curProgress, changeProgress}: props) {
    return (
        <Container>
            <Title>
            New Campaign
            </Title>
            <ProgressBar/>
            {curProgress === 1 && (
                <BasicForm/>
            )}
            {curProgress === 2 && (
                <CampaignsForm/>
            )}
            {curProgress === 3 && (
                <MissionsForm/>
            )}
            <FormButtonArea
            curProgress={curProgress}
            changeProgress={changeProgress}/>
        </Container>
    )
}