'use client';
import {useState} from 'react';
import styled from '@emotion/styled';

import SignupForm from '../components/SignupForm';

const Container = styled.div`
    
`;
 
export default function Signup() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [role, setRole] = useState<string>("");

    const onChangeEmail = (value: string) => {
        setEmail(value);
    }

    const onChangePassword = (value: string) => {
        setPassword(value);
    }

    const onChangeFirstName = (value: string) => {
        setFirstName(value);
    }

    const onChangeLastName = (value: string) => {
        setLastName(value); 
    }

    const onChangeRole = (value: string) => {
        setRole(value);
    }

    const onSubmitForm = () => {

    }
    

    return (
        <Container>
            <SignupForm
            onSubmitForm={onSubmitForm}
            email={email}
            password={password}
            firstName={firstName}
            lastName={lastName}
            role={role}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            onChangeFirstName={onChangeFirstName}
            onChangeLastName={onChangeLastName}
            onChangeRole={onChangeRole}/>
        </Container>
    )
}