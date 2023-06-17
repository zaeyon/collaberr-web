import styles from './CategoryLinkItem.module.scss';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

interface props {
    label: string;
    href: string;
}

export default function CategoryLinkItem({label, href}: props) {
    const pathname = usePathname();
    console.log("pathname", pathname);
    return (
        <Link
        style={{color: pathname === href ? '#3183F6' : '#445462'}}
        className={styles.container}
        href={href}>
            {label}
        </Link>
    )
}