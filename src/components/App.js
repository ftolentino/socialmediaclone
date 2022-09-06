import '../App.css';
import Navbar from './Navbar'
import Profile from './Profile';
import TweetList from './TweetList';
import About from './About';
import FollowList from './FollowList';
import React from 'react';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div class="container d-flex flex-row justify-content-center my-4">
          {/* User Profile */}
        <div class="col mx-2">
          <div class="col">
            <div className="col border border-2 border-dark my-4">
              <Profile />
            </div>
            <div className="col border border-2 border-dark my-4">
              <About />
            </div>    
          </div>
        </div>
        {/* Tweets */}
        <div class="col mx-2">
          <TweetList />
        </div>
        {/* Follow */}
        <div class="col rounded bg-light mx-2">
          <FollowList />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
