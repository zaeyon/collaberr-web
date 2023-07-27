import styles from "./JoinCampaign.module.scss";
import { campaignType } from "@/app/type/campaign";

import { getDday } from "../lib/date";

interface props {
  campaignItem: campaignType;
  clickJoinCampaign: () => void;
}

export default function JoinCampaign({
  campaignItem,
  clickJoinCampaign,
}: props) {
  return (
    <div className={styles.joinContainer}>
      <div className={styles.summaryInfoContainer}>
        <div className={styles.title}>{"모집정보"}</div>
        <div style={{ marginTop: 24 }} className={styles.subItem}>
          <div className={styles.subLabel}>광고비</div>
          <div className={styles.subValue}>{"$" + campaignItem.reward}</div>
        </div>
        <div className={styles.subItem}>
          <div className={styles.subLabel}>모집 마감일</div>
          <div className={styles.subValue}>
            {campaignItem.recruit_end_date}
            <span className={styles.addInfo}>
              {"D-" + getDday(campaignItem.recruit_end_date)}
            </span>
          </div>
        </div>
        <div className={styles.subItem}>
          <div className={styles.subLabel}>모집현황</div>
          <div className={styles.subValue}>
            {"6명/10명"}
            <span className={styles.addInfo}>{"60%"}</span>
          </div>
        </div>
      </div>
      <div onClick={() => clickJoinCampaign()} className={styles.joinButton}>
        Join Campaign
      </div>
    </div>
  );
}
