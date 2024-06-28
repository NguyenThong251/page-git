import { Box } from "@mui/material";
import React from "react";
type path = string;

interface VideoComponentProps {
  path: path;
}
const VideoComponent: React.FC<VideoComponentProps> = ({ path }) => {
  return (
    <Box sx={{ marginTop: 10, overflow: "hidden", borderRadius: 2 }}>
      <video
        autoPlay
        playsInline
        width="100%"
        height="240"
        controls={false}
        muted
        preload="none"
      >
        {/* https://github.githubassets.com/assets/hero-lg-6a98e47708e8.mp4 */}
        <source src={path} type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default VideoComponent;
