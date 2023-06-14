'use client';

import {useState} from 'react';
import styled from '@emotion/styled';
import Link from 'next/link'

import InfoInput from './InfoInput';
import InfoSelect from './InfoSelect';

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

const SubmitButton = styled.div`
padding: 12px 20px;
background-color: #3183F6;
border-radius: 8px;
font-family: 'Pretendard';
font-size: 15px;
font-weight: 500;
line-height: 24px;
letter-spacing: -0.015em;
text-align: left;
color: #F7F9FB;
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
    onSubmitForm: () => void;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
    onChangeEmail: (value: string) => void;
    onChangePassword: (value: string) => void;
    onChangeFirstName: (value: string) => void;
    onChangeLastName: (value: string) => void;
    onChangeRole: (value: string) => void;
}

export default function SignupForm({onSubmitForm, email, password, firstName, lastName, role, onChangeEmail, onChangePassword, onChangeFirstName, onChangeLastName, onChangeRole}: props) {

    return (
        <Container onSubmit={() => onSubmitForm()}>
            <Title>
                Sign up
            </Title>
            <Description>
            Make an account fast and simple
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
            <div
            style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <InfoInput
                value={firstName}
                onChangeInput={onChangeFirstName}
                label={"First Name"}
                placeholder={"Please enter your first name"}/>
                <InfoInput
                value={lastName}
                onChangeInput={onChangeLastName}
                label={"Last Name"}
                placeholder={"Please enter your last name"}/>
            </div>
            <InfoSelect
            value={role}
            onChangeSelect={onChangeRole}
            label={"Role"}
            placeholder={"Please select your Role"}
            options={[{id: 1, value: "Business"}, {id: 2, value: "Influence"}]}/>
            <Footer>
                <SubmitButton>
                    Sign up
                </SubmitButton>
                <div>
                    <TextLink href={""}>I already have and account</TextLink>
                </div>
            </Footer>
        </Container>
    )
}