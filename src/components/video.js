import React from "react";

const VideoFrame = ({ videoSrc, isYouTube }) => {
  return (
    <div className="video-container">
      <iframe
        src={videoSrc}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoFrame;