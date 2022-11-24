import './App.css';
// import Yout from './YT';
// import Nav from './Nav';
import Home from './pages/Home';
import History from './pages/History';
import LikedVideo from './pages/LikedVideo';
import Subscription from './pages/Subscription';
import WatchLater from './pages/WatchLater';
import YourVideos from './pages/YourVideos';
import { Route, Routes } from "react-router-dom";
import Log from './loginout/Log';


function App() {
  return (
    <div className="App">
      {/* <Log /> */}
      {/* <Nav /> */}
      {/* <Yout /> */}
      <Routes>
        <Route exact path="/" element={<Log />} />
        <Route exact path="/Home" element={<Home />} />
        <Route path="/History" element={<History />} />
        <Route path="/LikedVideo" element={<LikedVideo />} />
        <Route path="/Subscription" element={<Subscription />} />
        <Route path="/WatchLater" element={<WatchLater />} />
        <Route path="/YourVideos" element={<YourVideos />} />
      </Routes>
     </div>
  );
}

export default App;
