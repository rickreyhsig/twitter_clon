import TweetBox from "./components/TweetBox";
import TweetsList from "./components/TweetsList";
import TweetStore from "./stores/TweetStore";

import TweetActions from "./actions/TweetActions";
TweetActions.getAllTweets();

let getAppState = () => {
	return {tweetsList: TweetStore.getAll() };
}

class Main extends React.Component {
	constructor(props){
		super(props);
		this.state = getAppState();
		this._onChange = this._onChange.bind(this);
	}

	componentDidMount() {
		TweetStore.addChangeListener(this._onChange);
	}
	componentWillUnMount() {
		TweetStore.removeChangeListener(this._onChange);
	}
	_onChange(){
		this.setState(getAppState());
	}
    render() {
        return(
        <div className="container">
        	<TweetBox />
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
