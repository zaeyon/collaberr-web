'use client';

import { useState, useEffect } from 'react';
import {RecoilRoot, useSetRecoilState} from 'recoil';
import './globals.css'

import { userState } from './recoil/user';
import TopBar from './components/TopBar'
import SideBar from './components/SideBar';
import { POST_refreshToken } from './api/auth'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isVisSideBar, setIsVisSideBar] = useState(true);

  setInterval(() => {
    POST_refreshToken()
    .then((res) => {
      console.log("POST_refreshToken success", res);
    })
    .catch((err) => {
      console.log("POST_refreshToken err", err);
    })
  }, 240000)


  const onClickHamburger = () => {
    setIsVisSideBar(!isVisSideBar);
  }

  return (
    <html lang="en">
      <body
      style={isVisSideBar ? {paddingLeft: 240} : {paddingLeft: 0}}>
        <RecoilRoot>
        <TopBar
        onClickHamburger={onClickHamburger}/>
        {isVisSideBar && (
        <SideBar/>
        )}
        {children}
        </RecoilRoot>
      </body>
    </html>
  )
}
