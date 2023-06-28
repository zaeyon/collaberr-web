'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

import icon_chevron_left from '@/app/assets/icons/icon_chevron-left.png';
import icon_chevron_right from '@/app/assets/icons/icon_chevron-right.png';

const Container = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ChebronButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background-color: #F1F4F7;
    :hover {
        background-color: #D1D7DF;
    }

    cursor: pointer;
`;

const ShownDateSpan = styled.span`

    width: 150px;
    font-family: 'Pretendard';
    font-size: 24px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: -0.015em;
    text-align: center;
    color: #242D35;
`

interface props {
    year: number;
    month: number;
    clickLeftButton: () => void;
    clickRightButton: () => void;
}

export default function ShownDateButton({year, month, clickLeftButton, clickRightButton}: props) {
    return (
        <Container>
            <ChebronButton
            onClick={() => clickLeftButton()}>
                <Image
                width={24}
                height={24}
                alt={"icon_chebron_left"}
                src={icon_chevron_left}/>
            </ChebronButton>
            <ShownDateSpan>
                {`${year}년 ${month}월`}
            </ShownDateSpan>
            <ChebronButton
            onClick={() => clickRightButton()}>
                <Image
                width={24}
                height={24}
                alt={"icon_chebron_right"}
                src={icon_chevron_right}/>
            </ChebronButton>
        </Container>
    )
}