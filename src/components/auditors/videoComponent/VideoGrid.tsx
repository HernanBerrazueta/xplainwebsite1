import Grid from "@mui/material/Grid";

const VideoGrid = () => {
  return (
    <Grid item xs={6}>
      <iframe
        style={{ border: 0 }}
        title="video"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/MoFj7meoHkY?si=_dQ9XYs67Iw1je6r"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Grid>
  );
};

export default VideoGrid;
