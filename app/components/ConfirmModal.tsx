'use client';
import styled from '@emotion/styled';
import Image from 'next/image';
import icon_exit from '@/app/assets/icons/icon_exit.png';
import Button from './Button';

const Container = styled.div`
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #242D3530;
`;

const Modal = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px 32px;
    border-radius: 16px;
    width: 413px;
    height: 242px;
    background-color: #ffffff;
    box-shadow: 0px 8px 16px 0px rgba(36, 45, 53, 0.10);
`;

const ExitIcon = styled(Image)`
    align-self: end;
    width: 24px;
    height: 24px;
    cursor: pointer;
`

const Title = styled.div`
    margin-top: 12px;
    color: var(--secondary-gray-gray-800, #35424C);
    font-size: 21px;
    font-family: 'Pretendard';
    font-weight: 600;
    line-height: 160%;
    letter-spacing: -0.315px;  
`;

const Description = styled.div`
    margin-top: 10px;
    color: var(--secondary-gray-gray-700, #445462);
    font-size: 17px;
    font-family: 'Pretendard';
    line-height: 160%;
    letter-spacing: -0.255px;
`;

const Footer = styled.div`
    width: 100%;
    height: 100%; 
    flex-direction: row;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`;

interface props {
    title: string;
    description: string;
    closeModal: () => void;
    submitCampaignCreate: () => void;
}

export default function ConfirmModal({title, description, closeModal, submitCampaignCreate}: props) {
    return (
        <Container>
            <Modal>
                <ExitIcon
                onClick={() => closeModal()}
                width={24}
                height={24}
                src={icon_exit}
                alt={"icon_exit"}/>
                <Title>
                    {title}
                </Title>
                <Description>
                    {description}
                </Description>
                <Footer>
                <Button
                onClick={submitCampaignCreate}
                label={"Register"}
                state={"default"}
                size={"medium"}
                style={"primary"}
                />
                </Footer>
            </Modal>
        </Container>
    )
}