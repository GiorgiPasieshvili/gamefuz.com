import YouTube, { YouTubeProps } from 'react-youtube';

export default function Streamer(props: any) {
  const onPlayerEnd: YouTubeProps['onEnd'] = (event) => {
    props.setCurrent(1);
  }

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return <YouTube {...props} opts={opts} onEnd={onPlayerEnd} />;
}