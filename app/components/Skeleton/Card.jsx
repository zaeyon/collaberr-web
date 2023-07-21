import { useLayoutEffect } from "react";
import styled from '@emotion/styled';
import Image from 'next/image';

import lottie from "lottie-web";
import animationData from "@/app/assets/animations/loader_skeletonCard.json";
import animationInitial from "@/app/assets/animations/loader_skeletonCard.png";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Container = styled.div`
  position: relative;
`;

const InitialImage = styled(Image)`
  top: 0;
  left: 15px;
`

export default function Card({}) {

  return (
    <Container>
      <InitialImage
      width={300}
      alt={"animation_initial"}
      src={animationInitial}/>
      <Player
      autoplay
      loop
      src={animationData}
      style={{width: '330px', position: 'absolute', top: 0,left: -10}}
      >
      </Player>
    </Container>
  );
}
