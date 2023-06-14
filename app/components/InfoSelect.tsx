import {useState} from 'react'
import styled from '@emotion/styled'

interface ContainerProps {
    label: string
}

const Container = styled.div<ContainerProps>(props => ({
    marginTop: props.label === 'Email' ? 32 : 24,
    display: 'flex',
    flexDirection: 'column',
})

);

const Label = styled.span`
font-family: 'Pretendard';
font-size: 15px;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.015em;
text-align: left;
color: #35424C;
`;

const Select = styled.select`
width: 100%;
padding: 14px 18px;
border-radius: 8px;
border: 1px solid #E6EAEF;
color: #35424C;
font-family: 'Pretendard';

-webkit-appearance:none; /* 크롬 화살표 없애기 */
    -moz-appearance:none; /* 파이어폭스 화살표 없애기 */
    appearance:none; /* 화살표 없애기 */
`;

const SelectPlaceholder = styled.span`
position: absolute;
left: 18px;
top: 14px;
    color: #8696AB;
    font-family: 'Pretendard';
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.015em;
    text-align: left;
}
`;

const SelectContainer = styled.div`
margin-top: 6px;
position: relative;
`;

interface roleObj {
    id: number;
    value: string;
}

interface props {
    label: string;
    placeholder: string;
    options: roleObj []
}

export default function InfoSelect({label, placeholder, options}: props) {
    
    return (
        <Container
        label={label}>
            <Label>{label}</Label>
            <SelectContainer>
                <SelectPlaceholder>{placeholder}</SelectPlaceholder>
            <Select defaultValue={"default"}>
                <option disabled hidden value={"default"}></option>
                {options.map((item) => <option key={item.id} value={item.value}>{item.value}</option>)}
            </Select>
            </SelectContainer>
        </Container>
    )
}