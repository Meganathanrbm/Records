import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import learningApi from "../../apis/learning.api";

const YoutubePlayer = ({ videoId, courseId, totalHours, setTotalHours }) => {

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
    return () => {
      learningApi.updateProgress({
        payload: {
          courseId: courseId,
          videoId: videoId,
          progress: totalHours,
        },
        success: (res) => {
          console.log("updated progress success", res);
        },
        error: (err) => {
          console.log("update progress failed", err);
        },
      });
    };
  }, []);

  useEffect(() => {
    if (player) {
      const interval = setInterval(() => {
        if (isPlaying) {
          const currentTime = player.getCurrentTime();
          const elapsedHours = Math.floor(currentTime - startTime); // / 3600; //  60 seconds * 60 minutes = hour
          setTotalHours((prevTotalHours) => prevTotalHours + elapsedHours);
          setStartTime(currentTime);
        }
      }, 1000);
      return () => {
        clearInterval(interval);
      };
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
