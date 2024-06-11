import React from "react";
import Grid from "@mui/material/Grid";
import { sectionStyle, containerStyle } from "./VideoComponent.styled";
import VideoGrid from "./VideoGrid";
import TextGrid from "./TextGrid";

interface VideoProps {
  videoSrc: string;
  title: string;
  text: string;
  backgroundColor: string;
}

const VideoComponent: React.FC<VideoProps> = ({
  videoSrc,
  title,
  text,
  backgroundColor,
}) => {
  return (
    <section
      style={{
        ...sectionStyle,
        backgroundColor,
        height: "90vh",
      }}
    >
      <Grid container style={containerStyle}>
        <VideoGrid videoSrc={videoSrc} />
        <TextGrid title={title} text={text} backgroundColor={backgroundColor} />
      </Grid>
    </section>
  );
};

export default VideoComponent;
