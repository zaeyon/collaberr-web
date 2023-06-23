import styled from '@emotion/styled';

import InfoInput from '../InfoInput';

const Container = styled.div`
    margin-top: 24px;
`;

const SectionTitle = styled.div`
    font-family: 'Pretendard';
    font-size: 17px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: -0.015em;
    text-align: left;
`

export default function BasicForm() {
    return (
        <Container>
            <SectionTitle>
                Basics
            </SectionTitle>
            <InfoInput
            label={"Brand Name"}
            placeholder={"Enter your brand name"}
            />
            <InfoInput
            label={"Campaign name"}
            placeholder={"Enter your campaign name"}
            />
            <InfoInput
            type={"file"}
            label={"Thumbnail Image"}
            placeholder={"Select image files from your device"}
            description={"Only png, JPEG files are accepted"}
            />
        </Container>
    )
}