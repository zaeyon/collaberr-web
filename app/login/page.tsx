'use client'
import React, {useState} from 'react';
import {useRouter} from 'next/navigation';
import styled from '@emotion/styled';
import {useSetRecoilState} from 'recoil';

import LoginForm from '../components/LoginForm';
import { loginType } from '../type';
import { POST_login } from '../api/auth';
import { GET_userInfo } from '../api/user';
import { userState } from '../recoil/user';
import { getCookie } from '../lib/cookie';

const Container = styled.div`
`;

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const setUser = useSetRecoilState(userState);
    const router = useRouter();

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const submitLogin = () => {
        const loginForm = {
            email,
            password
        }

        POST_login(loginForm)
        .then((res) => {
            console.log("login success", res);

            const accountId = getCookie("account_id");

            GET_userInfo(accountId)
            .then((res) => {
                console.log("GET_userInfo success", res)

                const currentUser = {
                    isLogin: true,
                    email: res.data.email,
                    username: res.data.username,
                    firstName: res.data.first_name,
                    lastName: res.data.last_name,
                    role: res.data.role,
                }

                localStorage.setItem("current_user", JSON.stringify(currentUser));
                setUser(currentUser)
            })
            .catch((err) => {
                console.log("GET_userInfo failed", err);
            })


            router.push("/");
        })
        .catch((err) => {
            console.log("login failed", err);
            alert("failed to login");
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