import { Link } from "react-router-dom";
import React from "react";
import './YT.css';
function Yout() {
      return (
        <div>
          <title>SOCIALIZO</title>
          <link rel="icon" href="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099740/samples/people/logo_oxzy9q.jpg" />
          {/* buttons */}
          {/* <div className="filters">
            <button className="filter-options active">All</button>
            <button className="filter-options">trending</button>
            <button className="filter-options">Web development</button>
            <button className="filter-options">Varisu</button>
            <button className="filter-options">Entertainment</button>
            <button className="filter-options">Marvel</button>
            <button className="filter-options">T20 World Cup</button>
            <button className="filter-options">MS Dhoni</button>
          </div> */}

          <div className="side-bar" id="side-bar">
        <button className="links active"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099740/samples/people/home_dv1qeo.png" alt="" /><Link to="/">Home</Link></button>
        <button className="links"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099738/samples/people/subscription_p8zex3.png" alt="" /><Link to="/Subscription">Subscription</Link></button>
        {/* <hr className="seperator" /> */}
        <button className="links"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099739/samples/people/history_bbh4ws.png" alt="" /><Link to="/History">History</Link></button>
        <button className="links"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099738/samples/people/your-video_z7oj2l.png" alt="" /><Link to="/YourVideos">Your Video</Link></button>
        <button className="links"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099738/samples/people/watch-later_u6mqow.png" alt="" /><Link to="/WatchLater">Watch Later</Link></button>
        <button className="links"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099740/samples/people/liked_video_epy2lm.png" alt="" /><Link to="/LinkedVideo">Liked Video</Link></button>
    </div>

          {/* <div>
            <pre>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}<a href="video1.html">{"                                       "}<img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099740/samples/people/img1_zovfmc.jpg" alt="" height={200} width={370} /></a>{"        "}<a href="video2.html"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099739/samples/people/img2_qhrqqx.jpg" alt="" height={200} width={370} /></a>{"         "}<a href="video3.html"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099741/samples/people/img3_dshdn3.jpg" alt="" height={200} width={370} /></a>{"   "}{"\n"}{"\n"}<a href="video4.html">{"                                       "}<img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099742/samples/people/img4_dwqnfu.jpg" alt="" height={200} width={370} /></a>{"        "}<a href="video5.html"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099739/samples/people/img5_lhuz50.jpg" alt="" height={200} width={370} /></a>{"         "}<a href="video6.html"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099737/samples/people/img6_yrtxfc.jpg" alt="" height={200} width={370} /></a>{"\n"}{"\n"}<a href="video7.html">{"                                       "}<img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099738/samples/people/img7_zxpi9a.jpg" alt="" height={200} width={370} /></a>{"        "}<a href="video8.html"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099737/samples/people/img8_uzolxx.jpg" alt="" height={200} width={370} /></a>{"         "}<a href="video9.html"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099741/samples/people/img9_yjdclv.jpg" alt="" height={200} width={370} /></a>{"\n"}{"                                       "}{"\n"}{"    "}{"\n"}{"     "}</pre></div> */}
        </div>
      );
    }
  

  export default Yout;