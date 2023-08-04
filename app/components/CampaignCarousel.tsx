import styles from "./CampaignCarousel.module.scss";

import CampaignCard from "./CampaignCard";
import SkeletonCard from "./loader/SkeletonCard";

interface props {
  campaignsData: any;
  loading: boolean;
}

export default function CampaignCarousel({ campaignsData, loading }: props) {
  return (
    <div className={styles.container}>
      {!loading &&
        campaignsData.map((campaignItem: any) => {
          return (
            <CampaignCard
              type={"carousel"}
              key={campaignItem.id}
              campaign={campaignItem}
            />
          );
        })}
      {loading && (
        <div className={styles.skeletonDiv}>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )}
    </div>
  );
}
