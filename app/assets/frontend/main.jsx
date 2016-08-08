import TweetBox from "./components/TweetBox"

class Main extends React.Component {
    render() {
        return(
        <div className="container">
        	<TweetBox />
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
