import styled from '@emotion/styled'
import { relative } from 'node:path/win32';
import { MutableRefObject } from 'react';

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
position: ${(props) => props.type === "file" ? "absolute" : "static"};
display: ${(props) => props.type === "file" ? "none" : "block"};
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
    border: ${(props) => (props.isExistedEmail || props.isExistedUsername || props.isInvaildEmail || props.isInconPassword) ? '1px solid #F04D3E' : props.disabled ? '1px solid #E6EAEF' : '1px solid #91C8FF'};
}

:focus  {
    outline: none;
    border: ${(props) => (props.isExistedEmail || props.isExistedUsername || props.isInvaildEmail || props.isInconPassword) ? '1px solid #F04D3E' : '1px solid #2E92FF'};
}

border: ${(props) =>( props.isExistedEmail || props.isExistedUsername || props.isInvaildEmail || props.isInconPassword) ? '1px solid #F04D3E' : '1px solid #E6EAEF'};
`;

const FileInputContainer = styled.div<FileInputProps>`
position: relative;
border: 1px solid #E6EAEF;
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
cursor: ${(props) => props.disabled ? 'default' : 'pointer'};
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
    onChangeInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    placeholder?: string;
    isExistedEmail?: boolean;
    isExistedUsername?: boolean;
    isInvaildEmail?: boolean;
    isInconPassword?: boolean;
    description?: string;
    clickFileInput?: () => void;
}

export default function InfoInput({inputRef, type = "text",accept = "", disabled = false, value, onChangeInput, label, placeholder, isExistedEmail, isExistedUsername, isInvaildEmail, description, isInconPassword, clickFileInput}: props) {
    
    return (
        <Container
        label={label}>
            <Label>{label}</Label>
            {type === "file" && (
            <FileInputContainer
            onClick={() => clickFileInput ? clickFileInput() : ""}
            disabled={disabled}>
                {!value && (
                    "Upload files"
                )}
                {value && (
                    value.name
                )}
                <Input
                ref={inputRef}
                accept={accept}
                disabled={disabled}
                type={type} 
                onChange={(e) => onChangeInput ? onChangeInput(e) : ""}
                />
            </FileInputContainer>
            )}
            {type !== "file" && (
            <Input
            accept={accept}
            disabled={disabled}
            type={type} 
            value={value}
            onChange={(e) => onChangeInput ? onChangeInput(e) : ""}
            placeholder={placeholder}
            isExistedUsername={isExistedUsername}
            isExistedEmail={isExistedEmail}
            isInvaildEmail={isInvaildEmail}
            isInconPassword={isInconPassword}/>
            )}
            {isExistedEmail && (
                <Error>
                Account with this email already exists.
                </Error>
            )}
            {isExistedUsername && (
                <Error>
                Account with this username already exists.
                </Error>
            )}
            {isInvaildEmail && (
                <Error>
                Enter a valid email address.
                </Error>
            )}
            {isInconPassword && (
                <Error>
                Passwords do not match
                </Error>
            )}
            {description && (
                <Description>
                    {description}
                </Description>
            )}
        </Container>
    )
}