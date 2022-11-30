// import React,{useRef,useState} from 'react';

import "./VideoPage.css";

function VideoPage() {
  // const videoRef = useRef(null);
  // const [playing, setPlaying] = useState(false);
  // const [currentTime, setCurrentTime] = useState(0);
  // const [videoTime, setVideoTime] = useState(0);
  // const [progress, setProgress] = useState(0);

  // const videoHandler = (control) => {
  //   if (control === "play") {
  //     videoRef.current.play();
  //     setPlaying(true);
  //     var vid = document.getElementById("video1");
  //     setVideoTime(vid.duration);
  //   } else if (control === "pause") {
  //     videoRef.current.pause();
  //     setPlaying(false);
  //   }
  // };

  // const fastForward = () => {
  //   videoRef.current.currentTime += 5;
  // };

  // const revert = () => {
  //   videoRef.current.currentTime -= 5;
  // };

  // window.setInterval(function () {
  //   setCurrentTime(videoRef.current?.currentTime);
  //   setProgress((videoRef.current?.currentTime / videoTime) * 100);
  // }, 1000);

  return (
    <>
    <div className='top'>
      Video Analytics
    </div>
          <div>
            <video src="https://www.youtube.com/watch?v=HucIqi8Lw3E" typeof="video.mp4" autoPlay></video>
          </div>
    </>
    // <div className="app">
    //   <video
    //     id="video1"
    //     ref={videoRef}
    //     className="video"
    //     src="hello.mp4"
    //   ></video>

    //   <div className="controlsContainer">
    //     <div className="controls">
    //       <img
    //         onClick={revert}
    //         className="controlsIcon"
    //         alt=""
    //         src="/backward-5.svg"
    //       />
    //       {playing ? (
    //         <img
    //           onClick={() => videoHandler("pause")}
    //           className="controlsIcon--small"
    //           alt=""
    //           src="/pause.svg"
    //         />
    //       ) : (
    //         <img
    //           onClick={() => videoHandler("play")}
    //           className="controlsIcon--small"
    //           alt=""
    //           src="/play.svg"
    //         />
    //       )}
    //       <img
    //         className="controlsIcon"
    //         onClick={fastForward}
    //         alt=""
    //         src="/forward-5.svg"
    //       />
    //     </div>
    //   </div>

    //   <div className="timecontrols">
    //     <p className="controlsTime">
    //       {Math.floor(currentTime / 60) +
    //         ":" +
    //         ("0" + Math.floor(currentTime % 60)).slice(-2)}
    //     </p>
    //     <div className="time_progressbarContainer">
    //       <div
    //         style={{ width: `${progress}%` }}
    //         className="time_progressBar"
    //       ></div>
    //     </div>
    //     <p className="controlsTime">
    //       {Math.floor(videoTime / 60) +
    //         ":" +
    //         ("0" + Math.floor(videoTime % 60)).slice(-2)}
    //     </p>
    //   </div>
    // </div>
  );
}

export default VideoPage;