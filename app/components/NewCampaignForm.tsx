import styled from '@emotion/styled';

const Container = styled.div`
    width: 30vw;
    position: fixed;
    top: 64px;
    right: 0px;
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

export default function NewCamapignForm() {
    return (
        <Container>
            <Title>
            New Campaign
            </Title>

        </Container>
    )
}