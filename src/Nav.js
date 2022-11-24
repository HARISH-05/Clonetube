import { Link } from "react-router-dom";
import React from "react";
import './YT.css';

const Nav = props => {
      return (
        <div className="menu">
        <nav className="navbar">
            <div className="toggle-btn" id="toggle-btn" onclick="cl()">
              <span> </span>
              <span> </span>
              <span> </span>
            </div> 
            <img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099736/samples/people/logo1_nxhkmh.jpg" className="logo" alt="" />
            <div className="search-box">
              <input type="text" className="search-bar" placeholder="search" />
              <button className="search-btn" onclick="window.open('load.html','_self');"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099737/samples/people/search_n6yp3r.png" alt="" /></button>
            </div>
            <div class="user-options">
            {/* <img src="img/video.PNG" class="icon" alt="">
            <img src="img/grid.PNG" class="icon" alt="">
            <img src="img/bell.PNG" class="icon" alt=""> */}

            <div class="user-dp">
               <Link to ="./loginout/Log.js"><img src="https://res.cloudinary.com/dfedvlxet/image/upload/v1669099736/samples/people/profile-pic_fkqqsy.png" alt=""/></Link>
            </div>
      </div>
          </nav>
        </div>
    );
};

export default Nav;

