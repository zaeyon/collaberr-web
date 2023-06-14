import styles from './SideBar.module.scss';
import Link from 'next/link'

export default function SideBar() {
    return (
        <div
        className={styles.container}>
            <div
            className={styles.categoryItem}>
                Campaign
            </div>
            <Link
            href={"/campaigns"}
            className={styles.categoryItem}>
                All Campaigns
            </Link>
            <div
            className={styles.categoryItem}>
                Business
            </div>
            <Link
            href={"/"}
            className={styles.categoryItem}>
                My Campaigns
            </Link>
            <Link
            href={"/dashboard"}
            className={styles.categoryItem}>
                Dashboard
            </Link>
        </div>
    )
}