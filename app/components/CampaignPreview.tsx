import styled from '@emotion/styled';
import CampaignDetail from '@/app/components/CampaignDetail';

const Container = styled.div`
padding: 32px 24px 37px 24px;
display: flex;
background-color: #E6EAEF;
flex-direction: column;
    
`;

const PreviewText = styled.div`
font-family: 'Pretendard';
font-size: 17px;
font-weight: 600;
line-height: 27px;
letter-spacing: -0.015em;
text-align: left;
color: #8696AB;
`;

const PreviewInnerContainer = styled.div`
overflow-y: scroll;
overflow-x: hidden;
height: 80vh;
margin-top: 8px;
border-radius: 16px;
padding: 48px 16px;
background-color: white;
white-space: normal;

`;

interface props {
    brandName: string;
    title: string;
    thumbnailImageSrc: string;
}


export default function CampaignPreview({brandName, title, thumbnailImageSrc}: props) {
    return (
            <Container>
            <PreviewText>
                Preview
            </PreviewText>
            <PreviewInnerContainer>
            <CampaignDetail
            brandName={brandName}
            title={title}
            thumbnailImageSrc={thumbnailImageSrc}/>
            </PreviewInnerContainer>
            </Container>
    )
}