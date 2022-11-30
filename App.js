// import logo from './logo.svg';
import React from 'react';
import crown from './crown.png';
import flag from './flag2.png';
import logo from './logo_white.png';
import './App.css';
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import video from "./VideoPage";
import { Link } from "react-router-dom";
import VideoPage from './VideoPage';
import Home from './home';



function App() {
return (
  // <><Home/></>
  // <><VideoPage/></>
  <Router>
      {/* <Home/> */}
    <Routes>
  
    <Route exact path='/' element={<Home/>}/>
      <Route exact path='/videoPage' element={<VideoPage/>}/>
    </Routes>
  </Router>
);
}

export default App;
