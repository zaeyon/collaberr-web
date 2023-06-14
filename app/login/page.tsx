'use client'
import {useState} from 'react';
import styled from '@emotion/styled';
import LoginForm from '../components/LoginForm';

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

    return (
        <Container>
            <LoginForm
            email={email}
            password={password}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}/>
        </Container>
    )
} 