'use client';

import {useState} from 'react';
import styled from '@emotion/styled';
import Link from 'next/link'

import InfoInput from './InfoInput';

const Container = styled.div`
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

export default function LoginForm() {

    return (
        <Container>
            <Title>
                Login
            </Title>
            <Description>
                Please log in to use more functions
            </Description>
            <InfoInput
            label={"Email"}
            placeholder={"Please enter your Email"}/>
            <InfoInput
            label={"Password"}
            placeholder={"Please enter Password"}/>
            <Footer>
                <SubmitButton>
                    Login
                </SubmitButton>
                <div>
                    <TextLink href={""}>I’m new</TextLink>
                    <Divider>|</Divider>
                    <TextLink href={""}>Lost password</TextLink>
                </div>
            </Footer>
        </Container>
    )
}