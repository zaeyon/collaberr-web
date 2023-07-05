import { useEffect, useState } from 'react';
import styles from './TopBar.module.scss'; 
import Image from 'next/image';
import Link from 'next/link';
import { deleteCookie } from '../lib/cookie';
import { POST_logout } from '../api/auth';
import {useRecoilState} from 'recoil';
import {userState, isVisDropdownState} from '../recoil/user';
import {useRouter} from 'next/navigation';

import Dropdown from './Dropdown';

import collaberr_logo from '../assets/collaberr_logo.png';
import collaberr_icon from '../assets/collaberr_icon.png';
import hamburger_icon from '../assets/icons/icon_hamburger.png';

interface props {
    onClickHamburger: () => void;
}

export default function TopBar({onClickHamburger}: props) {
    const [user, setUser] = useRecoilState(userState);
    const [isVisDropdown, setIsVisDropdown] = useRecoilState(isVisDropdownState);
    const router = useRouter();

    useEffect(() => {
      if(localStorage.getItem("current_user")) {
        const currentUser = JSON.parse(localStorage.getItem("current_user") || '{}')
        setUser(currentUser)
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
    }, [setUser])

    const dropdownItems = [
      {
        label: '계정 설정',
        onClick: () => {
          setIsVisDropdown(false);
          router.push('/setting');
        }
      },
      {
        label: '로그아웃',
        onClick: () => {
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
      }
    ]

    const clickUsername = () => {
      setIsVisDropdown(!isVisDropdown)

    }

    return (
        <div
        className={styles.container}>
            <div>
                <Image
                style={{cursor: 'pointer'}}
                onClick={() => onClickHamburger()}
                width={24}
                height={24}
                src={hamburger_icon}
                alt={"hamburger_icon"}/>
            <Link
            className={styles.homeLink}
            href={"/"}>
            <div>
                <Image
                width={24}
                height={24}
                className={styles.collaberrIcon}
                src={collaberr_icon}
                alt={"collaberr-icon"}/>
                <Image
                width={114.4}
                height={21.6}
                className={styles.collaberrLogo}
                src={collaberr_logo}
                alt={"collaberr-logo"}/>
            </div>
            </Link>
            </div>
            {user.isLogin && (
                <div
                onClick={() => clickUsername()}
                className={styles.username}>
                {user.username}
                {isVisDropdown && (
                  <Dropdown
                  items={dropdownItems}
                  />
                )}
                </div>
            )}
            {!user.isLogin && (
                <Link
                href={"/login"}
                className={styles.login}>
                Login
                </Link>
            )}
        </div>
    )
}

