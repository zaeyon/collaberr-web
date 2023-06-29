import styles from './CategoryLinkItem.module.scss';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

interface props {
    label: string;
    href: string;
}

export default function CategoryLinkItem({label, href}: props) {
    const pathname = usePathname();
    return (
        <Link
        style={{color: "/"+pathname.split("/")[1] === href ? '#F25476' : '#445462'}}
        className={styles.container}
        href={href}>
            {label}
        </Link>
    )
}