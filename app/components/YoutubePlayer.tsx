import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import youtube_button from "@/app/assets/youtube_button.png";

const Container = styled.div``;

const ThumbnailImage = styled(Image)`
  object-fit: cover;
  border-radius: 8px;
`;

const Button = styled(Image)`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  cursor: pointer;
`;

const BlackDiv = styled.div`
  background-color: black;
  opacity: 0.1;
  z-index: 1;
  top: 0;
  left: 0;
  width: 307px;
  height: 172px;
  border-radius: 8px;
  position: absolute;
`;

interface props {
  video: any;
}

export default function YoutubePlayer({ video }: props) {
  return (
    <iframe
      style={{ borderRadius: 8 }}
      width="307"
      height="172"
      src={`https://www.youtube.com/embed/${video.id.videoId}`}
      title={video.snippet.title}
      allow="accelerometer; autoplay; clipboard-write; 
      encrypted-media; gyroscope; picture-in-picture"
      frameBorder={0}
      allowFullScreen
    ></iframe>
  );
}

// <Link
//       target={"_blank"}
//       href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
//     >
//       <Container>
//         <ThumbnailImage
//           width={307}
//           height={172}
//           src={video.snippet.thumbnails.high.url}
//           alt={"video_thumbnail"}
//         />
//         <Button
//           width={60}
//           height={43}
//           src={youtube_button}
//           alt={"youtube_button"}
//         />
//         <motion.div
//           style={{
//             backgroundColor: "#000000",
//             opacity: 0,
//             zIndex: 1,
//             top: 0,
//             left: 0,
//             width: 307,
//             height: 172,
//             borderRadius: 8,
//             position: "absolute",
//             cursor: "pointer",
//           }}
//           whileHover={{
//             opacity: 0.3,
//             transition: { duration: 0.15 },
//           }}
//         ></motion.div>
//       </Container>
//     </Link>
