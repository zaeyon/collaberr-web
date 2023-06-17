'use client'
import {useState} from 'react';
import styled from '@emotion/styled';
import LoginForm from '../components/LoginForm';

import { loginType } from '../type';
import { POST_login } from '../api/auth';

const Container = styled.div`
`;

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (value: string) => {
        setEmail(value)
    }

    const onChangePassword = (value: string) => {
        setPassword(value);
    }

    const submitLogin = () => {
        const loginForm = {
            email,
            password
        }

        POST_login(loginForm)
        .then((res) => {
            console.log("login success", res);
        })
        .catch((err) => {
            console.log("login failed", err);
        })
    }

    

    return (
        <Container>
            <LoginForm
            submitLogin={submitLogin}
            email={email}
            password={password}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}/>
        </Container>
    )
} 