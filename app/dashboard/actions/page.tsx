"use client";
import { useState } from "react";
import styled from "@emotion/styled";

import Scoreboard from "@/app/components/Dashboard/Scoreboard";
import GraphTab from "@/app/components/Dashboard/GraphTab";

const Container = styled.div`
  padding: 40px 0px 120px 0px;
`;

export default function Actions() {
  const [curTab, setCurTab] = useState(GRAPH_DATA[0].label);
  const [graphData, setGraphData] = useState<any>(GRAPH_DATA[0].data);

  const changeTab = (tab: string, data: any) => {
    setCurTab(tab);
    setGraphData(data);
  };

  return (
    <Container>
      <Scoreboard data={SCOREBOARD_DATA} />
      <GraphTab
        marginTop={40}
        curTab={curTab}
        tabs={GRAPH_DATA}
        changeTab={changeTab}
        graphData={graphData}
      />
    </Container>
  );
}

const SCOREBOARD_DATA = [
  {
    label: "총 참여수",
    value: "33,000",
    description: "총 참여 수 = 공유 수 + 좋아요 수 + 댓글 수",
    tooltipWidth: 270,
    change: "increase",
    changeDescription: "한달 전 보다 10% 증가했어요",
  },
  {
    label: "이벤트당 평균가격",
    value: "$1,000",
    description:
      "이벤트당 평균 가격(CPE)\n = (전체 참여수 + 총 지출 비용) x 100",
    tooltipWidth: 233,
    change: "increase",
    changeDescription: "한달 전 보다 10% 증가했어요",
  },
];

const GRAPH_DATA = [
  {
    label: "전체 참여",
    value: "53,230",
    description: "이것은 툴팁입니다.\n 툴팁 안의 텍스트를 입력해주세요",
    change: "increase",
    changeDescription: "한달 전 보다 10% 증가했어요",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          legend: { label: "총 조회수", color: "#57C7B6" },
          data: [10, 20, 50, 100, 1, 66, 2],
          borderColor: "#57C7B6",
          backgroundColor: "#57C7B6",
          borderWidth: 2.8,
          lineTension: 0.35,
        },
        {
          legend: { label: "순 조회수", color: "#B981EE" },
          data: [10, 20, 25, 50, 40, 60, 80],
          borderColor: "#B981EE",
          backgroundColor: "#B981EE",
          borderWidth: 2.8,
          lineTension: 0.35,
        },
      ],
    },
  },
  {
    label: "공유 횟수",
    value: "7,322",
    description: "이것은 툴팁입니다.\n 툴팁 안의 텍스트를 입력해주세요",
    change: "decrease",
    changeDescription: "한달 전 보다 20% 감소했어요",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          legend: { label: "총 조회수", color: "#57C7B6" },
          data: [10, 20, 50, 100, 1, 66, 2],
          borderColor: "#57C7B6",
          backgroundColor: "#57C7B6",
          borderWidth: 2.8,
          lineTension: 0.35,
        },
        {
          legend: { label: "총 조회수", color: "#57C7B6" },
          data: [10, 20, 25, 50, 40, 60, 80],
          borderColor: "#B981EE",
          backgroundColor: "#B981EE",
          borderWidth: 2.8,
          lineTension: 0.35,
        },
      ],
    },
  },
  {
    label: "댓글 수",
    value: "12,300",
    description: "이것은 툴팁입니다.\n 툴팁 안의 텍스트를 입력해주세요",
    change: "decrease",
    changeDescription: "한달 전 보다 20% 감소했어요",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          legend: { label: "총 조회수", color: "#57C7B6" },
          data: [10, 20, 50, 100, 1, 66, 2],
          borderColor: "#57C7B6",
          backgroundColor: "#57C7B6",
          borderWidth: 2.8,
          lineTension: 0.35,
        },
        {
          legend: { label: "총 조회수", color: "#57C7B6" },
          data: [10, 20, 25, 50, 40, 60, 80],
          borderColor: "#B981EE",
          backgroundColor: "#B981EE",
          borderWidth: 2.8,
          lineTension: 0.35,
        },
      ],
    },
  },
  {
    label: "좋아요 수",
    value: "12,300",
    description: "이것은 툴팁입니다.\n툴팁 안의 텍스트를 입력해주세요",
    change: "decrease",
    changeDescription: "한달 전 보다 20% 감소했어요",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          legend: { label: "총 조회수", color: "#57C7B6" },
          data: [10, 20, 50, 100, 1, 66, 2],
          borderColor: "#57C7B6",
          backgroundColor: "#57C7B6",
          borderWidth: 2.8,
          lineTension: 0.35,
        },
        {
          legend: { label: "총 조회수", color: "#57C7B6" },
          data: [10, 20, 25, 50, 40, 60, 80],
          borderColor: "#B981EE",
          backgroundColor: "#B981EE",
          borderWidth: 2.8,
          lineTension: 0.35,
        },
      ],
    },
  },
];
