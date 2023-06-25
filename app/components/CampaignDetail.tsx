import Image from 'next/image';
import styles from './CampaignDetail.module.scss';

import thumbnail from '../assets/campaign_thumbnail.jpeg';
import icon_clip from '../assets/icons/icon_clip.png';

import CampaignDetailIconItem from './CampaignDetailIconItem';

interface props {
    brandName: string;
    title: string;
    thumbnailImageSrc: any;
    platform: string;
    shownStartDate: string;
    shownEndDate: string;
    description: string;
    missionType: string;
    bid: number | undefined;
    files: any;
}

export default function CampaignDetail({brandName = "Brand Name", title, thumbnailImageSrc = "", platform, shownStartDate, shownEndDate, description, missionType, bid, files}: props) {
    return (
        <div className={styles.mainInfoContainer}>
                <div
                className={styles.thumbnailImageDiv}>
                {thumbnailImageSrc !== "" &&
                <Image
                className={styles.thumbnailImage}
                fill={true}
                src={thumbnailImageSrc}
                alt={"campaign_thumbnail"}/>
                }
                </div>
                <div
                className={styles.brandName}>
                    {brandName ? brandName : "Brand Name"}
                </div>
                <div
                className={styles.title}>
                    {title ? title : "Campaign Name" } 
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
                        {shownStartDate && (
                            <span>{shownStartDate + " ~ "}</span>
                        )}
                        {shownEndDate && (
                            <span>{shownEndDate}</span>
                        )}
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
                        {platform}
                    </div>
                </div>
                <div
                className={styles.label}>
                    Campaign Information
                </div>
                <div
                className={styles.description}>
                    {description ? description : "Campaign description"}
                </div>
                <div
                className={styles.label}>
                Mission
                </div>
                <CampaignDetailIconItem
                value={missionType}
                type={"mission"}/>
                <div
                className={styles.label}>
                Rewards
                </div>
                <CampaignDetailIconItem
                value={bid}
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
                        {files?.name}
                    </span>
                </div>
        </div>
    )
}