import styled from '@emotion/styled';

import InfoInput from '../InfoInput';
import InfoSelect from '../InfoSelect';
import RadioButton from '../RadioButton';
import PeriodPicker from '../PeriodPicker';
import InfoTextArea from '../InfoTextArea';

const CATEGORY_DATA = [
    {id: 1, value: 'Fashion'},
    {id: 2, value: 'Beauty'},
    {id: 3, value: 'Food'},
    {id: 4, value: 'Travel'},
    {id: 5, value: 'Beverages'},
]

const PERIOD_DATA = [
    '3 months',
    '6 months',
    'Custom'
]

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
    recruitStartDate: any;
    recruitEndDate: any;
    startDate: any;
    endDate: any;
    period: string;
    changeRecruitStartDate: (value: any) => void;
    changeRecruitEndDate: (value: any) => void;
    changeStartDate: (value: any) => void;
    changeEndDate: (value: any) => void;
    changePeriod: (value: string) => void;
}


export default function DatesForm({recruitStartDate, recruitEndDate, startDate, endDate, period, changeRecruitStartDate, changeRecruitEndDate, changeStartDate, changeEndDate, changePeriod}: props) {
    return (
        <Container>
            <SectionTitle>
                Dates
            </SectionTitle>
            <PeriodPicker
            type={"day"}
            startDate={recruitEndDate}
            changeStartDate={changeRecruitEndDate}
            label={"Creator recruit due date"}
            placeholder={"Select end date"}
            />
            <PeriodPicker
            type={"day"}
            startDate={startDate}
            changeStartDate={changeStartDate}
            label={"Campaign start date"}
            placeholder={"Select start date"}
            />
            <RadioButton
            selectOption={changePeriod}
            label={"Campaign end date"}
            options={PERIOD_DATA}
            value={period}
            />
            <PeriodPicker
            type={"day"}
            startDate={endDate}
            changeStartDate={changeEndDate}
            placeholder={"Select end date"}
            disabled={period !== "Custom" ? true : false}
            />
        </Container>
    )
}