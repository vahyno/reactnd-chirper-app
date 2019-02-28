import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formatTweet} from '../utils/helpers';

class Tweet extends Component {
    render(){
        const {tweet} = this.props;
        console.log('PROPS: ',this.props);
        return (
            <div className='tweet'>tweet</div>
        )
    }
}

function mapStateToProps ({authedUser, users, tweets}, { id }) {
    const tweet = tweets[id];
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
  
    return {
      authedUser,
      tweet: tweet
        ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
        : null
    };
  }
  

export default connect()(Tweet);