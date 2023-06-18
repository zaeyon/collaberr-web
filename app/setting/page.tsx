'use client';
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {useSetRecoilState} from 'recoil';

import {userState} from '../recoil/user';
import SettingForm from "../components/SettingForm"

export default function Setting() {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [role, setRole] = useState('');
    
    const setUser = useSetRecoilState(userState);
    const router = useRouter();

    const changeUsername = (value: string) => {
        setUsername(value);
    }

    const changeFirstName = (value: string) => {
        setFirstName(value);
    }

    const changeLastName = (value: string) => {
        setLastName(value);
    }

    const changeEmail = (value: string) => {
        setEmail(value);
    }

    const changeProfileImage = (value: any) => {
        setProfileImage(value);
    }

    const changePhoneNumber = (value: string) => {
        setPhoneNumber(value);
    }

    const changeCompanyName = (value: string) => {
        setCompanyName(value);
    }

    const logout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");

        setUser({
            isLogin: false
        })

        router.push('/');
    }


    return (
        <main>
            <h1>Settings</h1>
            <SettingForm
            username={username}
            firstName={firstName}
            lastName={lastName}
            email={email}
            profileImage={profileImage}
            phoneNumber={phoneNumber}
            companyName={companyName}
            role={role}
            changeUsername={changeUsername}
            changeFirstName={changeFirstName}
            changeLastName={changeLastName}
            changeEmail={changeEmail}
            changeProfileImage={changeProfileImage}
            changePhoneNumber={changePhoneNumber}
            changeCompanyName={changeCompanyName}
            logout={logout}
            />
        </main>
    )
}