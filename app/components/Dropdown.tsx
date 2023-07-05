'use client';
import styled from '@emotion/styled';
import {usePathname} from 'next/navigation';

const Container = styled.div`
    top: 64px;
    right: 24px;
    position: absolute;
    padding: 16px 12px;
    border-radius: 16px;
    background: #FFF;
    box-shadow: 0px 8px 16px 0px rgba(36, 45, 53, 0.10);
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const DropdownItemDiv = styled.div`
    width: 149px;
    padding: 8px 10px;
    border-radius: 8px;

    :hover {
        border-radius: 8px;
        background: var(--gray-gray-50, #F7F9FB);
    }
`;

interface props {
    items: any []
}

export default function Dropdown({items}: props) {

    const pathname = usePathname(); 

    return (
        <Container>
            {items.map((item, index) => {
                return (
                    <DropdownItemDiv
                    style={{backgroundColor: (pathname === '/setting' && item.label === '계정 설정') ? '#F1F4F7' : '#ffffff'}}
                    onClick={() => item.onClick()}
                    key={index}>
                        <p
                        style={{color: item.label === "로그아웃" ? '#EE204E' : '#536878'}}>{item.label}</p>
                    </DropdownItemDiv>
                )
            })}
        </Container>
    )

}