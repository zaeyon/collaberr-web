import styles from "./CreatorRankingItem.module.scss";
import Image from "next/image";
import profile_default from "@/app/assets/icons/icon_profile-fill.png";
import icon_right from "@/app/assets/icons/icon_right.png";

interface props {
  creatorData: any;
  index: number;
}

export default function CreatorRankingItem({ creatorData, index }: props) {
  return (
    <div
      style={{ marginLeft: creatorData.ranking > 5 ? 24 : 0 }}
      className={styles.container}
    >
      <div className={styles.basicInfoDiv}>
        <span className={styles.ranking}>{index + 1}</span>
        <Image
          className={styles.profileImage}
          width={32}
          height={32}
          src={
            creatorData.channel_profile_image
              ? creatorData.channel_profile_image
              : profile_default
          }
          alt={"profile_default"}
        />
        <span className={styles.name}>{creatorData.channel_name}</span>
      </div>
      <div className={styles.statisticsDiv}>
        <span className={styles.statisticsItem}>
          <span className={styles.statisticsLabel}>팔로워</span>
          {creatorData.subscribers.toLocaleString()}
        </span>
        <span style={{ marginRight: 20 }} className={styles.statisticsItem}>
          <span className={styles.statisticsLabel}>평균 조회수</span>
          {creatorData.average_views.toLocaleString()}
        </span>
        <Image width={24} height={24} src={icon_right} alt={"icon_right"} />
      </div>
    </div>
  );
}
