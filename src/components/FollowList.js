import React from "react";
import Friend from "./Friend";

const followList = [
  {
    user: 'Carl2',
    url: 'https://bot.to/wp-content/uploads/2020/09/turtle-bot_5f6fa5e518979.png',
  },
  {
    user: 'Carl3',
    url: 'https://i.redd.it/wpbsxyecm5p51.png',
  },
  {
    user: 'Carl4',
    url: 'https://64.media.tumblr.com/562058b99e1d980133bb695ef618752a/6bfecde5fc0414e4-c2/s540x810/cc40da599d7387545fe188c65325c7490a196b20.png'
  },
  {
    user: 'Carl5',
    url: 'https://64.media.tumblr.com/3e92f6d55c8db66554dd3daae92a08ee/4fd58252d1319272-a3/s540x810/466cd3c68a4c563f0df7d66e69f136610635c821.png'
  }
];

const FollowList = () => {
  return (
    <React.Fragment>
      <div className="container m-auto my-4">
        <div className="row justify-content-center mx-2">
          {followList.map((friend, index) =>
            <Friend
              user={friend.user}
              url={friend.url}
              key={index} />
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default FollowList;