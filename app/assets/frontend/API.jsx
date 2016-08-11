import ServerActions from "./actions/ServerActions"

export default {
	getAllTweets(){
		$.get("/tweets")
		.success( rawTweets => ServerActions.receivedTweets(rawTweets) ) 
		.error(error => console.log(error));

	}
}