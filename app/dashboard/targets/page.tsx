'use client';
import styled from '@emotion/styled';

import DoughnutChart from "@/app/components/Dashboard/DoughnutChart"

const Container = styled.div`
  padding: 40px 0px 200px 0px;  
`;

const TwoChartsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;



export default function Targets() {
    return (
        <Container>
            <TwoChartsDiv>
            
            <DoughnutChart
            title={"유입 고객 성별"}
            data={GENDER_RATE_DATA}/>
            <DoughnutChart

            title={"유입 고객 연령대"}
            data={AGE_RATE_DATA}/>
            </TwoChartsDiv>
        </Container>
    )
}

 const GENDER_RATE_DATA = {
    labels: ['남성', '여성'],
    datasets: [
      {
        data: [54, 46],
        backgroundColor: [
            '#75D1C3',
            '#3AB09E',
        ],
        borderColor: [
            '#75D1C3',
            '#3AB09E',
        ],
        borderWidth: 1,
      },
      
    ],
  };


 const AGE_RATE_DATA = {
    labels: ['10대', '20대', '30대', '40대', '50대 이상'],
    datasets: [
      {
        data: [100, 120, 230, 50, 77],
        backgroundColor: [
            '#45A2FF',
            '#3183F6',
            '#75D1C3',
            '#3AB09E',
            '#246B60'
        ],
        borderColor: [
            '#45A2FF',
            '#3183F6',
            '#75D1C3',
            '#3AB09E',
            '#246B60'
        ],
        borderWidth: 1,
      },
      
    ],
  };
  

  