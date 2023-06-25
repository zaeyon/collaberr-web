import React, {forwardRef, useState} from 'react';
import styled from '@emotion/styled'
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import icon_calendar from '../assets/icons/icon_calendar.png';

interface ContainerProps {
    label: string
}

interface InputProps {
    isExistedEmail?: boolean | undefined;
    isExistedUsername?: boolean | undefined;
    isInvaildEmail?: boolean | undefined;
    isInconPassword?: boolean | undefined;
    disabled?: boolean | undefined;
}

interface FileInputProps {
    disabled: boolean | undefined;
}

const Container = styled.div<ContainerProps>(props => ({
position: 'relative',
marginTop: 24,
display: 'flex',
flexDirection: 'column',
width: props.label === 'First Name' || props.label === 'Last Name' ? '48.2%' : '100%'

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

const Input = styled.input<InputProps>`
position: absolute;
display: none;
background-color: white;
margin-top: 6px;
padding: 14px 18px;
border-radius: 8px;
color: ${(props) => props.disabled ? '#D1D7DF' : '#35424C'};
font-family: 'Pretendard';
font-size: 15px;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.015em;
text-align: left;



::placeholder {
    color: #8696AB;
    font-family: 'Pretendard';
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.015em;
    text-align: left;
}


:hover {
    border: ${(props) => props.disabled ? '1px solid #E6EAEF' : '1px solid #91C8FF'};
}

:focus  {
    outline: none;
    border: 1px solid #2E92FF;
}

border: 1px solid #E6EAEF;
`;

const DateSelectContainer = styled.div<FileInputProps>`
position: relative;
border: 1px solid #E6EAEF;
background-color: white;
margin-top: 6px;
padding: 14px 18px;
border-radius: 8px;
color: #35424C;
font-family: 'Pretendard';
font-size: 15px;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.015em;
text-align: left;
cursor: ${(props) => props.disabled ? 'default' : 'pointer'};
display: flex;
align-items: center;
`;

const Placeholder = styled.span`
margin-left: 10px;
color: #8696AB;
font-family: 'Pretendard';
font-size: 15px;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.015em;
text-align: left;
`;

const ValueSpan = styled.span`
margin-left: 10px;
color: #35424C;
font-family: 'Pretendard';
font-size: 15px;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.015em;
text-align: left;
`;




const Error = styled.div`
position: absolute;
bottom: -22px;
left: 0px;
font-family: 'Pretendard';
font-size: 15px;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.015em;
color: #F04D3E;    
`;

const Description = styled.div`
margin-top: 6px;
font-family: 'Pretendard';
font-size: 15px;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.015em;
text-align: left;
color :#ACB8C8;
`;

const Icon = styled(Image)`
    margin-right: 10px;
`;

const DateButton = styled.button`
background-color: white;
border: none;  
color: var(--secondary-gray-gray-500, #8696AB);
font-size: 15px;
font-family: 'Pretendard';
line-height: 160%;
font-weight: 400;
letter-spacing: -0.225px;
`;

const DateDivider = styled.span`
margin-left: 5px;
margin-right: 5px;
color: var(--secondary-gray-gray-500, #8696AB);
font-size: 15px;
font-family: 'Pretendard';
line-height: 160%;
font-weight: 400;
letter-spacing: -0.225px;
`;

interface props {
    disabled?: boolean;
    value?: any;
    label: string;
    placeholder?: string;
    description?: string;
    startDate: any;
    endDate: any;
    changeStartDate: any;
    changeEndDate: any;
}

export default function PeriodPicker({disabled = false, value , label, placeholder, description, startDate, endDate, changeStartDate, changeEndDate}: props) {
   

    // eslint-disable-next-line react/display-name
    const CustomDatePicker = forwardRef(({value, onClick}: any, ref) => (
        <DateButton className="example-custom-input" onClick={onClick}>
            {value}
        </DateButton>
    )); 

    return (
        <Container
        label={label}>
            <Label>{label}</Label>
            <DateSelectContainer
            disabled={disabled}>
                <Icon
                width={24}
                height={24}
                src={icon_calendar}
                alt={"icon_clip"}
                />
                <DatePicker
                dateFormat="yyyy-MM-dd"
                selected={new Date(startDate)}
                onChange={(date) => changeStartDate(date)}
                customInput={<CustomDatePicker/>}
                />
                <DateDivider>
                {"~"}
                </DateDivider>
                <DatePicker
                dateFormat="yyyy-MM-dd"
                selected={new Date(endDate)}
                onChange={(date) => changeEndDate(date)}
                customInput={<CustomDatePicker/>}
                />
            </DateSelectContainer>
            {description && (
                <Description>
                    {description}
                </Description>
            )}
        </Container>
    )
}