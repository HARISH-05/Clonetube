import { Link } from "react-router-dom";
import React from "react";
import '../YT.css';
import Nav from "../Nav";

const YourVideos = () => {
    return (
        
        <div>
            <Nav />
            <center>
            <button input type="file">Upload</button>
            </center>
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

        <div>
            <pre>
            <button input type="file" ></button>
            </pre>
        </div>

    <div className="side-bar" id="side-bar">
        <button className="links"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099740/samples/people/home_dv1qeo.png" alt="" /><Link to="/Home">Home</Link></button>
        <button className="links"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099738/samples/people/subscription_p8zex3.png" alt="" /><Link to="/Subscription">Subscription</Link></button>
        {/* <hr className="seperator" /> */}
        <button className="links"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099739/samples/people/history_bbh4ws.png" alt="" /><Link to="/History">History</Link></button>
        <button className="links active"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099738/samples/people/your-video_z7oj2l.png" alt="" /><Link to="/YourVideos">Your Video</Link></button>
        <button className="links"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099738/samples/people/watch-later_u6mqow.png" alt="" /><Link to="/WatchLater">Watch Later</Link></button>
        <button className="links"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099740/samples/people/liked_video_epy2lm.png" alt="" /><Link to="/LikedVideo">Liked Video</Link></button>
    </div>

    </div>
    );
}

export default YourVideos;