import styled from '@emotion/styled';

import Button from '../Button';

const Container = styled.div`
    margin-top: 40px; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;  
`;

interface props {
    changeProgress: (direction: string) => void;
    curProgress: number;
    submitCampaignCreate: () => void;
}

export default function FormButtonArea({changeProgress, curProgress, submitCampaignCreate}: props) {

    return (
        <Container>
            <Button
            onClick={() => changeProgress("prev")}
            label={"Previous"}
            style={"tertiery"}
            size={"small"}
            state={curProgress > 1 ? "default" : "disabled"}
            />
            {curProgress < 3 && (
            <Button
            onClick={() => changeProgress("next")}
            label={"Next"}
            style={"tertiery"}
            size={"small"}
            state={"default"}
            />
            )}
            {curProgress === 3 && (
            <Button
            onClick={() => submitCampaignCreate()}
            label={"Register"}
            style={"primary"}
            size={"small"}
            state={"default"}
            />
            )}
        </Container>

    )
}