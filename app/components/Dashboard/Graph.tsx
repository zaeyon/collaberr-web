"use client";
import styled from "@emotion/styled";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

interface LegendMarkProps {
  legendColor: string;
}

const Container = styled.div`
  margin: auto;
  width: 100%;
  height: 27.5vh;
  position: relative;
`;

const SingleContainer = styled.div`
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  border-radius: 20px;
  border: 1px solid var(--gray-gray-200, #e6eaef);
  background: var(--white, #fff);
`;

const GraphTitle = styled.h6`
  color: #242d35;
  font-weight: 600;
`;

const GraphValue = styled.h2`
  font-weight: 600;
`;

const LegendDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const LegendItem = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;

  :nth-of-type(n + 2) {
    margin-left: 20px;
  }
`;

const LegendMark = styled.span<LegendMarkProps>`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.legendColor};
`;

const LegendLabel = styled.span`
  margin-left: 8px;
  color: var(--gray-gray-500, #8696ab);
  font-size: 13px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: -0.195px;
`;

const GraphDiv = styled.div`
  height: 28.7vh;
`;

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      labels: {
        // This more specific font property overrides the global property
        font: {
          size: 140,
        },
      },
    },
  },
  scales: {
    x: {
      display: true,
      border: {
        width: 1,
        dash: [2, 2],
      },
      ticks: {
        color: "#8696AB",
      },
    },
    y: {
      display: true,
      border: {
        width: 1,
        dash: [2, 2],
      },
      ticks: {
        color: "#8696AB",
      },
    },
  },
};

interface props {
  type?: string;
  data: any;
  title?: string;
  value?: string;
  marginTop?: number;
}

export default function Graph({
  data,
  type = "tab",
  title,
  value,
  marginTop = 0,
}: props) {
  if (type === "tab") {
    return (
      <Container>
        <LegendDiv>
          {data.datasets.map(({ legend }: any, index: number) => {
            return (
              <LegendItem key={index}>
                <LegendMark legendColor={legend.color} />
                <LegendLabel>{legend.label}</LegendLabel>
              </LegendItem>
            );
          })}
        </LegendDiv>
        <Line style={{ marginTop: 10 }} options={options} data={data} />
      </Container>
    );
  } else if (type === "single") {
    return (
      <SingleContainer style={{ marginTop: marginTop }}>
        <GraphTitle>{title}</GraphTitle>
        {value && <GraphValue>{value}</GraphValue>}
        <LegendDiv style={{ marginTop: 20 }}>
          {data.datasets.map(({ legend }: any, index: number) => {
            return (
              <LegendItem key={index}>
                <LegendMark legendColor={legend.color} />
                <LegendLabel>{legend.label}</LegendLabel>
              </LegendItem>
            );
          })}
        </LegendDiv>
        <GraphDiv>
          <Line style={{ marginTop: 10 }} options={options} data={data} />
        </GraphDiv>
      </SingleContainer>
    );
  } else {
    return <></>;
  }
}
