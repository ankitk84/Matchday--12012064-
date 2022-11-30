
import React,{useEffect,useState} from 'react';
import crown from './crown.png';
import flag from './flag2.png';
import logo from './logo_white.png';
import './App.css';
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
// import { Link } from "react-router-dom";
 import {} from './VideoPage';

const Home = () => {
    const [items, setItems] = React.useState([]);
  const [page,setPage] = React.useState(0);
  const [hasMore,setHasMore] = React.useState(true);
  const [searchValue,setsearchValue]=useState('');
  const search=()=>{
    
  }
  useEffect(()=>{
search();
  },[searchValue])
  const fetchData = (setItems, items) => {
 
  axios.get(`https://matchday.ai/referee/champ/fixture/dummy-matches?page=${page}`

   )
   .then((res) => {
    let data =res.data.fixtures;
    // console.log(data,"here is response");

     setItems([...items, ...data]);
     setPage(page+1);
     setHasMore(res.data.hasMorePage);
   });
};
useEffect(()=>{
  fetchData(setItems,items)
},[])
 
const refresh = (setItems) => {};

  return (
  
    <div className="App">

      <div className="header">
        International Matches
      </div>
       <div>
       <div className="searchbar">
      <input ></input>
       </div>
      
  </div>
      <InfiniteScroll
     dataLength={items.length} //This is important field to render the next data
     next={() => {
       fetchData(setItems, items);
     }}
     hasMore={hasMore}
     loader={<div class="flex absolute justify-center items-center">
     <div class="spinner-border animate-spin  w-8 h-8 border-4 rounded-full" role="status">
       <span class="visually-hidden"></span>
     </div>
   </div>}
     endMessage={
       <p style={{ textAlign: "center" }}>
         <b>Yay! You have seen it all</b>
       </p>
     }
   >
     <div className='flex flex-wrap justify-around items-center '>
       {items.map((user) => (
        //  <img src={user.url} height="100px" width="200px" />
       <a  href='VideoPage'>
         <div className="card">
        <div className="tourn">
          All India Senior Ranking Badminton Tournament
        </div>
        <div className='round'>Final</div>
        <div className="lower">
          <div className='left'>
            {user.team1[0].name==user.winner && <div className='ccrown'><img src={crown} className="crown" alt="crown" /></div> }    
            <div className='fflag'><img src={flag} className="flag" alt="flag" /></div>
            <p className='name'>{user.team1[0].name}</p>
          </div>
          <div className='center'>
            <p className='ver'>v/s</p>
            <div className='score'>{user.a1}-{user.b1}, {user.a2}-{user.b2}, {user.a3}-{user.b3}</div>
            <div className='llogo'><img src={logo} className="logo" alt="logo" /></div>
          </div>       
          <div className='right'>
          {user.team2[0].name==user.winner && <div className='ccrown'><img src={crown} className="crown" alt="crown" /></div> }  
            <div className='fflag2'><img src={flag} className="flag" alt="flag" /></div>
            <p className='name'>{user.team2[0].name}</p>
          </div>
        </div>
    </div>
       </a>
       ))}
     </div>
   </InfiniteScroll>
    </div>
    // <>
     
    // {/* <div className="card">
    //     <div className="tourn">
    //       All India Senoir Ranking Badminton Tournament
    //     </div>
    //     <div className='round'>Final</div>

    //     <div className="lower">
    //       <div className='left'>
    //        <div className='ccrown'><img src={crown} className="crown" alt="crown" /></div>
    //         <div className='fflag'><img src={flag} className="flag" alt="flag" /></div>
    //         <p className='name'>ankitghfhgfh</p>
    //       </div>
    //       <div className='center'>
    //         <p className='ver'>v/s</p>
    //         <div className='score'>9-21, 21-10, 21-15</div>
    //         <div className='llogo'><img src={logo} className="logo" alt="logo" /></div>
    //       </div>       
    //       <div className='right'>
    //         <div className='fflag2'><img src={flag} className="flag" alt="flag" /></div>
    //         <p className='name'>deepak</p>
    //       </div>
    //     </div>


    // </div> */}

    // </>
  )
}

export default Home;
