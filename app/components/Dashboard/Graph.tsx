'use client';
import styled from '@emotion/styled';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement
  } from 'chart.js';
import { redirect } from 'next/dist/server/api-utils';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
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

const LegendDiv = styled.div`
    display: flex;
    flex-direction: row;
`; 

const LegendItem = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;

    :nth-of-type(n+2) {
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
    color: var(--gray-gray-500, #8696AB);
    font-size: 13px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: -0.195px;
`

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                font: {
                    size: 140
                }
            }
        }
    },
    scales: {
        x: {
          display: true,
          border: {
            width: 1,
            dash: [2,2]
          },
          ticks: {
            color: '#8696AB',
          }
        },
        y: {
            display: true,
            border: {
                width: 1,
                dash: [2,2]
            },
            ticks:{
                color: '#8696AB',
            },
        },
      },
}

interface props {
    graphData: number[];
}

export default function Graph({graphData}: props) {

    const data = {
        labels,
        datasets: [
          {
            label: '총 조회수',
            data: graphData,
            borderColor: '#57C7B6',
            backgroundColor: '#57C7B6',
            borderWidth: 2.8,
            lineTension: 0.35,
          },
          {
            label: '순 조회수',
            data: [10, 20, 25, 50, 40, 60, 80],
            borderColor: '#B981EE',
            backgroundColor: '#B981EE',
            borderWidth: 2.8,
            lineTension: 0.35,
          }
        ],
      };

    return (
        <Container>
            <LegendDiv>
            {data.datasets.map((legendItem: any, index) => {
                return (
                    <LegendItem
                    key={index}>
                        <LegendMark
                        legendColor={legendItem.backgroundColor}/>
                        <LegendLabel>
                            {legendItem.label}
                        </LegendLabel>
                    </LegendItem>
                )
            })}
            </LegendDiv>
            <Line
            style={{marginTop: 10}}
            options={options}
            data={data}/>
        </Container>
    )
}