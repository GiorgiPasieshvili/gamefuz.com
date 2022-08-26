import { useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

export default function Streamer(props: any) {
  const [player, setPlayer] = useState<any>(null);

  const onPlayerEnd: YouTubeProps["onEnd"] = (event) => {
    props.disableVideo();
  };

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.playVideo();
    setPlayer(event.target);
  };

  if (player !== null) {
    if (!props.isVideoActive) {
      player.pauseVideo();
    }
  }

  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%"
  };

  return (
    <YouTube
      {...props}
      opts={opts}
      onReady={onPlayerReady}
      onEnd={onPlayerEnd}
    />
  );
}
