import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src="https://player.vimeo.com/external/289189952.sd.mp4?s=756cbea276c653d18bc7141d8458693936225dd9&profile_id=165&oauth2_token_id=57447761"
      ></video>

      <VideoSidebar />
      <VideoFooter />
      {/* Video footer */}
      {/* VideoSidebar */}
    </div>
  );
}

export default Video;
