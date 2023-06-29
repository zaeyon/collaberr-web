import styled from '@emotion/styled';

interface ProgressProps {
    readonly curProgress: number;
}


const Container = styled.div`
    border-radius: 8px;
    width: 100%;
    height: 4px;
    margin-top: 24px;
    background-color: #F1F4F7;
`;

const Progress = styled.div<ProgressProps>`
    border-radius: 8px;
    width: ${(props) => props.curProgress === 1 ? "25%" : props.curProgress === 2 ? "50%" : props.curProgress === 3 ? "75%" : props.curProgress === 4 ? "100%" : "0%"}; 
    height:4px;
    background-color: #F25476;  
`;

interface props {
    curProgress: number;
}

export default function ProgressBar({curProgress}: props) {
    return (
        <Container>
            <Progress
            curProgress={curProgress}/>
        </Container>
    )
}