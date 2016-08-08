import TweetBox from "./components/TweetBox"
import TweetsList from "./components/TweetsList"

let mockTweets = [
	{ id: 1, name: 'Ricardo Kreyhsig', body: 'My #FirstTweet' },
	{ id: 2, name: 'Ricardo Kreyhsig', body: 'My #SecondTweet' },
	{ id: 3, name: 'Kaio Kreyhsig', body: 'My #FirstTweet' }
]

class Main extends React.Component {
    render() {
        return(
        <div className="container">
        	<TweetBox />
        	<TweetsList tweets={mockTweets}/>
        </div>
        );
    }
}

let documentReady = () => {
    React.render(
      <Main/>,
      document.getElementById('react')
    );
};

$(documentReady);
