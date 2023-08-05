import styles from "./CreatorsTableItem.module.scss";
import Image from "next/image";
import Button from "../Button";

import default_profile_image from "@/app/assets/icons/icon_profile-fill.png";

interface props {
  creatorData?: any;
  openCreatorDetail: (channelId: string) => void;
}

export default function CreatorsTableItem({
  creatorData,
  openCreatorDetail,
}: props) {
  return (
    <div className={styles.container}>
      <div className={styles.channelName}>
        <Image
          className={styles.profileImage}
          alt={"channel_profile_image"}
          src={
            creatorData?.channel_profile_image
              ? creatorData?.channel_profile_image
              : default_profile_image
          }
          width={32}
          height={32}
        />
        <span className={styles.dataSpan}>{creatorData?.channel_name}</span>
      </div>
      <div className={styles.channelType}>
        <span className={styles.typeItem}>{creatorData?.channel_type}</span>
      </div>
      <div className={styles.target}>
        <span className={styles.dataSpan}>{creatorData?.target}</span>
      </div>
      <div className={styles.subscribers}>
        <span className={styles.dataSpan}>
          {creatorData?.subscribers.toLocaleString()}
        </span>
      </div>
      <div className={styles.averageViews}>
        <span className={styles.dataSpan}>
          {creatorData?.average_views.toLocaleString()}
        </span>
      </div>
      <div className={styles.uploads}>
        <span className={styles.dataSpan}>
          {creatorData?.uploads.toLocaleString()}
        </span>
      </div>
      <div className={styles.analyzeButton}>
        <span className={styles.dataSpan}>
          <Button
            onClick={() =>
              openCreatorDetail ? openCreatorDetail(creatorData.channel_id) : ""
            }
            label={"보기"}
            style={"tertiery"}
            size={"xsmall"}
            state={"default"}
          />
        </span>
      </div>
    </div>
  );
}
