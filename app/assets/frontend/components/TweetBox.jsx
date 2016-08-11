import React from 'react';
import TweetActions from "../actions/TweetActions";

export default class TweetBox extends React.Component{
	sendTweet(event) {
		event.preventDefault();
		TweetActions.sendTweet(this.refs.tweetTextArea.value);
		this.refs.tweetTextArea.value = '';
	}

	render() {
		return(
			<form onSubmit= {this.sendTweet.bind(this)}>
			  <div className="input-field">
				<textarea ref="tweetTextArea" className="materialize-textarea" />
				<label> Whats happening? </label>
				<button type="submit" className="btn right"> Tweet </button>
			  </div>
			</form>
		)
	}
}