import styles from './JoinCampaign.module.scss';

export default function JoinCampaign() {
    return (
        <div
        className={styles.joinContainer}>
            <div
            className={styles.summaryInfoContainer}>
                <div
                className={styles.summaryTitle}>
                    This is the title of campaign This is the second Line
                </div>
                <div
                style={{marginTop: 24}}
                className={styles.subItem}>
                    <div 
                    style={{width: 80}}
                    className={styles.subLabel}>
                        Date
                    </div>
                    <div className={styles.subValue}>
                    2023-00-00 - 2023-00-00
                    </div>
                </div>
                <div
                style={{marginTop: 8}}
                className={styles.subItem}>
                    <div 
                    style={{width: 80}}
                    className={styles.subLabel}>
                        Platform
                    </div>
                    <div className={styles.subValue}>
                    Platform Name
                    </div>
                </div>
                <div
                style={{marginTop: 8}}
                className={styles.subItem}>
                    <div 
                    style={{width: 80}}
                    className={styles.subLabel}>
                        Bid
                    </div>
                    <div className={styles.subValue}>
                    Bid Amount
                    </div>
                </div>
            </div>
            <div
            className={styles.joinButton}>
              Join Campaign  
            </div>
        </div>
    )
}