"use client";
import { useState } from "react";
import styled from "@emotion/styled";

import GraphTab from "@/app/components/Dashboard/GraphTab";

const Container = styled.div`
  padding: 40px 0px 120px 0px;
`;

export default function Views() {
  const [curTab, setCurTab] = useState(TAB_DATA[0].label);
  const [graphData, setGraphData] = useState<any>(TAB_DATA[0].data);

  const changeTab = (tab: string, data: number[]) => {
    setCurTab(tab);
    setGraphData(data);
  };

  return (
    <Container>
      <GraphTab
        curTab={curTab}
        tabs={TAB_DATA}
        changeTab={changeTab}
        graphData={graphData}
      />
    </Container>
  );
}

const TAB_DATA = [
  {
    label: "총 조회수",
    value: "53,230회",
    description: "이것은 툴팁입니다.\n 툴팁 안의 텍스트를 입력해주세요",
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
    label: "평균 시청 시간",
    value: "6.5분",
    description: "이것은 툴팁입니다. 툴팁 안의 텍스트를 입력해주세요",
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
    label: "평균 시청 분량",
    value: "45%",
    description: "이것은 툴팁입니다. 툴팁 안의 텍스트를 입력해주세요",
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
