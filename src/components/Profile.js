import React from "react";
import Alien from "../images/Alien.png";
import "../App.css";

const Profile = () => {
  return (
    <React.Fragment>
      <div className="container text-center">
        <div class="row justify-content-center">
          <div class="col">
            <img src={Alien} alt="profile" id="profileImages" />
          </div>
          <div class="col d-flex flex-col align-items-center"><strong>Carl</strong></div>
        </div>
        <div class="row justify-content-center p-4">
          <div class="col">
            <p>Tweets</p>
            <div>30</div>
          </div>
          <div class="col">
            <p>Following</p>
            <div>35</div>
          </div>
          <div class="col">
            <p>Followers</p>
            <div>1K</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
