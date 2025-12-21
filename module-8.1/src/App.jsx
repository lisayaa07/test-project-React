import { useRef, useState } from "react";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>


    
      <video
        ref={videoRef}
        width="400"
        src="https://www.pexels.com/download/video/35281551/"
      />

      <br /><br />


      <button onClick={handlePlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}
