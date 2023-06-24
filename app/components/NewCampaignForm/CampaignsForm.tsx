import styled from '@emotion/styled';

import InfoInput from '../InfoInput';
import InfoSelect from '../InfoSelect';
import RadioButton from '../RadioButton';
import PeriodPicker from '../PeriodPicker';
import InfoTextArea from '../InfoTextArea';

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

interface props {
    category: string;
    platform: string;
    date: string;
    description: string;
    changeCategory: (value: string) => void;
    changePlatform: (value: string) => void;
    changeDate: (value: any) => void;
    changeDescription: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; 
}


export default function CampaignsForm({category, platform, date, description, changeCategory, changePlatform, changeDate, changeDescription}: props) {
    return (
        <Container>
            <SectionTitle>
                Campaigns
            </SectionTitle>
            <InfoSelect
            options={[{id: 1, value: "clothes"}, {id: 2, value: "perfume"}]}
            onChangeSelect={changeCategory}
            value={category}
            label={"Campaign Category"}
            placeholder={"Choose campaign category"}
            />
            <RadioButton
            selectOption={changePlatform}
            label={"Campaign Platform"}
            options={["Youtube", "Instagram", "TikTok"]}
            value={platform}
            />
            <PeriodPicker
            label={"Campaign due date"}
            placeholder={"2023"}
            />
            <InfoTextArea
            label={"Campaign description"}
            value={description}
            onChangeInput={changeDescription}
            />
        </Container>
    )
}