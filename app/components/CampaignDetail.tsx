import Image from 'next/image';
import styles from './CampaignDetail.module.scss';

import thumbnail from '../assets/campaign_thumbnail.jpeg';
import icon_clip from '../assets/icons/icon_clip.png';

import CampaignDetailIconItem from './CampaignDetailIconItem';

export default function CampaignDetail() {
    return (
        <div className={styles.main}>
        <div className={styles.mainInfoContainer}>
                <Image
                className={styles.representativeImage}
                width={600}
                height={350}
                src={thumbnail}
                alt={"campaign_thumbnail"}
                />
                <div
                className={styles.brandName}>
                    Brand Name
                </div>
                <div
                className={styles.title}>
                    This is the title of campaign This is the second Line    
                </div>
                <div
                style={{marginTop: 16}}
                className={styles.subItem}>
                    <div 
                    style={{width: 92}}
                    className={styles.subLabel}>
                        Date
                    </div>
                    <div 
                    className={styles.subValue}>
                        2020-00-00 ~ 2023-00-00
                    </div>
                </div>
                <div
                style={{marginTop: 10}}
                className={styles.subItem}>
                    <div 
                    style={{width: 92}}
                    className={styles.subLabel}>
                        Platform
                    </div>
                    <div className={styles.subValue}>
                        Youtube
                    </div>
                </div>
                <div
                className={styles.label}>
                    Campaign Information
                </div>
                <div
                className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula libero, sagittis ac fermentum eu, varius eget eros. Duis malesuada nisi id fringilla aliquet. Integer molestie consectetur tellus, eget dapibus massa semper at. Ut vitae metus iaculis, sollicitudin lacus non, feugiat enim. Nam ornare sodales nunc et porttitor. Sed quis sapien in nulla sollicitudin tempor non non odio.
                </div>
                <div
                className={styles.label}>
                Mission
                </div>
                <CampaignDetailIconItem
                type={"mission"}/>
                <div
                className={styles.label}>
                Rewards
                </div>
                <CampaignDetailIconItem
                type={"rewards"}/>
                <div
                className={styles.label}>
                Files
                </div>
                <div
                className={styles.fileItemContainer}>
                    <Image
                    width={24}
                    height={24}
                    alt={"icon_clip"}
                    src={icon_clip}/>
                    <span
                    className={styles.filePath}>
                        Path
                    </span>
                </div>
        </div>
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
        </div>
    )
}