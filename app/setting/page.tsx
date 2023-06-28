'use client';
import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {useSetRecoilState} from 'recoil';
import { useRecoilState } from 'recoil';

import {userState} from '../recoil/user';
import { POST_logout } from '../api/auth';
import { PATCH_editProfile } from '../api/user';
import SettingForm from "../components/SettingForm"
import { userType } from '../type';
import { deleteCookie } from '../lib/cookie';

export default function Setting() {
    const [user, setUser] = useRecoilState(userState);
    const [username, setUsername] = useState(user.username);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [profileImageFile, setProfileImageFile] = useState<any>();
    
    const [phoneNumber, setPhoneNumber] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [role, setRole] = useState(user.role === 'BUSINESS' ? 'Business' : 'influence');
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if(localStorage.getItem("current_user")) {
          const currentUser = JSON.parse(localStorage.getItem("current_user") || '{}')
          setUsername(currentUser.username);
          setFirstName(currentUser.firstName);
          setLastName(currentUser.lastName);
          setEmail(currentUser.email);
        } else {
          setUser({
            isLogin: false,
            email: "",
            username: "",
            firstName: "",
            lastName: "",
            role: "",
          })
        }
      }, [])
    
    const router = useRouter();

    const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const changeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    }

    const changeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const changeProfileImage = (file: any, src: any) => {
        setProfileImageFile(file);
    }

    const changePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    }

    const changeCompanyName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCompanyName(e.target.value);
    }

    const submitEdit = () => {
        setDisabled(true);

        let editedUser: any = {};

        const accountId = localStorage.getItem("account_id");
        const accessToken = localStorage.getItem("access_token");

        if(user.username !== username) editedUser["username"] = username;
        if(user.firstName !== firstName) editedUser["first_name"] = firstName;
        if(user.lastName !== lastName) editedUser["last_name"] = lastName;

        PATCH_editProfile(accountId, accessToken, editedUser)
        .then((res) => {
            console.log("PATCH_editProfile success", res);
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
            console.log("PATCH_editProfile err", err);
        })


    }

    const clickEdit = () => {
        setDisabled(false);
    }

    const logout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("current_user");
        localStorage.removeItem("account_id");

        setUser({
            isLogin: false,
            email: "",
            username: "",
            firstName: "",
            lastName: "",
            role: "",
        })

        router.push('/');

        deleteCookie("csrftoken");

        POST_logout()
        .then((res) => {
            console.log("POST_logout success", res);
        })
        .catch((err) => {
            console.log("POST_logout fail", err);
        })


    }


    return (
        <main>
            <h1>Settings</h1>
            <SettingForm
            clickEdit={clickEdit}
            submitEdit={submitEdit}
            disabled={disabled}
            username={username}
            firstName={firstName}
            lastName={lastName}
            email={email}
            profileImageFile={profileImageFile}
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