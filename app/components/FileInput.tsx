import React, {useRef} from 'react';
import styled from '@emotion/styled'
import Image from 'next/image';

import icon_clip from '../assets/icons/icon_clip.png';

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
marginTop: props.label === 'Email' ? 32 : props.label === 'Brand Name' ? 20 : 24,
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

const FileInputContainer = styled.div<FileInputProps>`
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

const FileInputPlaceholder = styled.span`
margin-left: 10px;
color: #8696AB;
font-family: 'Pretendard';
font-size: 15px;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.015em;
text-align: left;
`;

const FileNameSpan = styled.span`
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

const ClipIcon = styled(Image)`
    
`;

interface props {
    accept?: string;
    disabled?: boolean;
    value?: any;
    label: string;
    placeholder?: string;
    description?: string;
    changeFile: (file: any, src: any) => void;
}

export default function FileInput({accept = "", disabled = false, value , label, placeholder, description, changeFile}: props) {

    const inputRef = useRef<HTMLInputElement>(null);

    const clickFileInput = () => {
        inputRef.current?.click();
    }

    const changeFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!e.target.files) {
            return
        }

        if(e.target.files[0]) {
            
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);

            return new Promise<void>((resolve) => {
                reader.onload = () => {
                    changeFile(e.target.files?.[0], reader.result);
                    resolve();
    
                }
            })
        }
    }
    
    return (
        <Container
        label={label}>
            <Label>{label}</Label>
            <FileInputContainer
            onClick={() => clickFileInput()}
            disabled={disabled}>
                <ClipIcon
                width={24}
                height={24}
                src={icon_clip}
                alt={"icon_clip"}
                />
                {!value && (
                    <FileInputPlaceholder>
                    {placeholder}
                    </FileInputPlaceholder>
                )}
                {value && (
                    <FileNameSpan>
                    {value.name}
                    </FileNameSpan>
                )}
                <Input
                ref={inputRef}
                accept={accept}
                disabled={disabled}
                type={"file"} 
                onChange={(e) => changeFileInput(e)}
                />
            </FileInputContainer>
            {description && (
                <Description>
                    {description}
                </Description>
            )}
        </Container>
    )
}