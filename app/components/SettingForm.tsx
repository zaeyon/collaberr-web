'use client';
import styled from '@emotion/styled';
import React, {useState, useRef} from 'react';

import InfoInput from './InfoInput';
import FileInput from './FileInput';
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
    channelId: string;
    channelUrl: string;
    submitEdit: () => void;
    clickEdit: () => void;
    changeUsername: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeFirstName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeLastName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeProfileImage: (file: any, src: any) => void;
    changePhoneNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeCompanyName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeChannelId: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeChannelUrl: (e: React.ChangeEvent<HTMLInputElement>) => void;
    logout: () => void;
    confirmChannelId: () => void;
    confirmChannelUrl: () => void;
    isAddiDisabled: boolean;
    clickAddiEdit: () => void;
    submitAddiEdit: () => void;
}

export default function SettingForm({disabled, username, firstName, lastName, email, profileImageFile, phoneNumber, companyName, role,submitEdit,clickEdit, changeUsername, changeFirstName, changeLastName, changeEmail, changeProfileImage, changePhoneNumber, changeCompanyName, logout, channelId, changeChannelId, confirmChannelId, isAddiDisabled, clickAddiEdit, submitAddiEdit, channelUrl, changeChannelUrl, confirmChannelUrl}: props) {

    const profileImageInputRef = useRef<HTMLInputElement>();

    const clickProfileImageInput = () => {
        profileImageInputRef.current?.click();
    }
    

    return (
        <Container>
            <Header>
            <h2>Basic Information</h2>
          
            </Header>
            <InfoInput
            value={username}
            label={"User name"}
            onChangeInput={changeUsername}
            />
            <div
            style={{display: 'flex', justifyContent: 'space-between'}}>
            <InfoInput
            value={firstName}
            label={"First Name"}
            onChangeInput={changeFirstName}
            />
            <InfoInput
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
            <FileInput
            changeFile={changeProfileImage}
            accept={"image/*"}
            value={profileImageFile}
            label={"Profile image"}
            description={"Please upload PNG, JPEG files only"}
            />
            <Header>
            <h2>Additional Information</h2>
            </Header>
            <InfoInput
            value={channelId}
            label={"Channel Information"}
            onChangeInput={changeChannelId}
            placeholder={"Enter your youtube channel url"}
            button={"Confirm"}
            clickButton={confirmChannelId}
            />
            <InfoInput
            value={channelUrl}
            label={"Channel Url"}
            onChangeInput={changeChannelUrl}
            placeholder={"Enter your youtube channel url"}
            button={"Confirm"}
            clickButton={confirmChannelUrl}
            />
            <InfoInput
            value={phoneNumber}
            label={"Phone number"}
            onChangeInput={changePhoneNumber}
            />
            <InfoInput
            value={companyName}
            label={"Company name"}
            onChangeInput={changeCompanyName}
            />
            <InfoSelect
            disabled={true}
            options={[{id: 1, value: "Business"}, {id: 2, value: "Creator"}]}
            value={role}
            label={'Role'}
            />
            <Footer>
                <Button
                label="Save"
                style="primary"
                size="medium"
                state="default"
                onClick={submitEdit}
                />
            </Footer>
        </Container>
    )
}