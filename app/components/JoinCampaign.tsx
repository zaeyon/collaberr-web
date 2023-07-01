import styles from './JoinCampaign.module.scss';
import {campaignType} from '@/app/type/campaign';

interface props {
    campaignItem: campaignType;
}

export default function JoinCampaign({campaignItem}: props) {
    return (
        <div
        className={styles.joinContainer}>
            <div
            className={styles.summaryInfoContainer}>
                <div
                className={styles.summaryTitle}>
                    {campaignItem.title}
                </div>
                <div
                style={{marginTop: 24}}
                className={styles.subItem}>
                    <div 
                    style={{width: 90}}
                    className={styles.subLabel}>
                        Recruit date
                    </div>
                    <div className={styles.subValue}>
                    {campaignItem.recruit_start_date + " - " + campaignItem.recruit_end_date}
                    </div>
                </div>
                <div
                style={{marginTop: 8}}
                className={styles.subItem}>
                    <div 
                    style={{width: 90}}
                    className={styles.subLabel}>
                        Platform
                    </div>
                    <div className={styles.subValue}>
                    {campaignItem.platform}
                    </div>
                </div>
                <div
                style={{marginTop: 8}}
                className={styles.subItem}>
                    <div 
                    style={{width: 90}}
                    className={styles.subLabel}>
                        Bid
                    </div>
                    <div className={styles.subValue}>
                    {"$ " + campaignItem.reward}
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