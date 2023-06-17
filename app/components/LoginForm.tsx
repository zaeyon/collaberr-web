'use client';

import {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Link from 'next/link'

import InfoInput from './InfoInput';
import { loginType } from '../type';

interface SubmitButtonType {
    isVaildForm: boolean;
}

const Form = styled.form`
width: 600px;
margin-top: 48px;
padding: 0px 40px;
background-color: white;
`;

const Title = styled.div`
font-family: 'Pretendard';
font-size: 40px;
font-weight: 700;
line-height: 52px;
letter-spacing: -0.015em;
text-align: left;
`;

const Description = styled.div`
margin-top: 8px;
font-family: 'Pretendard';
font-size: 17px;
font-weight: 400;
color: #536878;
`;

const Footer = styled.div`
display: flex;
flex-direction: row;
margin-top: 24px;
align-items: center;
justify-content: space-between;
`;

const SubmitButton = styled.button<SubmitButtonType>`
padding: 12px 20px;
border-radius: 8px;
border: none;
font-family: 'Pretendard';
font-size: 15px;
font-weight: 500;
line-height: 24px;
letter-spacing: -0.015em;
text-align: left;
background-color:${(props) => props.isVaildForm ? '#3183F6' : '#F1F4F7'};
color:${(props) => props.isVaildForm ? '#F7F9FB' : '#242D35'};
cursor: ${(props) => props.isVaildForm ? 'pointer' : 'default'};
`;

const TextLink = styled(Link)`
font-family: 'Pretendard';
font-size: 15px;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.015em;
text-align: left;
color: #8696AB;
text-decoration : underline;
text-underline-offset : 3px;
text-decoration-color: #8696AB;
`

const Divider = styled.span`
margin-left: 12px;
margin-right: 12px;
font-family: 'Pretendard';
font-size: 15px;
font-weight: 300;
line-height: 24px;
letter-spacing: -0.015em;
text-align: left;
color: #D1D7DF;
`

interface props {
    submitLogin: () => void;
    email: string;
    password: string;
    onChangeEmail: (value: string) => void;
    onChangePassword: (value: string) => void;
}

export default function LoginForm({submitLogin, email, password, onChangeEmail, onChangePassword}: props) {
    const [isVaildForm, setIsVaildForm] = useState(false); 

    useEffect(() => {
        if(email !== "" && password !== "") setIsVaildForm(true);

    }, [email, password])


    return (
        <Form
        onSubmit={() => submitLogin()}>
            <Title>
                Login
            </Title>
            <Description>
                Please log in to use more functions
            </Description>
            <InfoInput
            value={email}
            onChangeInput={onChangeEmail}
            label={"Email"}
            placeholder={"Please enter your Email"}/>
            <InfoInput
            value={password}
            onChangeInput={onChangePassword}
            label={"Password"}
            placeholder={"Please enter Password"}/>
            <Footer>
                <SubmitButton
                type={"button"}
                isVaildForm={isVaildForm}
                disabled={!isVaildForm}
                onClick={() => submitLogin()}>
                    Login
                </SubmitButton>
                <div>
                    <TextLink href={"/signup"}>I’m new</TextLink>
                    <Divider>|</Divider>
                    <TextLink href={"/passwordReset"}>Lost password</TextLink>
                </div>
            </Footer>
        </Form>
    )
}