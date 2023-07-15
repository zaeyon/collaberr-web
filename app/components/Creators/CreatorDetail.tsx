"use client";
import { animated, useSpring } from "@react-spring/web";
import { useEffect } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 4;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background: #242d35;
`;

const Modal = styled.div`
  padding: 64px 16px 100px 16px;
  position: fixed;
  z-index: 5;
  right: -984px;
  top: 0;
  background-color: white;
  height: 100%;
  width: 1300px;
  opacity: 1;
`;

interface props {
  clickModalOutside: () => void;
}

export default function CreatorDetail({ clickModalOutside }: props) {
  useEffect(() => {
    console.log("Creator Detaul Open");
    api.start({
      from: {
        right: -984,
      },
      to: {
        right: -100,
      },
    });
  }, []);

  const [modalSprings, api] = useSpring(() => ({
    right: -984,
    config: {
      mass: 1.4,
      friction: 50,
      tension: 400,
    },
  }));

  return (
    <>
      <Container onClick={() => clickModalOutside()}></Container>
      <animated.div
        style={{
          padding: "64px 16px 100px 16px",
          position: "fixed",
          zIndex: 5,
          top: 0,
          backgroundColor: "white",
          height: "100%",
          width: 1084,
          ...modalSprings,
        }}
      >
        <h2>Creator Detail</h2>
      </animated.div>
    </>
  );
}
