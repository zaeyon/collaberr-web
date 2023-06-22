'use client';
import React, {useState} from 'react';
import styled from '@emotion/styled';

import PasswordResetForm from '../components/PasswordResetForm';

const Container = styled.div`
    
`;

export default function PasswordReset() {
    const [email, setEmail] = useState("");

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const submitEmailVerify = () => {

    }

    return (
        <Container>
            <PasswordResetForm
            submitEmailVerify={submitEmailVerify}
            onChangeEmail={onChangeEmail}
            email={email}/>
        </Container>
    )
}