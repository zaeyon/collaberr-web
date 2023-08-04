"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { useRecoilState } from "recoil";
import styled from "@emotion/styled";

import { getCookie } from "../lib/cookie";
import { userState } from "../recoil/user";
import {
  POST_logout,
  PATCH_youtubeAuth,
  POST_youtubeChannel,
} from "../api/auth";
import { PATCH_editProfile } from "../api/user";
import SettingForm from "../components/SettingForm";
import { userType } from "../type";
import { deleteCookie } from "../lib/cookie";
import axios from "axios";

const Container = styled.div`
  padding-bottom: 1350px;

  display: flex;
  justify-content: center;
`;

export default function Setting() {
  const [user, setUser] = useRecoilState(userState);
  const [username, setUsername] = useState(user.username);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [profileImageFile, setProfileImageFile] = useState<any>();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState(
    user.role === "BUSINESS" ? "Business" : "Creator"
  );
  const [channelId, setChannelId] = useState("");
  const [channelUrl, setChannelUrl] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [isAddiDisabled, setIsAddiDisabled] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("current_user")) {
      const currentUser = JSON.parse(
        localStorage.getItem("current_user") || "{}"
      );
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
      });
    }
  }, []);

  const router = useRouter();

  const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const changeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const changeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const changeProfileImage = (file: any, src: any) => {
    setProfileImageFile(file);
  };

  const changePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const changeCompanyName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(e.target.value);
  };

  const changeChannelId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChannelId(e.target.value);
  };

  const changeChannelUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChannelUrl(e.target.value);
  };

  const confirmChannelUrl = () => {
    const regex = /@.*/;
    const channelName = channelUrl.match(regex)?.[0];

    PATCH_youtubeAuth(channelName)
      .then((res) => {
        console.log("PATCH_youtubeAuth success", res);
        window.open(res.data.authorization_url, "_blank");
        window.close();
      })
      .catch((err) => {
        console.log("PATCH_youtubeAuth err", err);
        window.close();
      });
  };

  const submitEdit = () => {
    setDisabled(true);

    let editedUser: any = {};

    const accountId = getCookie("account_id");

    if (user.username !== username) editedUser["username"] = username;
    if (user.firstName !== firstName) editedUser["first_name"] = firstName;
    if (user.lastName !== lastName) editedUser["last_name"] = lastName;

    PATCH_editProfile(accountId, editedUser)
      .then((res) => {
        console.log("PATCH_editProfile success", res);
        const currentUser = {
          isLogin: true,
          email: user.email,
          username: res.data.username,
          firstName: res.data.first_name,
          lastName: res.data.last_name,
          role: user.role,
        };

        localStorage.setItem("current_user", JSON.stringify(currentUser));
        setUser(currentUser);
      })
      .catch((err) => {
        console.log("PATCH_editProfile err", err);
      });
  };

  const clickEdit = () => {
    setDisabled(false);
  };

  const clickAddiEdit = () => {
    setIsAddiDisabled(false);
  };

  const submitAddiEdit = () => {
    setIsAddiDisabled(true);
  };

  const logout = () => {
    localStorage.removeItem("current_user");
    localStorage.removeItem("account_id");

    setUser({
      isLogin: false,
      email: "",
      username: "",
      firstName: "",
      lastName: "",
      role: "",
    });

    router.push("/");

    deleteCookie("csrftoken");

    POST_logout()
      .then((res) => {
        console.log("POST_logout success", res);
      })
      .catch((err) => {
        console.log("POST_logout fail", err);
      });
  };

  return (
    <Container>
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
        channelUrl={channelUrl}
        changeChannelUrl={changeChannelUrl}
        changeUsername={changeUsername}
        changeFirstName={changeFirstName}
        changeLastName={changeLastName}
        changeEmail={changeEmail}
        changeProfileImage={changeProfileImage}
        changePhoneNumber={changePhoneNumber}
        changeCompanyName={changeCompanyName}
        logout={logout}
        confirmChannelUrl={confirmChannelUrl}
        isAddiDisabled={isAddiDisabled}
        clickAddiEdit={clickAddiEdit}
        submitAddiEdit={submitAddiEdit}
      />
    </Container>
  );
}
