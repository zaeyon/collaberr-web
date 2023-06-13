import styles from './SideBar.module.scss';


export default function SideBar() {
    return (
        <div
        className={styles.container}>
            <div
            className={styles.categoryItem}>
                Campaign
            </div>
            <div
            className={styles.categoryItem}>
                All Campaigns
            </div>
            <div
            className={styles.categoryItem}>
                Business
            </div>
            <div
            className={styles.categoryItem}>
                Create Campaign
            </div>
            <div
            className={styles.categoryItem}>
                Dashboard
            </div>
        </div>
    )
}