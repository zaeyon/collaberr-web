import styled from "@emotion/styled";

import Graph from "../../Dashboard/Graph";

const Container = styled.div``;

export default function Action({}) {
  return (
    <Container>
      <Graph
        title={"공유 수 (최근 30일)"}
        value={"322회"}
        type={"single"}
        data={SHARE_DATA}
      />
      <Graph
        marginTop={30}
        title={"댓글 수 (최근 30일)"}
        value={"42개"}
        type={"single"}
        data={COMMENT_DATA}
      />
      <Graph
        marginTop={30}
        title={"좋아요 수"}
        value={"1,232개"}
        type={"single"}
        data={LIKE_DATA}
      />
    </Container>
  );
}

const SHARE_DATA = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  datasets: [
    {
      legend: { label: "공유 수", color: "#57C7B6" },
      data: [20, 100, 50, 20, 60],
      borderColor: "#57C7B6",
      backgroundColor: "#57C7B6",
      borderWidth: 2.8,
      lineTension: 0.35,
    },
  ],
};

const COMMENT_DATA = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  datasets: [
    {
      legend: { label: "댓글 수", color: "#57C7B6" },
      data: [20, 100, 50, 20, 60],
      borderColor: "#57C7B6",
      backgroundColor: "#57C7B6",
      borderWidth: 2.8,
      lineTension: 0.35,
    },
  ],
};

const LIKE_DATA = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  datasets: [
    {
      legend: { label: "좋아요 수", color: "#57C7B6" },
      data: [20, 100, 50, 20, 60],
      borderColor: "#57C7B6",
      backgroundColor: "#57C7B6",
      borderWidth: 2.8,
      lineTension: 0.35,
    },
  ],
};
