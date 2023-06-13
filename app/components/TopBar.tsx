import styles from './TopBar.module.scss'; 
import Image from 'next/image';

import collaberr_logo from '../assets/collaberr_logo.png';
import collaberr_icon from '../assets/collaberr_icon.png';
import hamburger_icon from '../assets/icons/icon-hamburger.png';

interface props {
    onClickHamburger: () => void;
}

export default function TopBar({onClickHamburger}: props) {
    return (
        <div
        className={styles.container}>
            <div>
            <Image
            onClick={() => onClickHamburger()}
            width={24}
            height={24}
            src={hamburger_icon}
            alt={"hamburger_icon"}/>
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
            <div
            className={styles.login}>
            Login
            </div>
        </div>
    )
}

