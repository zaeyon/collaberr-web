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
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [username, setUserName] = useState<string>("");
    const [role, setRole] = useState<string>("");
    const [isExistedEmail, setIsExistedEmail] = useState(false);
    const [isExistedUsername, setIsExistedUsername] = useState(false);
    const [isInvaildEmail, setisInvaildEmail] = useState(false);
    const [isInconPassword, setIsInconPassword] = useState(false)

    const router = useRouter();

    const onChangeEmail = (value: string) => {
        setEmail(value);
        if(isExistedEmail) setIsExistedEmail(false);
        if(isInvaildEmail) setisInvaildEmail(false);
    }

    const onChangePassword = (value: string) => {
        if(isInconPassword) setIsInconPassword(false);
        setPassword(value);
    }

    const onChangePasswordConfirm = (value: string) => {
        if(isInconPassword) setIsInconPassword(false);
        setPasswordConfirm(value);
    }

    const onChangeUsername = (value: string) => {
        setUserName(value);
        if(isExistedUsername) setIsExistedUsername(false);
    }

    const onChangeRole = (value: string) => {
        setRole(value);
    }

    const submitSignup = () => {
        if(password === passwordConfirm) {
            const signupType = {
                username,
                email,
                password,
                role: role === "Business" ? 'BUSINESS' : 'CREATOR',
            }
    
            POST_signup(signupType)
            .then((res) => {
                console.log("signup success", res)
                alert('Sign up Success!');
                router.push('/')
            })
            .catch((err) => {
                console.log("signup failed", err); 
                if(err.response.data.email?.[0] === "Account with this email already exists.") setIsExistedEmail(true)
                if(err.response.data.email?.[0] === "Enter a valid email address.") setisInvaildEmail(true);
                if(err.response.data.username?.[0] === "Account with this username already exists.") setIsExistedUsername(true);
            })
        } else {
            setIsInconPassword(true)
        }
        
        

    }
    

    return (
        <Container>
            <SignupForm
            submitSignup={submitSignup}
            email={email}
            password={password}
            passwordConfirm={passwordConfirm}
            username={username}
            role={role}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            onChangePasswordConfirm={onChangePasswordConfirm}
            onChangeUsername={onChangeUsername}
            onChangeRole={onChangeRole}
            isExistedEmail={isExistedEmail}
            isExistedUsername={isExistedUsername}
            isInvaildEmail={isInvaildEmail}
            isInconPassword={isInconPassword}/>
        </Container>
    )
}