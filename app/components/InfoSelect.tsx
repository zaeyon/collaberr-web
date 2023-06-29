import React, {useState, useRef, ReactElement, LegacyRef} from 'react'
import styled from '@emotion/styled'
import Image from 'next/image';

import icon_down from '../assets/icons/icon_down.png'

interface ContainerProps {
    label: string
}

const Container = styled.div<ContainerProps>(props => ({
    marginTop: props.label === 'Email' ? 32 : props.label === 'Campaign Category' ? 20 : 24 ,
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

:hover {
    border: 1px solid #ACB8C8;
}

:focus  {
    outline: none;
    border: 1px solid #536878;
}

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
pointer-events: none;




`;

const SelectContainer = styled.div`
margin-top: 6px;
position: relative;
`;

const DownIcon = styled(Image)`
position: absolute;
right: 18px;
top: 14px;
pointer-events: none;
`


interface roleObj {
    id: number;
    value: string;
}

interface props {
    value: string;
    label: string;
    placeholder?: string;
    options?: any [];
    onChangeSelect?: (value: string) => void;
    disabled? : boolean;
}

export default function InfoSelect({value, label, placeholder, options, onChangeSelect, disabled=false}: props) {

    const selectRef = useRef<HTMLSelectElement>(null);

    
    
    return (
        <Container
        label={label}>
            <Label>{label}</Label>
            <SelectContainer>
                {value === "default" && (
                    <SelectPlaceholder>{placeholder}</SelectPlaceholder>
                )}
            <Select 
            disabled={disabled}
            ref={selectRef}
            value={value}
            onChange={(e) => onChangeSelect ? onChangeSelect(e.target.value) : ""}>
                <option disabled hidden value={"default"}></option>
                {options?.map((item) => <option key={item.id} value={item.value}>{item.value}</option>)}
            </Select>
            <DownIcon
            alt={"down"}
            width={24}
            height={24}
            src={icon_down}/>
            </SelectContainer>
        </Container>
    )
}