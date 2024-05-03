import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";

const YoutubePlayer = ({ videoId }) => {
  const [totalHours, setTotalHours] = useState(0);
  const [player, setPlayer] = useState(null);
  const [startTime, setStartTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const options = {
    height: "420",
    width: "800",
    autoplay: 0,
    controls: 1,
  };

  const handleOnReady = (event) => {
    setPlayer(event.target);
  };

  const handleStateChange = (event) => {
    const state = event.data;
    // -1 (unstarted)
    // 0 (ended)
    // 1 (playing)
    // 2 (paused)
    // 3 (buffering)
    // 5 (video cued).
    if (state === 1) {
      // Video is playing
      setIsPlaying(true);
      setStartTime(player.getCurrentTime());
    } else if (state === 2 || state === 0) {
      // Video is paused or ended
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (player) {
      const interval = setInterval(() => {
        if (isPlaying) {
          const currentTime = player.getCurrentTime();
          const elapsedHours = (currentTime - startTime) / 3600; //  60 seconds * 60 minutes = hour
          setTotalHours((prevTotalHours) => prevTotalHours + elapsedHours);
          setStartTime(currentTime);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [player, isPlaying, startTime]);
  return (
    <div className="learningVideo_container">
      <YouTube
        opts={options}
        onReady={handleOnReady}
        onStateChange={handleStateChange}
        videoId={videoId}
      />
    </div>
  );
};

export default YoutubePlayer;

{
  /* <div className="learningVideo_container">
                <iframe
                  className="learning_iframe"
                  width="800"
                  height="420"
                  src={videoLink}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div> */
}
