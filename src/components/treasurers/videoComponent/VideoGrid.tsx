import React from "react";
import Grid from "@mui/material/Grid";

interface VideoGridProps {
  videoSrc: string;
}
const VideoGridComponent: React.FC<VideoGridProps> = ({ videoSrc }) => {
  return (
    <Grid item xs={6}>
      <iframe
        style={{ border: 0 }}
        title="video"
        width="100%"
        height="100%"
        src={videoSrc}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Grid>
  );
};

export default VideoGridComponent;
