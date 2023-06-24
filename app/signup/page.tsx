'use client';
import {useState} from 'react';
import { useRouter } from 'next/navigation';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';

import SignupForm from '../components/SignupForm';

import { POST_signup } from '../api/auth';
import {userState} from '../recoil/user';


const Container = styled.div`
padding-bottom: 50px;
`;
 
export default function Signup() {
    const [user, setUser] = useRecoilState(userState);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [username, setUserName] = useState<string>("");
    const [role, setRole] = useState<string>("default");
    const [isExistedEmail, setIsExistedEmail] = useState(false);
    const [isExistedUsername, setIsExistedUsername] = useState(false);
    const [isInvaildEmail, setisInvaildEmail] = useState(false);
    const [isInconPassword, setIsInconPassword] = useState(false)

    const router = useRouter();

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if(isExistedEmail) setIsExistedEmail(false);
        if(isInvaildEmail) setisInvaildEmail(false);
    }

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(isInconPassword) setIsInconPassword(false);
        setPassword(e.target.value);
    }

    const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(isInconPassword) setIsInconPassword(false);
        setPasswordConfirm(e.target.value);
    }

    const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
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
                password_confirm: passwordConfirm,
                role: role === "Business" ? 'BUSINESS' : 'CREATOR',
            }
    
            POST_signup(signupType)
            .then((res) => {
                console.log("signup success", res)
                alert('Sign up Success!');
                // const currentUser = {
                //     isLogin: true,
                //     email: res.data.email,
                //     username: res.data.username,
                //     firstName: res.data.first_name,
                //     lastName: res.data.last_name,
                // }

                // localStorage.setItem("current_user", JSON.stringify(currentUser));
                // setUser(currentUser)
                router.push('/login');
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