import styles from "./CampaignCarousel.module.scss";

import CampaignCard from "./CampaignCard";

interface props {
  campaignsData: any;
  loading: boolean;
}

export default function CampaignCarousel({ campaignsData, loading }: props) {
  return (
    <div className={styles.container}>
      {campaignsData.map((campaignItem: any) => {
        return <CampaignCard key={campaignItem.id} campaign={campaignItem} />;
      })}
    </div>
  );
}
