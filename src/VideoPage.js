// import React,{useRef,useState} from 'react';

import "./VideoPage.css";

function VideoPage() {


  return (
    <>
    <div className='top'>
      Video Analytics
    </div>
          <div className="vid">
            <iframe width="400" height="400" margin-right="300px" src="https://www.youtube.com/embed/HucIqi8Lw3E" title="Saina Nehwal Wins Badminton Women's Singles Bronze - IND v CHN | London 2012 Olympics" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="buttons">
          <button className="button">Backward</button>
          <button className="button">Play</button>
          <button className="button">forward</button>
          <button className="button">Pause</button>
          </div>
          
    </>
   
  );
}

export default VideoPage;