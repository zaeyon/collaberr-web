import styles from './CampaignGridItem.module.scss';
import Link from 'next/link';
import Image from 'next/image'

import icon_facebook from '../assets/icons/icon_facebook.png';
import thumbnail from '../assets/campaign_thumbnail.jpeg';

interface props {
    campaign: any
}

export default function GampaignGridItem({campaign}: props) {
    return (
        <Link
        href={`/campaigns/${campaign.id}`}
        className={styles.container}>
            <Image
            width={309}
            height={180}
            alt={"campaign_thumbnail"}
            src={thumbnail}
            className={styles.thumbnail}/>
            <div
            className={styles.brandName}>
                {campaign.brand_name}
            </div>
            <div
            className={styles.title}>
                {campaign.title}
            </div>
            <Image
            width={24}
            height={24}
            alt={"platform_icon"}
            src={icon_facebook}
            className={styles.platformIcon}/>
        </Link>
    )
}