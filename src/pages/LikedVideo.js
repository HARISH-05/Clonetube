import { Link } from "react-router-dom";
import React from "react";
import '../YT.css';
import Nav from "../Nav";

const LikedVideo = () => {
    return (
        <div>
       <Nav />
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
            {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}<a href="https://res.cloudinary.com/dfedvlxet/video/upload/v1669185404/samples/people/vid/scorpion_gcc7io.mp4"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669186507/samples/people/img/scorpion_gh2hnj.png" alt="" height={200} width={370} /></a>
            {"\n"}{"\n"}<a href="https://res.cloudinary.com/dfedvlxet/video/upload/v1669186656/samples/people/vid/elephants_eybqc9.mp4"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669186507/samples/people/img/elephant_iguzut.png" alt="" height={200} width={370} /></a>
            </pre>
        </div>

    <div className="side-bar" id="side-bar">
        <button className="links"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099740/samples/people/home_dv1qeo.png" alt="" /><Link to="/Home">Home</Link></button>
        <button className="links"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099738/samples/people/subscription_p8zex3.png" alt="" /><Link to="/Subscription">Subscription</Link></button>
        {/* <hr className="seperator" /> */}
        <button className="links"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099739/samples/people/history_bbh4ws.png" alt="" /><Link to="/History">History</Link></button>
        <button className="links"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099738/samples/people/your-video_z7oj2l.png" alt="" /><Link to="/YourVideos">Your Video</Link></button>
        <button className="links"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099738/samples/people/watch-later_u6mqow.png" alt="" /><Link to="/WatchLater">Watch Later</Link></button>
        <button className="links active"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099740/samples/people/liked_video_epy2lm.png" alt="" /><Link to="/LikedVideo">Liked Video</Link></button>
    </div>

    </div>
    );
}

export default LikedVideo;