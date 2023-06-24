import styles from './SideBar.module.scss';
import Link from 'next/link'

import CategoryLinkItem from './CategoryLinkItem';

export default function SideBar() {
    return (
        <div
        className={styles.container}>
            <div
            className={styles.categoryClassification}>
                Campaign
            </div>
            <CategoryLinkItem
            label={"All Campaigns"}
            href={"/campaigns"}
            />
            <div
            className={styles.categoryClassification}>
                Business
            </div>
            <CategoryLinkItem
            label={"My Campaigns"}
            href={"/mycampaigns"}
            />
            <CategoryLinkItem
            label={"Dashboard"}
            href={"/dashboard"}
            />
        </div>
    )
}