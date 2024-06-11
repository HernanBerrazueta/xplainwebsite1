import React from "react";
import Grid from "@mui/material/Grid";
import {
  sectionStyle,
  containerStyle,
} from "../../treasurers/videoComponent/VideoComponent.styled";
import VideoGrid from "./VideoGrid";
import TextGrid from "./TextGrid";

const VideoComponent: React.FC = () => {
  return (
    <section style={sectionStyle}>
      <Grid container style={containerStyle}>
        <TextGrid />
        <VideoGrid />
      </Grid>
    </section>
  );
};

export default VideoComponent;
