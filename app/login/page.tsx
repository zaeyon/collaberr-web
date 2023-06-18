'use client'
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import styled from '@emotion/styled';
import {useSetRecoilState} from 'recoil';

import LoginForm from '../components/LoginForm';
import { loginType } from '../type';
import { POST_login } from '../api/auth';
import { userState } from '../recoil/user';

const Container = styled.div`
`;

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const setUser = useSetRecoilState(userState);
    const router = useRouter();

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
            localStorage.setItem('access_token', res.data.access);
            localStorage.setItem('refresh_token', res.data.refresh);

            setUser({
                isLogin: true
            })

            router.push("/");
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