import styled from "@emotion/styled";

interface LegendMarkProps {
  legendColor: string;
}

const LegendDiv = styled.div`
  margin-top: 20px;
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

interface props {
  legendArr: string[];
  legendColorArr: string[];
}

export default function LegendList({ legendArr, legendColorArr }: props) {
  return (
    <LegendDiv>
      {legendArr.map((item, index) => {
        return (
          <LegendItem key={index}>
            <LegendMark legendColor={legendColorArr[index]} />
            <LegendLabel>{item}</LegendLabel>
          </LegendItem>
        );
      })}
    </LegendDiv>
  );
}
