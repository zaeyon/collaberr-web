import { useRef, useLayoutEffect, useState} from "react";
import styled from '@emotion/styled';
import Image from 'next/image';

import animationData from "@/app/assets/animations/loader_skeletonCard.json";
import animationInitial from "@/app/assets/animations/loader_skeletonCard.png";
import { Player } from '@lottiefiles/react-lottie-player';

const Container = styled.div`
  width: 330px;
  height: 400px;
  background-size: 330px;
  background-repeat: no-repeat;
    position: relative;
`;

export default function SkeletonCard({}) {
  const [bgImage, setBgImage] = useState(`url(${animationInitial.src})`);
  const container = useRef();

  useLayoutEffect(() => {
    container.current = document.querySelector('#container');
    
  }, [])

  return (
    <Container
    id={"container"}
    style={{backgroundImage: bgImage}}>
      <Player
      autoplay
      loop
      renderer={'svg'}
      src={animationData}
      progressiveLoad={true}
      style={{width: '330px', position: 'absolute', top: 0,left: 0}}
      onEvent={event => {
        if (event === 'load') {
          setBgImage('none');
        }
      }}
      >
      </Player>
    </Container>
  );
}
