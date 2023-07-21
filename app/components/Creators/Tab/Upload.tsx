import { useEffect } from "react";
import styled from "@emotion/styled";

import Scoreboard from "../../Dashboard/Scoreboard";
import BarChart from "../../Dashboard/BarChart";
import YoutubePlayer from "../../YoutubePlayer";

const Container = styled.div``;

const ChannelVideosDiv = styled.div`
  margin-top: 54px;
`;

const GridDiv = styled.div`
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(307px, 307px));
  justify-content: space-between;
  row-gap: 20px;
`;

interface props {
  channelVideos: any[];
}

export default function Upload({ channelVideos }: props) {
  // useEffect(() => {
  //   const tag = document.createElement("script");
  //   tag.src = "https://www.youtube.com/iframe_api";
  //   var firstScriptTag = document.getElementsByTagName("script")[0];
  //   firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

  //   var player: any;
  //   function onYouTubeIframeAPIReady() {
  //     window.YT.ready(function () {
  //       player = new window.YT.Plater("player", {
  //         height: "360",
  //         width: "640",
  //         videoId: "M7lc1UVf-VE",
  //         events: {
  //           onReady: onPlayerReady,
  //           onStateChange: onPlayerStateChange,
  //         },
  //       });
  //     });
  //   }

  //   // 4. The API will call this function when the video player is ready.
  //   function onPlayerReady(event: any) {
  //     event.target.playVideo();
  //   }

  //   // 5. The API calls this function when the player's state changes.
  //   //    The function indicates that when playing a video (state=1),
  //   //    the player should play for six seconds and then stop.
  //   var done = false;
  //   function onPlayerStateChange(event: any) {
  //     if (event.data == window.YT.PlayerState.PLAYING && !done) {
  //       setTimeout(stopVideo, 6000);
  //       done = true;
  //     }
  //   }
  //   function stopVideo() {
  //     player.stopVideo();
  //   }

  //   //onYouTubeIframeAPIReady();
  // }, []);
  return (
    <Container>
      <Scoreboard data={SCOREBOARD_DATA} gap={30} />
      <BarChart
        marginTop={30}
        title={"주간 업로드 현황 (최근 90일)"}
        data={WEEKLY_UPLOAD_DATA}
      />
      <ChannelVideosDiv>
        <h3>업로드한 콘텐츠</h3>
        <GridDiv>
          {channelVideos.map((videoItem: any, index: number) => {
            return <YoutubePlayer key={index} video={videoItem} />;
          })}
        </GridDiv>
        <div id="player"></div>
      </ChannelVideosDiv>
    </Container>
  );
}

const SCOREBOARD_DATA = [
  {
    label: "등록된 영상 수 (최근 30일)",
    value: "4개",
  },
  {
    label: "평균 주간 업로드",
    value: "1.2개",
  },
  {
    label: "최근 업로드",
    value: "5일 전",
  },
];

const WEEKLY_UPLOAD_DATA = {
  legendArr: ["주간 업로드"],
  legendColorArr: ["#57C7B6"],
  labels: [
    "1월 1주",
    "1월 2주",
    "1월 3주",
    "1월 4주",
    "2월 1주",
    "2월 2주",
    "2월 3주",
    "2월 4주",
  ],
  datasets: [
    {
      labels: "country",
      data: [30, 50, 100, 20, 60, 200, 0, 50, 100, 150],
      backgroundColor: "#57C7B6",
      barPercentage: 0.36,
    },
  ],
};
