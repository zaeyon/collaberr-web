import styles from './CampaignGrid.module.scss';

import CampaignGridItem from '../components/CampaignGridItem';

interface props {
    campaignArr: any
}

export default function CampaignGrid({campaignArr}: props) {
    return (
        <div
        className={styles.container}>
            <span
            className={styles.subTitle}>
            All Campaigns
            </span>
            <div
            className={styles.gridContainer}>
            {campaignArr.map((campaign: any, index: number) => {
                return (
                    <CampaignGridItem
                    key={index}
                    campaign={campaign}/>
                )
            })}
            </div>
        </div>
    )
}