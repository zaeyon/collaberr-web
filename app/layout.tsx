'use client';

import { useState, useEffect } from 'react';
import {RecoilRoot, useSetRecoilState} from 'recoil';
import './globals.css'

import { userState } from './recoil/user';
import TopBar from './components/TopBar'
import SideBar from './components/SideBar';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isVisSideBar, setIsVisSideBar] = useState(true);


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
