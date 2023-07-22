import styles from "./CampaignGrid.module.scss";

import CampaignGridItem from "../components/CampaignGridItem";
import Card from "./Skeleton/Card";

interface props {
  campaignArr: any;
  loading?: boolean;
}

export default function CampaignGrid({ campaignArr, loading }: props) {
  return (
    <div className={styles.container}>
      <span className={styles.subTitle}>All Campaigns</span>
      <div className={styles.gridContainer}>
        {!loading &&
          campaignArr.map((campaign: any, index: number) => {
            return <CampaignGridItem key={index} campaign={campaign} />;
          })}
        {loading &&
          [0, 1, 2, 4, 5, 6].map((_, index) => {
            return <Card key={index} />;
          })}
      </div>
    </div>
  );
}
