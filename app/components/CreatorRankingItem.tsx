import styles from "./CreatorRankingItem.module.scss";
import Image from "next/image";
import profile_default from "@/app/assets/icons/icon_profile-fill.png";

interface props {
  creatorData: any;
}

export default function CreatorRankingItem({ creatorData }: props) {
  return (
    <div
      style={{ marginLeft: creatorData.ranking > 5 ? 24 : 0 }}
      className={styles.container}
    >
      <span className={styles.ranking}>{creatorData.ranking}</span>
      <Image
        className={styles.profileImage}
        width={32}
        height={32}
        src={profile_default}
        alt={"profile_default"}
      />
      <span className={styles.name}>{creatorData.name}</span>
      <span className={styles.followerNum}>{creatorData.followerNum}</span>
    </div>
  );
}
