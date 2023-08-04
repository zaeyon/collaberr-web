import {useRef, useLayoutEffect, useState} from "react";
import styles from "../Creators/CreatorsTableItem.module.scss";
import Image from "next/image";
import Button from "../Button";

import animationData from "@/app/assets/animations/loader_skeletonTable.json";

import {Player} from '@lottiefiles/react-lottie-player';

import default_profile_image from "@/app/assets/icons/icon_profile-fill.png";


export default function SkeletonCreatorsTableItem() {
  return (
    <div className={styles.container}>
      <div className={styles.channelName}>
        {/* <Image
          className={styles.profileImage}
          alt={"channel_profile_image"}
          src={
            default_profile_image
          }
          width={32}
          height={32}
        /> */}
        <span className={styles.dataSpan}>
          <Player
          style={{width: 100, height: 40}}
          autoplay
          loop
          renderer={'svg'}
          src={animationData}
          progressiveLoad={true}
          />
        </span>
      </div>
      <div className={styles.channelType}>
        <span className={styles.typeItem}></span>
      </div>
      <div className={styles.target}>
        <span className={styles.dataSpan}></span>
      </div>
      <div className={styles.subscribers}>
        <span className={styles.dataSpan}>
        </span>
      </div>
      <div className={styles.averageViews}>
        <span className={styles.dataSpan}>
        </span>
      </div>
      <div className={styles.uploads}>
        <span className={styles.dataSpan}>
        </span>
      </div>
      <div className={styles.analyzeButton}>
        <span className={styles.dataSpan}>
          
        </span>
      </div>
    </div>
  );
}
