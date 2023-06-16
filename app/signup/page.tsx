'use client';
import {useState} from 'react';
import { useRouter } from 'next/navigation';
import styled from '@emotion/styled';

import SignupForm from '../components/SignupForm';

import { POST_signup } from '../api/auth';


const Container = styled.div`
    
`;
 
export default function Signup() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [role, setRole] = useState<string>("");

    const router = useRouter();

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
        const signupForm = {
            username: firstName + lastName,
            email,
            password,
            role: role === "Business" ? 'BUSINESS' : 'CREATOR',
        }

        POST_signup(signupForm)
        .then((res) => {
            console.log("signup success", res)
            alert('Sign up Success!');
            router.push('/')
        })
        .catch((err) => {
            console.log("signup failed", err); 
        })

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