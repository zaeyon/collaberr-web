"use client";
import { useState, useCallback, useEffect } from "react";
import styled from "@emotion/styled";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

import {
  GET_showCreatorForCampaign,
  PUT_setCreatorsState,
} from "@/app/api/campaign";

import ManageTab from "@/app/components/Manage/ManageTab";
import Scoreboard from "@/app/components/Dashboard/Scoreboard";
import ListTable from "@/app/components/ListTable";
import Button from "@/app/components/Button";
import Toast from "@/app/components/Toast";

const Container = styled.div``;

const RequestTableFooter = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
`;

export default function RecruitManage() {
  const [requestedCreatorArr, setRequestedCreatorArr] = useState<any>([]);
  const [approvedCreatorArr, setApprovedCreatorArr] = useState<any>([]);
  const [declinedCreatorArr, setDeclinedCreatorArr] = useState<any>([]);
  const [selectedCreatorArr, setSelectedCreatorArr] = useState<any[]>([]);
  const [allSelected, setAllSelected] = useState(false);

  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    console.log("RecruitManage params", params);
    GET_showCreatorForCampaign(Number(params.id))
      .then((res) => {
        console.log("GET_showCreatorForCampaign res", res);
        setRequestedCreatorArr(
          res.data.requested.map((item: any) => {
            return {
              selected: false,
              state: "request_recruit",
              ...item,
            };
          })
        );
        setApprovedCreatorArr(
          res.data.approved.map((item: any) => {
            return {
              state: "approve_recruit",
              ...item,
            };
          })
        );
        setDeclinedCreatorArr(
          res.data.declined.map((item: any) => {
            return {
              state: "decline_recruit",
              ...item,
            };
          })
        );
      })
      .catch((err) => {
        console.log("GET_showCreatorForCampaign err", err);
      });
  }, []);

  const clickCheckbox = useCallback(
    (index?: number) => {
      let tmpArr = [...requestedCreatorArr];
      tmpArr[index ? index : 0].selected = !tmpArr[index ? index : 0].selected;

      setSelectedCreatorArr((prev) => {
        if (!prev.includes(tmpArr[index ? index : 0])) {
          return [...prev, tmpArr[index ? index : 0]];
        } else {
          const removeIndex = prev.findIndex(
            (item: any) => item === tmpArr[index ? index : 0]
          );

          prev.splice(removeIndex, 1);

          return prev;
        }
      });

      setRequestedCreatorArr(tmpArr);
    },
    [requestedCreatorArr]
  );

  const clickAllCheckbox = useCallback(() => {
    let tmpArr = [...requestedCreatorArr];
    if (allSelected) {
      setAllSelected(false);
      const unSelectedArr = tmpArr.map((item) => {
        return {
          ...item,
          selected: false,
        };
      });

      setRequestedCreatorArr(unSelectedArr);
      setSelectedCreatorArr([]);
    } else {
      setAllSelected(true);
      const selectedArr = tmpArr.map((item) => {
        return {
          ...item,
          selected: true,
        };
      });
      setRequestedCreatorArr(selectedArr);
      setSelectedCreatorArr(requestedCreatorArr.map((item: any) => item));
    }
  }, [requestedCreatorArr, allSelected]);

  const clickSetCreatorsState = (state: string) => {
    const selectedCreatorIdArr = selectedCreatorArr.map((item) => item.id);

    PUT_setCreatorsState(params.id, selectedCreatorIdArr, state)
      .then((res) => {
        console.log("PUT_setCreatorsState res", res);
        setAllSelected(false);
        setSelectedCreatorArr([]);
        setRequestedCreatorArr((prev: any) =>
          prev.filter((item: any) => {
            return item.selected === false;
          })
        );

        if (state === "approve") {
          const tmpCreatorArr = selectedCreatorArr.map((item) => {
            delete item.selected;
            return {
              ...item,
              state: "approve_recruit",
            };
          });

          setApprovedCreatorArr((prev: any) => prev.concat(tmpCreatorArr));
        }
        if (state === "decline") {
          const tmpCreatorArr = selectedCreatorArr.map((item) => {
            delete item.selected;
            return {
              ...item,
              state: "decline_recruit",
            };
          });
          setDeclinedCreatorArr((prev: any) => prev.concat(tmpCreatorArr));
        }
      })
      .catch((err) => {
        console.log("PUT_setCreatorsState err", err);
      });
  };

  return (
    <Container>
      <Scoreboard marginTop={24} data={SCOREBOARD_DATA} />
      <ListTable
        marginTop={64}
        tableMarginTop={8}
        title={"캠페인 참여요청"}
        headerColumns={CAMPAIGN_JOIN_REQUEST_TABLE_HEADER}
        data={requestedCreatorArr}
        clickCheckbox={clickCheckbox}
        clickAllCheckbox={clickAllCheckbox}
        allSelected={allSelected}
        emptyTitle={"아직 참가를 신청한 크리에이터가 없습니다."}
      />
      <RequestTableFooter>
        <Button
          onClick={() => clickSetCreatorsState("decline")}
          label={"참여 거절"}
          style={"tertiery"}
          size={"small"}
          state={selectedCreatorArr.length > 0 ? "default" : "disabled"}
        />
        <Button
          onClick={() => clickSetCreatorsState("approve")}
          label={"참여 확정"}
          style={"primary"}
          size={"small"}
          state={selectedCreatorArr.length > 0 ? "default" : "disabled"}
        />
      </RequestTableFooter>
      <ListTable
        marginTop={72}
        tableMarginTop={8}
        title={"모집된 크리에이터"}
        headerColumns={CREATOR_TABLE_HEADER}
        data={approvedCreatorArr}
        emptyTitle={"모집된 크리에이터가 없습니다."}
      />
      <ListTable
        marginTop={64}
        tableMarginTop={8}
        title={"거절된 크리에이터"}
        headerColumns={CREATOR_TABLE_HEADER}
        data={declinedCreatorArr}
        emptyTitle={"거절된 크리에이터가 없습니다."}
      />
      <Toast />
    </Container>
  );
}

const SCOREBOARD_DATA = [
  {
    label: "모집 정원",
    value: "6명",
  },
  {
    label: "모집된 참가자",
    value: "2명",
  },
  {
    label: "예상 지출금액",
    value: "$1,000",
  },
  {
    label: "모집 마감까지",
    value: "D-4",
  },
];

const CAMPAIGN_JOIN_REQUEST_TABLE_HEADER = [
  {
    label: "selected",
    width: "4.16",
  },
  {
    label: "상태",
    width: "8.32",
  },
  {
    label: "크리에이터",
    width: "20.83",
  },
  {
    label: "구독자 수",
    width: "15.62",
  },
  {
    label: "평균 댓글 수",
    width: "15.62",
  },
  {
    label: "평균 좋아요 수",
    width: "15.62",
  },
  {
    label: "30일 내 업로드",
    width: "15.62",
  },
  {
    label: "채널",
    width: "4.16",
  },
];

const CAMPAIGN_JOIN_REQUEST_TABLE_DATA = [
  {
    selected: false,
    state: "request",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    selected: false,
    state: "request",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    selected: false,
    state: "request",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    selected: false,
    state: "request",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    selected: false,
    state: "request",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    selected: false,
    state: "request",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    selected: false,
    state: "request",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    selected: false,
    state: "request",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    selected: false,
    state: "request",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    selected: false,
    state: "request",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
];

const CREATOR_TABLE_HEADER = [
  {
    label: "상태",
    width: "8.32",
  },
  {
    label: "크리에이터",
    width: "20.83",
  },
  {
    label: "구독자 수",
    width: "16.66",
  },
  {
    label: "평균 댓글 수",
    width: "16.66",
  },
  {
    label: "평균 좋아요 수",
    width: "16.66",
  },
  {
    label: "30일 내 업로드",
    width: "16.66",
  },
  {
    label: "채널",
    width: "4.16",
  },
];

const CONFIRMED_CREATOR_TABLE_DATA = [
  {
    state: "participation_confirmed",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    state: "participation_confirmed",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    state: "participation_confirmed",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    state: "participation_confirmed",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    state: "participation_confirmed",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    state: "participation_confirmed",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    state: "participation_confirmed",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    state: "participation_confirmed",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    state: "participation_confirmed",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    state: "participation_confirmed",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
];

const REJECTED_CREATOR_TABLE_DATA = [
  {
    state: "participation_rejected",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    state: "participation_rejected",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    state: "participation_rejected",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    state: "participation_rejected",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    state: "participation_rejected",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    state: "participation_rejected",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    state: "participation_rejected",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    state: "participation_rejected",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    state: "participation_rejected",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
  {
    state: "participation_rejected",
    name: "Creator Name",
    subscribers_num: 4234,
    aver_comment_num: 200,
    aver_like_num: 20012,
    recent_upload: 31,
    url: "https://www.youtube.com/",
  },
];
