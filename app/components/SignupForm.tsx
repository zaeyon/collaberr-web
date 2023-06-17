'use client';

import {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Link from 'next/link'

import InfoInput from './InfoInput';
import InfoSelect from './InfoSelect';

interface SubmitButtonType {
    isVaildForm: boolean;
}

const Container = styled.form`
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

interface props {
    submitSignup: () => void;
    email: string;
    password: string;
    username: string;
    role: string;
    onChangeEmail: (value: string) => void;
    onChangePassword: (value: string) => void;
    onChangeUsername: (value: string) => void;
    onChangeRole: (value: string) => void;
    isExistedEmail: boolean;
    isExistedUsername: boolean;
    isInvaildEmail: boolean;
}

export default function SignupForm({submitSignup, email, password, username, role, onChangeEmail, onChangePassword, onChangeUsername, onChangeRole, isExistedEmail, isExistedUsername, isInvaildEmail}: props) {
    const [isVaildForm, setIsVaildForm] = useState(false);

    useEffect(() => {
        if(email !== "" && password !== "" && username !== "" && role !== "") setIsVaildForm(true);
        else setIsVaildForm(false);

    }, [email, password, username, role])

    return (
        <Container onSubmit={() => submitSignup()}>
            <Title>
                Sign up
            </Title>
            <Description>
            Make an account fast and simple
            </Description>
            <InfoInput
            value={email}
            onChangeInput={onChangeEmail}
            isExistedEmail={isExistedEmail}
            isInvaildEmail={isInvaildEmail}
            label={"Email"}
            placeholder={"Please enter your Email"}/>
            <InfoInput
            value={password}
            onChangeInput={onChangePassword}
            label={"Password"}
            placeholder={"Please enter Password"}/>
            <InfoInput
            value={username}
            onChangeInput={onChangeUsername}
            label={"Username"}
            placeholder={"Please enter your user name"}
            isExistedUsername={isExistedUsername}/>
            <InfoSelect
            value={role}
            onChangeSelect={onChangeRole}
            label={"Role"}
            placeholder={"Please select your Role"}
            options={[{id: 1, value: "Business"}, {id: 2, value: "Influence"}]}/>
            <Footer>
                <SubmitButton
                type={"button"}
                isVaildForm={isVaildForm}
                disabled={!isVaildForm}
                onClick={() => submitSignup()}>
                    Sign up
                </SubmitButton>
                <div>
                    <TextLink href={"/login"}>I already have and account</TextLink>
                </div>
            </Footer>
        </Container>
    )
}