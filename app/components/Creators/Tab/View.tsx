import styled from "@emotion/styled";

import Graph from "../../Dashboard/Graph";

const Container = styled.div``;

export default function View({}) {
  return (
    <Container>
      <Graph
        title={"평균 조회수 (최근 30일)"}
        value={"83,922회"}
        type={"single"}
        data={AVERAGE_VIEW_DATA}
      />
      <Graph
        marginTop={30}
        title={"평균 시청 시간 (최근 30일)"}
        value={"6.4분"}
        type={"single"}
        data={AVERAGE_VIEW_DATA}
      />
      <Graph
        marginTop={30}
        title={"시간대별 평균 시청률"}
        type={"single"}
        data={AVERAGE_VIEWERSHIP_BY_TIME_SLOT}
      />
    </Container>
  );
}

const AVERAGE_VIEW_DATA = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  datasets: [
    {
      legend: { label: "평균 조회수", color: "#57C7B6" },
      data: [20, 100, 50, 20, 60],
      borderColor: "#57C7B6",
      backgroundColor: "#57C7B6",
      borderWidth: 2.8,
      lineTension: 0.35,
    },
  ],
};
const AVERAGE_VIEWING_TIME_DATA = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  datasets: [
    {
      legend: { label: "평균 시청 시간", color: "#57C7B6" },
      data: [20, 100, 50, 20, 60],
      borderColor: "#57C7B6",
      backgroundColor: "#57C7B6",
      borderWidth: 2.8,
      lineTension: 0.35,
    },
  ],
};

const AVERAGE_VIEWERSHIP_BY_TIME_SLOT = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  datasets: [
    {
      legend: { label: "시청률(%)", color: "#57C7B6" },
      data: [200, 100, 50, 20, 60],
      borderColor: "#57C7B6",
      backgroundColor: (context: any) => {
        const bgColor = ["rgba(87, 199, 182, 0.8)", "#ffffff00"];

        if (!context.chart?.chartArea) {
          return;
        }
        const {
          ctx,
          data,
          chartArea: { top, bottom, left, right, width, height },
        } = context.chart;
        console.log("chartArea", context.chart.chartArea);
        const gradientBg = ctx.createLinearGradient(width, 0, width, 300);
        gradientBg.addColorStop(0, bgColor[0]);
        gradientBg.addColorStop(0.9, bgColor[1]);

        return gradientBg;
      },
      borderWidth: 2.8,
      lineTension: 0.35,
      fill: true,
    },
  ],
};
