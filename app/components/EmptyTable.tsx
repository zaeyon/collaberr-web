'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

import icon_emptypage from '@/app/assets/icons/icon_emptypage.png';

const Container = styled.div`
 width: 100%;
 height: 280px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 border-bottom: 1px solid var(--gray-gray-200, #E6EAEF);

`
const Title = styled.div`
    margin-top: 24px;
    margin-bottom: 1px;
    color: var(--gray-gray-600, #536878);
    text-align: center;
    font-family: "Pretendard";
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%;
    letter-spacing: -0.255px;
`;



interface props {
    title: string;
    description?: string;
}

export default function EmptyTable({title, description}: props) {
    return (
        <Container>
            <Image
            width={72}
            height={72}
            alt={"icon_emptypage"}
            src={icon_emptypage}/>
            <Title>
                {title}
            </Title>
            <p>{description}</p>
        </Container>
    )
}