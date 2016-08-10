import TweetBox from "./components/TweetBox"
import TweetsList from "./components/TweetsList"

class Main extends React.Component {
	constructor(props){
		super(props);
		this.state = { tweetsList: [] };
	}
	addTweet(tweetToAdd){
		$.post("/tweets", { body: tweetToAdd })
		.success( savedTweet => {
			let newTweetsList = this.state.tweetsList;
			newTweetsList.unshift(savedTweet);
			this.setState({ tweetsList: newTweetsList });
		})
		.error(error => console.log(error));
	}
	componentDidMount() {
		$.ajax("/tweets")
		.success(data => this.setState({ tweetsList: data }))
		.error(error => console.log(error));
	}
    render() {
        return(
        <div className="container">
        	<TweetBox sendTweet={this.addTweet.bind(this)} />
        	<TweetsList tweets={this.state.tweetsList}/>
        </div>
        );
    }
}

let documentReady = () => {
	let reactNode = document.getElementById('react');
	if (reactNode) {
		React.render(<Main/>,reactNode);
	}
};

$(documentReady);
