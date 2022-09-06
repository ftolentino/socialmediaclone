import React from "react";
import Alien from "../images/Alien.png"
import '../App.css';

const Profile = () => {
    return (
      <React.Fragment>
        <div className="container">
          <img src={Alien} alt="profile" id="profileImages"/>
        </div>

      </React.Fragment>
    )
}

export default Profile;