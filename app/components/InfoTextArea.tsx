import styled from '@emotion/styled'
import React from 'react';

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


const Container = styled.div<ContainerProps>(props => ({
position: 'relative',
marginTop:  24,
display: 'flex',
flexDirection: 'column',
width: '100%'

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

const TextArea = styled.textarea`
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
resize: none;



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

interface props {
    inputRef?: any;
    type?: string;
    accept?: string;
    disabled?: boolean;
    value?: any;
    onChangeInput?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    label: string;
    description?: string;
    placeholder?: string;
}

export default function InfoTextArea({disabled = false, value, onChangeInput, label, placeholder, description}: props) {
    
    return (
        <Container
        label={label}>
            <Label>{label}</Label>
            <TextArea
            rows={3}
            disabled={disabled}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChangeInput ? onChangeInput(e) : ""}
            placeholder={placeholder}/>
            {description && (
                <Description>
                    {description}
                </Description>
            )}
        </Container>
    )
}