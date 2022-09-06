import React from "react";
import Alien from "../images/Alien.png";
import Tweet from "./Tweet";

const mainTweetList = [
  {
    user: 'Carl2',
    tweet: `Hello World, I'm having a cool day.`,
    url: 'https://bot.to/wp-content/uploads/2020/09/turtle-bot_5f6fa5e518979.png'
  },
  {
    user: 'Carl3',
    tweet: `I'm so sleepy....zzzzz😴`,
    url: 'https://i.redd.it/wpbsxyecm5p51.png'
  },
  {
    user: 'Carl4',
    tweet: `I'm pretty hungry and sleepy.`,
    url: 'https://64.media.tumblr.com/562058b99e1d980133bb695ef618752a/6bfecde5fc0414e4-c2/s540x810/cc40da599d7387545fe188c65325c7490a196b20.png'
  },
  {
    user: 'Carl5',
    tweet: `I'm pretty sweet, if I must say so myself.`,
    url: 'https://64.media.tumblr.com/3e92f6d55c8db66554dd3daae92a08ee/4fd58252d1319272-a3/s540x810/466cd3c68a4c563f0df7d66e69f136610635c821.png'
  }
];

const TweetList = () => {
  return (
    <React.Fragment>
      <div className="row m-2">
        <div className="col-3">
          <img src={Alien} alt="profile" id="profileImages"/>
        </div>
        <div className="col my-4">
          <input type="text" placeholder="What's happening?" size="30"/>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="row justify-content-center mx-2">
          {mainTweetList.map((tweet, index) =>
            <Tweet
              user={tweet.user}
              tweet={tweet.tweet}
              url={tweet.url}
              key={index} />
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default TweetList;