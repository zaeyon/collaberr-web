import React, {forwardRef, useState} from 'react';
import styled from '@emotion/styled'
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import icon_calendar from '../assets/icons/icon_calendar.png';

interface ContainerProps {
    label?: string
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

interface DateButtonProps {
    readonly disabled: boolean;
}

interface IconProps {
    readonly disabled: boolean;
}

const Container = styled.div<ContainerProps>(props => ({
position: 'relative',
display: 'flex',
flexDirection: 'column',
width: props.label === 'First Name' || props.label === 'Last Name' ? '48.2%' : '100%'

})

);

const Label = styled.div`
margin-top: 24px;
font-family: 'Pretendard';
font-size: 15px;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.015em;
text-align: left;
color: #35424C;
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
cursor: ${(props) => props.disabled ? 'default' : 'default'};
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

const Icon = styled(Image)<IconProps>`
    margin-right: 10px;
    opacity: ${(props) => props.disabled ? 0.4 : 1};
`;

const DateButton = styled.button<DateButtonProps>`
background-color: white;
border: none;  
color:  ${(props) => props.disabled ? "#D1D7DF" : "#8696AB"};
font-size: 15px;
font-family: 'Pretendard';
line-height: 160%;
font-weight: 400;
letter-spacing: -0.225px;
cursor: ${(props) => props.disabled ? "default" : "pointer"};
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
    type?: string;
    disabled?: boolean;
    value?: any;
    label?: string;
    placeholder?: string;
    description?: string;
    startDate: any;
    endDate?: any;
    changeStartDate: any;
    changeEndDate?: any;
}

export default function PeriodPicker({type = "period", disabled = false, value , label, placeholder, description, startDate, endDate, changeStartDate, changeEndDate}: props) {
   

    // eslint-disable-next-line react/display-name
    const CustomDatePicker = forwardRef(({value, onClick, placeholder}: any, ref) => (
        <DateButton 
        disabled={disabled}
        className="example-custom-input"
        onClick={onClick}>
            {value ? value : placeholder}
        </DateButton>
    )); 

    return (
        <Container
        label={label}>
            {label && (
            <Label
            style={label === "Creator recruit period" ? {marginTop: 20} : {marginTop: 24}}>{label}</Label>
            )}
            <DateSelectContainer
            disabled={disabled}>
                <Icon
                disabled={disabled}
                width={24}
                height={24}
                src={icon_calendar}
                alt={"icon_clip"}
                />
                <DatePicker
                disabled={disabled}
                placeholderText={placeholder ? placeholder : 'Start Date'}
                selected={startDate}
                dateFormat="yyyy-MM-dd"
                onChange={(date) => changeStartDate(date)}
                customInput={<CustomDatePicker/>}
                />
                {type === "period" && (
                <DateDivider>
                {"~"}
                </DateDivider>
                )}
                {type === "period" && (
                <DatePicker
                placeholderText='End date'
                dateFormat="yyyy-MM-dd"
                selected={endDate}
                onChange={(date) => changeEndDate(date)}
                customInput={<CustomDatePicker/>}
                />
                )}
            </DateSelectContainer>
            {description && (
                <Description>
                    {description}
                </Description>
            )}
        </Container>
    )
}