import "./MyCampaignListItem.scss";
import Image from "next/image";
import classNames from "classnames";
import { useRouter } from "next/navigation";

import Button from "./Button";
import { campaignListType } from "../type/campaign";
import icon_youtube from "../assets/icons/icon_youtube.png";
import icon_instagram from "../assets/icons/icon_instagram.png";
import icon_tiktok from "../assets/icons/icon_tiktok.png";

interface props {
  campaignItem: campaignListType;
}

export default function MyCampaignListItem({ campaignItem }: props) {
  const router = useRouter();
  return (
    <div className={"container"}>
      <div className={classNames("column", "id")}>{campaignItem.id}</div>
      <div className={classNames("column", "state")}>
        <span className={classNames("chip", "published")}>{"Published"}</span>
      </div>
      <div className={classNames("column", "title")}>
        <span className={"column_value"}>{campaignItem.title}</span>
      </div>
      <div className={classNames("column", "platform")}>
        {campaignItem.platform === "Youtube" && (
          <Image
            width={24}
            height={24}
            alt={"icon_youtube"}
            src={icon_youtube}
          />
        )}
        {campaignItem.platform === "Instagram" && (
          <Image
            width={24}
            height={24}
            alt={"icon_instagram"}
            src={icon_instagram}
          />
        )}
        {campaignItem.platform === "Tiktok" && (
          <Image width={24} height={24} alt={"icon_tiktok"} src={icon_tiktok} />
        )}
      </div>
      <div className={classNames("column", "type")}>
        <span className="column_value">{campaignItem.mission_type}</span>
      </div>
      <div className={classNames("column", "date")}>
        <span className="column_value">
          {campaignItem.start_date + " ~ " + campaignItem.end_date}
        </span>
      </div>
      <div className={classNames("column", "options")}>
        <Button
          onClick={() => {
            router.push(`/mycampaigns/edit?id=${campaignItem.id}`);
          }}
          label={"Edit"}
          style={"tertiery"}
          size={"xsmall"}
          state={"default"}
        />
      </div>
    </div>
  );
}
