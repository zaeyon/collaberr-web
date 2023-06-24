import React, {useState} from 'react'
import styled from '@emotion/styled'
import Image from 'next/image';


interface ContainerProps {
    label?: string
}

interface RadioButtonProps {
    readonly selected: boolean;
}

const Container = styled.div<ContainerProps>(props => ({
    marginTop: 24 ,
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

const OptionListDiv = styled.div`
    margin-top: 8px;
    justify-content: start;
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 40%;
    row-gap: 8px;
`;

const OptionItem = styled.span` 
    justify-content: flex-start;
    display: flex;
    align-items: center;
    color: var(--secondary-gray-gray-600, #536878);
    /* 본문 p/Regular */
    font-size: 15px;
    font-family: Pretendard;
    line-height: 160%;
    letter-spacing: -0.225px;
    cursor: pointer;
`

const RadioButtonCircle = styled.div<RadioButtonProps>`
    width: 20px;
    height: 20px;
    border-radius: 100px;
    border: ${(props) => props.selected ? "6px solid #2E92FF" : "1.5px solid #D1D7DF"};
    margin-right: 6px;
`;


interface props {
    label: string;
    options: string[];
    value: string;
    selectOption: (value: string) => void;
}

export default function RadioButton({label, options, value, selectOption}: props) {
    return (
        <Container>
            <Label>
                {label}
            </Label>
            <OptionListDiv>
                {options.map((option: string) => {
                    return (
                        <OptionItem
                        onClick={() => selectOption(option)}
                        key={option}>
                            <RadioButtonCircle
                            selected={value === option ? true : false}/>
                            {option}
                        </OptionItem>
                    )
                })}
            </OptionListDiv>
        </Container>
    )
}