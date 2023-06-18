'use client';

import styled from '@emotion/styled';

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
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    profileImage: any;
    phoneNumber: string;
    companyName: string;
    role: string;
    changeUsername: (value: string) => void;
    changeFirstName: (value: string) => void;
    changeLastName: (value: string) => void;
    changeEmail: (value: string) => void;
    changeProfileImage: (value: any) => void;
    changePhoneNumber: (value: string) => void;
    changeCompanyName: (value: string) => void;
    logout: () => void;
}

export default function SettingForm({username, firstName, lastName, email, profileImage, phoneNumber, companyName, role, changeUsername, changeFirstName, changeLastName, changeEmail, changeProfileImage, changePhoneNumber, changeCompanyName, logout}: props) {
    return (
        <Container>
            <Header>
            <h2>Basic Information</h2>
            <Button
            label="Edit"
            size="xsmall"
            style="tertiery"
            state="default"
            />
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
            value={email}
            label={"Email"}
            onChangeInput={changeEmail}
            />
            <InfoInput
            value={profileImage}
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