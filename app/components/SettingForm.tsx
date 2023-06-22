'use client';
import styled from '@emotion/styled';
import {useState, useRef} from 'react';

import InfoInput from './InfoInput';
import InfoSelect from './InfoSelect';
import Button from './Button';

const Container = styled.div`
width: 600px;
`

const Header = styled.div`
margin-top: 56px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Footer = styled.div`
margin-top: 32px;
`;

interface props {
    disabled: boolean;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    profileImageFile: any;
    phoneNumber: string;
    companyName: string;
    role: string;
    submitEdit: () => void;
    clickEdit: () => void;
    changeUsername: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeFirstName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeLastName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeProfileImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changePhoneNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeCompanyName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    logout: () => void;
}

export default function SettingForm({disabled, username, firstName, lastName, email, profileImageFile, phoneNumber, companyName, role,submitEdit,clickEdit, changeUsername, changeFirstName, changeLastName, changeEmail, changeProfileImage, changePhoneNumber, changeCompanyName, logout}: props) {

    const profileImageInputRef = useRef<HTMLInputElement>();

    const clickProfileImageInput = () => {
        profileImageInputRef.current?.click();
    }
    

    return (
        <Container>
            <Header>
            <h2>Basic Information</h2>
            {!disabled && (
                <Button
                onClick={submitEdit}
                label="Save"
                size="xsmall"
                style="primary"
                state="default"/>
            )}
            {disabled && (
                <Button
                onClick={clickEdit}
                label="Edit"
                size="xsmall"
                style="tertiery"
                state="default"/>
            )}
            
            </Header>
            <InfoInput
            disabled={disabled}
            value={username}
            label={"User name"}
            onChangeInput={changeUsername}
            />
            <div
            style={{display: 'flex', justifyContent: 'space-between'}}>
            <InfoInput
            disabled={disabled}
            value={firstName}
            label={"First Name"}
            onChangeInput={changeFirstName}
            />
            <InfoInput
            disabled={disabled}
            value={lastName}
            label={"Last Name"}
            onChangeInput={changeLastName}
            />
            </div>
            <InfoInput
            disabled={true}
            value={email}
            label={"Email"}
            onChangeInput={changeEmail}
            />
            <InfoInput
            clickFileInput={clickProfileImageInput}
            inputRef={profileImageInputRef}
            disabled={disabled}
            accept={"image/*"}
            type={"file"}
            value={profileImageFile}
            label={"Profile image"}
            onChangeInput={changeProfileImage}
            description={"Please upload PNG, JPEG files only"}
            />
            <Header>
            <h2>Additional Information</h2>
            <Button
            label="Edit"
            size="xsmall"
            style="tertiery"
            state="default"
            />
            </Header>
            <InfoInput
            disabled={disabled}
            value={phoneNumber}
            label={"Phone number"}
            onChangeInput={changePhoneNumber}
            />
            <InfoInput
            disabled={disabled}
            value={companyName}
            label={"Company name"}
            onChangeInput={changeCompanyName}
            />
            <InfoSelect
            value={role}
            label={'Role'}
            />
            <Footer>
                <Button
                label="Log out"
                style="danger"
                size="medium"
                state="default"
                onClick={logout}
                />
            </Footer>
        </Container>
    )
}