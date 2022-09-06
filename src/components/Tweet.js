import React from "react";
import PropTypes from "prop-types";

const Tweet = (props) => {
  return (
    <React.Fragment>
      <div className="row my-2">
        <div className="col-4 d-flex flex-row justify-content-center"> 
          <img className="userPhoto" src={props.url} alt="userPic" />
            
        </div>
        <div className="col justify-content-center">
            <div className="row"><strong>{props.user}</strong></div>
            <div className="row">{props.tweet}</div>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};

Tweet.propTypes = {
  user: PropTypes.string.isRequired,
  tweet: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default Tweet;
