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
            {campaignArr.map((campaign: any) => {
                return (
                    <CampaignGridItem
                    key={campaign.id}
                    campaign={campaign}/>
                )
            })}
            </div>
        </div>
    )
}