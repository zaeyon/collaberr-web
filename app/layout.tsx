'use client';

import { useState } from 'react';
import './globals.css'
import TopBar from './components/TopBar'
import SideBar from './components/SideBar';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isVisSideBar, setIsVisSideBar] = useState(false);

  const onClickHamburger = () => {
    setIsVisSideBar(!isVisSideBar);
  }

  return (
    <html lang="en">
      <body>
        <TopBar
        onClickHamburger={onClickHamburger}/>
        {isVisSideBar && (
        <SideBar/>
        )}
        {children}
      </body>
    </html>
  )
}
